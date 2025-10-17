import { testAddress, testNetwork } from '__mocks__';
import { mockTransaction } from 'managers/ToastManager/helpers/tests/mocks/transactions';
import { NotificationsFeedManager } from '../NotificationsFeedManager';
import { NotificationsFeedEventsEnum } from '../types/notifications.types';

// Mocks
jest.mock('utils/ComponentFactory', () => {
  return {
    ComponentFactory: {
      create: jest.fn()
    }
  };
});

jest.mock('managers/ToastManager', () => {
  return {
    ToastManager: {
      getInstance: jest.fn().mockReturnValue({
        hideToasts: jest.fn(),
        showToasts: jest.fn()
      })
    }
  };
});

jest.mock('controllers/TransactionsHistoryController', () => {
  return {
    TransactionsHistoryController: {
      getTransactionsHistory: jest.fn()
    }
  };
});

jest.mock('store/actions/ui/uiActions', () => ({
  setIsSidePanelOpen: jest.fn()
}));

jest.mock('managers/ToastManager/helpers/createToastsFromTransactions', () => ({
  createToastsFromTransactions: jest.fn()
}));

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

const createMockStore = (state: any) => {
  return {
    getState: () => state,
    subscribe: (_listener: any) => () => void 0
  };
};

describe('NotificationsFeedManager', () => {
  const { ComponentFactory } = require('utils/ComponentFactory');
  const {
    createToastsFromTransactions
  } = require('managers/ToastManager/helpers/createToastsFromTransactions');
  const {
    TransactionsHistoryController
  } = require('controllers/TransactionsHistoryController');

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('publishes pending toasts and empty history', async () => {
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

    createToastsFromTransactions.mockResolvedValue({
      pendingTransactionToasts,
      completedTransactionToasts: []
    });
    TransactionsHistoryController.getTransactionsHistory.mockResolvedValue([]);

    const mockBus = createMockEventBus();
    (ComponentFactory.create as jest.Mock).mockResolvedValue(
      createMockElement(mockBus.bus)
    );

    const manager = new NotificationsFeedManager(
      createMockStore({
        transactions: {},
        toasts: { transactionToasts: [], customToasts: [] }
      }) as any
    );

    await manager.openNotificationsFeed();

    const publishes = mockBus.getPublishes();
    expect(publishes).toEqual(
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
    const history = [
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

    const pendingTransactionToasts: any[] = [];
    const completedTransactionToasts: any[] = [];

    createToastsFromTransactions.mockResolvedValue({
      pendingTransactionToasts,
      completedTransactionToasts
    });
    TransactionsHistoryController.getTransactionsHistory.mockResolvedValue(
      history
    );

    const mockBus = createMockEventBus();
    (ComponentFactory.create as jest.Mock).mockResolvedValue(
      createMockElement(mockBus.bus)
    );

    const manager = new NotificationsFeedManager(
      createMockStore({
        transactions: {},
        toasts: { transactionToasts: [], customToasts: [] }
      }) as any
    );

    await manager.openNotificationsFeed();

    const publishes = mockBus.getPublishes();
    expect(publishes).toEqual(
      expect.arrayContaining<PublishArgs>([
        [NotificationsFeedEventsEnum.PENDING_TRANSACTIONS_UPDATE, []],
        [NotificationsFeedEventsEnum.TRANSACTIONS_HISTORY_UPDATE, history]
      ])
    );
  });
});
