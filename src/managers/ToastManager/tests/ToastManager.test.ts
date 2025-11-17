import { server, rest, testNetwork, mockPendingTransaction } from '__mocks__';
import { mockStore } from '__mocks__/data/mockStore';
import { TRANSACTIONS_ENDPOINT } from 'apiCalls/endpoints';
import { mockTransactionSession } from 'managers/ToastManager/helpers/tests/mocks/transactions';
import * as ToastActions from 'store/actions/toasts/toastsActions';
import { ToastManager } from '../ToastManager';
import { createStoreStub } from './helpers/createStoreStub';
import { LifetimeManager } from '../helpers/LifetimeManager';
import { ToastUICoordinator } from '../ToastUICoordinator';

jest.mock('store/actions/toasts/toastsActions', () => {
  const actual = jest.requireActual<
    typeof import('store/actions/toasts/toastsActions')
  >('store/actions/toasts/toastsActions');

  return {
    ...actual,
    addTransactionToast: jest.fn(),
    createCustomToast: jest.fn()
  };
});

const pendingTransaction = [mockPendingTransaction];

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
  afterEach(() => {
    server.resetHandlers();
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
          transactions: [mockPendingTransaction],
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
          transactions: [
            { ...mockPendingTransaction, status: 'success' } as any
          ],
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

describe('ToastManager custom toasts subscription', () => {
  it('updates custom toast list when new custom toast is created', async () => {
    const initialStore = {
      ...mockStore,
      toasts: {
        customToasts: [],
        transactionToasts: []
      }
    };

    const store = createStoreStub(initialStore);
    const lifetimeManager = new LifetimeManager();
    const uiCoordinator = new ToastUICoordinator({
      onCloseToast: jest.fn().mockReturnValue(true) as any
    });

    const manager = new ToastManager({
      store,
      lifetimeManager,
      uiCoordinator
    });

    const updateCustomToastListSpy = jest.spyOn(
      manager as any,
      'updateCustomToastList'
    );

    await manager.init();
    updateCustomToastListSpy.mockClear();

    store.setState({
      toasts: {
        ...store.getState().toasts,
        customToasts: [
          {
            toastId: 'custom-toast',
            message: 'hello world'
          }
        ]
      }
    });

    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(updateCustomToastListSpy).toHaveBeenCalledTimes(1);
  });
});

describe('ToastManager createTransactionToast', () => {
  it('creates a transaction toast and refreshes transaction list', async () => {
    const initialStore = {
      ...mockStore,
      toasts: {
        customToasts: [],
        transactionToasts: []
      },
      transactions: {}
    };

    const store = createStoreStub(initialStore);
    const lifetimeManager = new LifetimeManager();
    const uiCoordinator = new ToastUICoordinator({
      onCloseToast: jest.fn().mockReturnValue(true) as any
    });
    const manager = new ToastManager({
      store,
      lifetimeManager,
      uiCoordinator
    });

    const addTransactionToastSpy = jest.mocked(
      ToastActions.addTransactionToast
    );
    addTransactionToastSpy.mockReturnValue('new-toast-id');

    const handleCompletedTransactionSpy = jest
      .spyOn(manager as any, 'handleCompletedTransaction')
      .mockReturnValue(true);
    const updateTransactionToastsListSpy = jest
      .spyOn(manager as any, 'updateTransactionToastsList')
      .mockResolvedValue(undefined);

    const result = await manager.createTransactionToast('toast-1', 3000);

    expect(addTransactionToastSpy).toHaveBeenCalledWith({
      toastId: 'toast-1',
      totalDuration: 3000
    });
    expect(handleCompletedTransactionSpy).toHaveBeenCalledWith('toast-1');
    expect(updateTransactionToastsListSpy).toHaveBeenCalledTimes(1);
    expect(result).toBe('new-toast-id');
  });
});

describe('ToastManager createCustomToast', () => {
  it('creates a custom toast and refreshes custom list', async () => {
    const store = createStoreStub(mockStore);
    const manager = new ToastManager({
      store,
      lifetimeManager: new LifetimeManager(),
      uiCoordinator: new ToastUICoordinator({
        onCloseToast: jest.fn().mockReturnValue(true) as any
      })
    });

    const toast = { toastId: 'custom', message: 'hi' } as any;
    const createCustomToastSpy = jest.mocked(ToastActions.createCustomToast);
    createCustomToastSpy.mockReturnValue('custom');
    const updateCustomToastListSpy = jest
      .spyOn(manager as any, 'updateCustomToastList')
      .mockResolvedValue(undefined);

    const result = await manager.createCustomToast(toast);

    expect(createCustomToastSpy).toHaveBeenCalledWith(toast);
    expect(updateCustomToastListSpy).toHaveBeenCalledTimes(1);
    expect(result).toBe('custom');
  });
});
