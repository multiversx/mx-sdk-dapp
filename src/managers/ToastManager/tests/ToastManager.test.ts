import { jest } from '@jest/globals';
import { server, rest, testNetwork } from '__mocks__';
import { mockStore } from '__mocks__/data/mockStore';
import { TRANSACTIONS_ENDPOINT } from 'apiCalls/endpoints';
import {
  mockTransaction,
  mockTransactionSession
} from 'managers/ToastManager/helpers/tests/mocks/transactions';
import { ToastManager } from '../ToastManager';
import { createStoreStub } from './helpers/createStoreStub';
import { LifetimeManager } from '../helpers/LifetimeManager';
import { ToastUICoordinator } from '../ToastUICoordinator';

const pendingTransaction = [
  {
    ...mockTransaction,
    status: 'pending'
  }
];

const SESSION_ID = '1760451058752';

describe('ToastManager subscription reacts to transaction completion', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    server.use(
      rest.get(
        `${testNetwork.apiAddress}/${TRANSACTIONS_ENDPOINT}`,
        (_req, res, ctx) => {
          return res(ctx.status(200), ctx.json(pendingTransaction));
        }
      )
    );
  });

  it('moves toast from pending to completed when status changes to success and starts lifetime', async () => {
    const startTime = 1_700_000_000_000; // arbitrary
    const endTime = startTime + 10_000;

    const initialStore = {
      ...mockStore,
      toasts: {
        transactionToasts: [
          {
            toastId: SESSION_ID,
            startTime,
            endTime
          }
        ],
        customToasts: []
      },
      transactions: {
        [SESSION_ID]: {
          status: 'sent',
          transactions: [{ ...mockTransaction, status: 'pending' }],
          transactionsDisplayInfo:
            mockTransactionSession.transactionsDisplayInfo,
          interpretedTransactions: {}
        }
      }
    };

    const store = createStoreStub(initialStore);
    const lifetimeManager = new LifetimeManager();
    jest.spyOn(lifetimeManager, 'start').mockImplementation(jest.fn() as any);

    const uiCoordinator = new ToastUICoordinator({
      onCloseToast: jest.fn().mockReturnValue(true) as any
    });

    jest
      .spyOn(uiCoordinator, 'publishTransactionToasts')
      .mockImplementation(jest.fn() as any);

    const mockPublishTransactionToasts = jest.mocked(
      uiCoordinator.publishTransactionToasts
    );

    const manager = new ToastManager({
      store,
      lifetimeManager,
      uiCoordinator
    });

    await manager.init();

    // Initial publish should contain a pending toast for this session id
    expect(mockPublishTransactionToasts).toHaveBeenCalledWith(
      expect.arrayContaining([expect.objectContaining({ toastId: SESSION_ID })])
    );

    // Change transaction session to success
    store.setState({
      transactions: {
        [SESSION_ID]: {
          status: 'success',
          transactions: [{ ...mockTransaction, status: 'success' } as any],
          transactionsDisplayInfo:
            mockTransactionSession.transactionsDisplayInfo,
          interpretedTransactions: {},
          errorMessage: mockTransactionSession.errorMessage
        }
      }
    });

    // Allow async subscriber and async computations to complete
    await new Promise((r) => setTimeout(r, 0));

    // On completion, lifetime should start for this toast id
    expect(lifetimeManager.start).toHaveBeenCalledWith(SESSION_ID);

    // And UI should publish the completed toast state for this session id
    expect(mockPublishTransactionToasts).toHaveBeenLastCalledWith(
      expect.arrayContaining([expect.objectContaining({ toastId: SESSION_ID })])
    );
  });
});
