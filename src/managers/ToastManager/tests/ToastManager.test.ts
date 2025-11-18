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

const createOnCloseToastMock = () => jest.fn().mockReturnValue(true) as any;

type StoreState = Parameters<typeof createStoreStub>[0];

type ToastManagerTestContextOptions = {
  storeState?: StoreState;
  lifetimeManager?: LifetimeManager;
  uiCoordinator?: ToastUICoordinator;
};

const createToastManagerTestContext = (
  options: ToastManagerTestContextOptions = {}
) => {
  const {
    storeState = mockStore,
    lifetimeManager = new LifetimeManager(),
    uiCoordinator = new ToastUICoordinator({
      onCloseToast: createOnCloseToastMock()
    })
  } = options;

  const store = createStoreStub(storeState);

  const manager = new ToastManager({
    store,
    lifetimeManager,
    uiCoordinator
  });

  return { store, lifetimeManager, uiCoordinator, manager };
};

const flushAsync = () => new Promise((resolve) => setTimeout(resolve, 0));

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

    const { store, lifetimeManager, uiCoordinator, manager } =
      createToastManagerTestContext({
        storeState: initialStore
      });
    jest.spyOn(lifetimeManager, 'start').mockImplementation(jest.fn() as any);

    jest
      .spyOn(uiCoordinator, 'publishTransactionToasts')
      .mockImplementation(jest.fn() as any);

    await manager.init();

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
    await flushAsync();

    expect(lifetimeManager.start).toHaveBeenCalledWith(SESSION_ID);
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

    const { store, manager } = createToastManagerTestContext({
      storeState: initialStore
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

    await flushAsync();

    expect(updateCustomToastListSpy).toHaveBeenCalledTimes(1);
  });
});

describe('ToastManager createTransactionToast', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('creates a transaction toast and refreshes transaction list', async () => {
    const initialStore = {
      ...mockStore,
      toasts: {
        customToasts: [],
        transactionToasts: []
      },
      transactions: {}
    };

    const { manager } = createToastManagerTestContext({
      storeState: initialStore
    });

    jest
      .mocked(ToastActions.addTransactionToast)
      .mockReturnValue('new-toast-id');

    jest
      .spyOn(manager as any, 'handleCompletedTransaction')
      .mockReturnValue(true);
    jest
      .spyOn(manager as any, 'updateTransactionToastsList')
      .mockResolvedValue(undefined);

    const result = await manager.createTransactionToast('toast-1', 3000);

    expect(result).toBe('new-toast-id');
  });
});

describe('ToastManager createCustomToast', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('creates a custom toast and refreshes custom list', async () => {
    const { manager } = createToastManagerTestContext();

    const toast = { toastId: 'custom', message: 'hi' } as any;
    jest.mocked(ToastActions.createCustomToast).mockReturnValue('custom');
    jest
      .spyOn(manager as any, 'updateCustomToastList')
      .mockResolvedValue(undefined);

    const result = await manager.createCustomToast(toast);

    expect(result).toBe('custom');
  });
});

describe('ToastManager showToasts', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('shows UI toasts and refreshes both lists', async () => {
    const { manager, uiCoordinator } = createToastManagerTestContext();

    jest
      .spyOn(manager as any, 'updateCustomToastList')
      .mockResolvedValue(undefined);
    jest
      .spyOn(manager as any, 'updateTransactionToastsList')
      .mockResolvedValue(undefined);
    const showToastsSpy = jest
      .spyOn(uiCoordinator, 'showToasts')
      .mockImplementation(jest.fn());

    await manager.showToasts();

    expect(showToastsSpy).toHaveBeenCalledTimes(1);
  });
});

describe('ToastManager closeToast', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns true when closing an existing custom toast', () => {
    const toastId = 'custom-toast';
    const { manager } = createToastManagerTestContext();

    (manager as any).customToasts = [{ toastId, message: 'hello' }];

    const result = manager.closeToast(toastId);

    expect(result).toBe(true);
  });
});

describe('ToastManager handleTransactionToastClose', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns true when transaction toast is completed', () => {
    const toastId = 'transaction-toast';
    const { manager } = createToastManagerTestContext();

    jest
      .spyOn(manager as any, 'handleCompletedTransaction')
      .mockReturnValue(true);

    const result = (manager as any).handleTransactionToastClose(toastId);

    expect(result).toBe(true);
  });
});
