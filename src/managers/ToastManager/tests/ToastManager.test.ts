import { jest } from '@jest/globals';
import { server, rest, testNetwork } from '__mocks__';
import { mockStore } from '__mocks__/data/mockStore';
import { TRANSACTIONS_ENDPOINT } from 'apiCalls/endpoints';
import {
  mockTransaction,
  mockTransactionSession
} from 'managers/ToastManager/helpers/tests/mocks/transactions';
import { ToastManager } from '../ToastManager';
import { createStoreStub, FakeUICoordinator } from './helpers/fakes';
import { LifetimeManager } from '../helpers/LifetimeManager';

// Build pending REST payload based directly on shared mockTransaction
const pendingTransaction = [
  {
    ...mockTransaction,
    status: 'pending'
  }
];

// Mock toast actions used by ToastManager (track side-effects only)
jest.mock('store/actions/toasts/toastsActions', () => ({
  addTransactionToast: jest.fn().mockImplementation((_payload: any) => null),
  removeTransactionToast: jest.fn(),
  createCustomToast: jest.fn().mockReturnValue('custom-toast-1'),
  removeCustomToast: jest.fn(),
  removeAllCustomToasts: jest.fn(),
  customToastCloseHandlersDictionary: {},
  customToastComponentDictionary: {}
}));

const SESSION_ID = '1760451058752';
// Use real createToastsFromTransactions pathway (no mock) and wire MSW

// Test helpers for readability
function setInitialPendingRestResponse() {
  server.use(
    rest.get(
      `${testNetwork.apiAddress}/${TRANSACTIONS_ENDPOINT}`,
      (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(pendingTransaction));
      }
    )
  );
}

describe('ToastManager subscription reacts to transaction completion', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    setInitialPendingRestResponse();
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

    const ui = new FakeUICoordinator();
    const mockPublishTransactionToasts = jest.mocked(
      ui.publishTransactionToasts
    );

    const manager = new ToastManager({
      store,
      lifetimeManager,
      uiCoordinator: ui as any
    });
    await manager.init();

    // Initial publish should contain a pending toast for this session id
    expect(mockPublishTransactionToasts).toHaveBeenCalledWith(
      expect.arrayContaining([expect.objectContaining({ toastId: SESSION_ID })])
    );

    // Change transaction session to success (as provided by user scenario)
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
