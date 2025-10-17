import { testAddress, testNetwork } from '__mocks__';
import { mockTransaction } from 'managers/ToastManager/helpers/tests/mocks/transactions';
import { createStoreStub } from 'managers/ToastManager/tests/helpers/createStoreStub';
import { NotificationsFeedManager } from '../NotificationsFeedManager';
import { NotificationsFeedEventsEnum } from '../types/notifications.types';

// Reusable pending toasts fixture shared across tests
const pendingTransactionToasts = [
  {
    toastDataState: {
      id: '1760689933824',
      icon: 'hourglass',
      hasCloseButton: false,
      title: 'Processing Self transaction',
      iconClassName: 'warning'
    },
    processedTransactionsStatus: '0 / 1 transactions processed',
    transactionProgressState: {
      endTime: 1760689939.824,
      startTime: 1760689933.824
    },
    toastId: '1760689933824',
    transactions: [
      {
        asset: { icon: 'hourglass' },
        interactor: testAddress,
        directionLabel: 'From',
        action: { name: 'Received xEGLD' },
        amount: '0 xEGLD',
        hash: mockTransaction.hash,
        status: 'pending',
        link: `${testNetwork.explorerAddress}/transactions/${mockTransaction.hash}`
      }
    ]
  }
];

// Reusable success transactions history fixture
const successTransactions = [
  {
    asset: null,
    interactor: testAddress,
    directionLabel: 'From',
    action: { name: 'Received xEGLD' },
    amount: '0 xEGLD',
    hash: mockTransaction.hash,
    status: 'success',
    link: `${testNetwork.explorerAddress}/transactions/${mockTransaction.hash}`
  }
];

type PublishArgs = [NotificationsFeedEventsEnum, any];

const createMockEventBus = () => {
  const publishes: PublishArgs[] = [];
  const subscriptions: Array<{
    event: NotificationsFeedEventsEnum | string;
    callback: Function;
  }> = [];

  return {
    bus: {
      publish: (event: NotificationsFeedEventsEnum, data: any) => {
        publishes.push([event, data]);
      },
      subscribe: (
        event: NotificationsFeedEventsEnum | string,
        callback: Function
      ) => {
        subscriptions.push({ event, callback });
        return () => void 0;
      }
    },
    getPublishes: () => publishes
  };
};

const createMockElement = (bus: any) => ({
  getEventBus: async () => bus,
  closeWithAnimation: undefined
});

// Helper to derive a pending toast from the reusable fixture with a custom session id
const createPendingToastForSession = (sessionId: string) => ({
  ...pendingTransactionToasts[0],
  toastId: sessionId,
  toastDataState: {
    ...pendingTransactionToasts[0].toastDataState,
    id: sessionId
  }
});

jest.mock('managers/ToastManager/helpers/createToastsFromTransactions', () => {
  const actual = jest.requireActual(
    'managers/ToastManager/helpers/createToastsFromTransactions'
  );
  return {
    ...actual,
    createToastsFromTransactions: jest.fn()
  };
});

describe('NotificationsFeedManager', () => {
  const createToastsModule = require('managers/ToastManager/helpers/createToastsFromTransactions');
  const {
    TransactionsHistoryController
  } = require('controllers/TransactionsHistoryController');
  const { ComponentFactory } = require('utils/ComponentFactory');
  let testBus: ReturnType<typeof createMockEventBus>;

  beforeEach(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
    testBus = createMockEventBus();
    jest
      .spyOn(ComponentFactory, 'create')
      .mockResolvedValue(createMockElement(testBus.bus));
  });

  it('publishes pending toasts and empty history', async () => {
    jest
      .spyOn(createToastsModule, 'createToastsFromTransactions')
      .mockResolvedValue({
        pendingTransactionToasts,
        completedTransactionToasts: []
      });
    jest
      .spyOn(TransactionsHistoryController, 'getTransactionsHistory')
      .mockResolvedValue([]);

    const manager = new NotificationsFeedManager(
      createStoreStub({
        transactions: {},
        toasts: { transactionToasts: [], customToasts: [] }
      })
    );

    await manager.openNotificationsFeed();

    expect(testBus.getPublishes()).toEqual(
      expect.arrayContaining<PublishArgs>([
        [
          NotificationsFeedEventsEnum.PENDING_TRANSACTIONS_UPDATE,
          pendingTransactionToasts
        ],
        [NotificationsFeedEventsEnum.TRANSACTIONS_HISTORY_UPDATE, []]
      ])
    );
  });

  it('publishes empty pending toasts and history list', async () => {
    jest
      .spyOn(createToastsModule, 'createToastsFromTransactions')
      .mockResolvedValue({
        pendingTransactionToasts: [],
        completedTransactionToasts: []
      });
    jest
      .spyOn(TransactionsHistoryController, 'getTransactionsHistory')
      .mockResolvedValue(successTransactions);

    const manager = new NotificationsFeedManager(
      createStoreStub({
        transactions: {},
        toasts: { transactionToasts: [], customToasts: [] }
      })
    );

    await manager.openNotificationsFeed();

    expect(testBus.getPublishes()).toEqual(
      expect.arrayContaining<PublishArgs>([
        [NotificationsFeedEventsEnum.PENDING_TRANSACTIONS_UPDATE, []],
        [
          NotificationsFeedEventsEnum.TRANSACTIONS_HISTORY_UPDATE,
          successTransactions
        ]
      ])
    );
  });

  it('reacts to transaction completion by updating pending and history', async () => {
    const SESSION_ID = '1760451058752';

    // First call: one pending toast exists
    const pendingToast = createPendingToastForSession(SESSION_ID);

    // Second call: no pending toasts remain after success
    jest
      .spyOn(createToastsModule, 'createToastsFromTransactions')
      .mockResolvedValueOnce({
        pendingTransactionToasts: [pendingToast],
        completedTransactionToasts: []
      })
      .mockResolvedValueOnce({
        pendingTransactionToasts: [],
        completedTransactionToasts: []
      });

    // First history call (initial open) may be with empty sessions; return empty
    jest
      .spyOn(TransactionsHistoryController, 'getTransactionsHistory')
      .mockResolvedValueOnce([])
      // After success, return one historic item
      .mockResolvedValueOnce(successTransactions);

    // Create store that can notify subscribers of state changes
    const store = createStoreStub({
      transactions: {
        [SESSION_ID]: {
          status: 'pending',
          transactions: [{ ...mockTransaction, status: 'pending' }],
          transactionsDisplayInfo: {},
          interpretedTransactions: {}
        }
      },
      toasts: { transactionToasts: [{ toastId: SESSION_ID }], customToasts: [] }
    });

    const manager = new NotificationsFeedManager(store);

    await manager.openNotificationsFeed();

    // Initially, pending should be published with one toast
    expect(testBus.getPublishes()).toEqual(
      expect.arrayContaining<PublishArgs>([
        [
          NotificationsFeedEventsEnum.PENDING_TRANSACTIONS_UPDATE,
          expect.arrayContaining([
            expect.objectContaining({ toastId: SESSION_ID })
          ])
        ]
      ])
    );

    // Allow microtask queue to flush async handlers
    await new Promise((r) => setTimeout(r, 0));

    const publishesAfter = testBus.getPublishes();

    // After success, pending list should become empty and history should include the item
    expect(publishesAfter).toEqual(
      expect.arrayContaining<PublishArgs>([
        [NotificationsFeedEventsEnum.PENDING_TRANSACTIONS_UPDATE, []],
        [
          NotificationsFeedEventsEnum.TRANSACTIONS_HISTORY_UPDATE,
          expect.arrayContaining([
            expect.objectContaining({
              hash: mockTransaction.hash,
              status: 'success'
            })
          ])
        ]
      ])
    );
  });
});
