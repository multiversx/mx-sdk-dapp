import isEqual from 'lodash.isequal';
import { UITagsEnum } from 'constants/UITags.enum';
import { TransactionsHistoryController } from 'controllers/TransactionsHistoryController';
import { ITransactionListItem, MvxNotificationsFeed } from 'lib/sdkDappUi';
import { clearCompletedTransactions } from 'store/actions/transactions/transactionsActions';
import { getStore } from 'store/store';
import { NotificationsFeedEventsEnum } from './types';
import { SidePanelBaseManager } from '../internal/SidePanelBaseManager/SidePanelBaseManager';
import { ToastManager } from '../ToastManager';
import { createToastsFromTransactions } from '../ToastManager/helpers/createToastsFromTransactions';
import { ITransactionToast } from '../ToastManager/types';

interface INotificationsFeedManagerData {
  pendingTransactions: ITransactionToast[];
  historicTransactions: ITransactionListItem[];
}

const NOTIFICATIONS_FEED_STORE_SUBSCRIBE = 'NOTIFICATIONS_FEED_STORE_SUBSCRIBE';

export class NotificationsFeedManager extends SidePanelBaseManager<
  MvxNotificationsFeed,
  INotificationsFeedManagerData,
  NotificationsFeedEventsEnum | typeof NOTIFICATIONS_FEED_STORE_SUBSCRIBE
> {
  private static instance: NotificationsFeedManager;
  private readonly store: ReturnType<typeof getStore>;

  protected initialData: INotificationsFeedManagerData = {
    pendingTransactions: [],
    historicTransactions: []
  };

  public static getInstance(): NotificationsFeedManager {
    if (!NotificationsFeedManager.instance) {
      NotificationsFeedManager.instance = new NotificationsFeedManager();
    }
    return NotificationsFeedManager.instance;
  }

  constructor(store?: ReturnType<typeof getStore>) {
    super({
      uiDataUpdateEvent: NotificationsFeedEventsEnum.OPEN,
      uiTag: UITagsEnum.NOTIFICATIONS_FEED
    });
    this.store = store || getStore();
    this.data = { ...this.initialData };
  }

  public isNotificationsFeedOpen(): boolean {
    return this.isOpen;
  }

  /**
   * Open the notifications feed and toggle off the toast manager.
   */
  public async openNotificationsFeed(): Promise<void> {
    const toastManager = ToastManager.getInstance();
    toastManager.hideToasts();
    await this.openUI();
    await this.updateDataAndNotifications();

    const storeToastsUnsubscribe = this.store.subscribe(
      async (
        { toasts, transactions },
        { toasts: prevToasts, transactions: prevTransactions }
      ) => {
        if (
          !isEqual(prevToasts.transactionToasts, toasts.transactionToasts) ||
          !isEqual(prevTransactions, transactions)
        ) {
          await this.updateDataAndNotifications();
        }
      }
    );
    this.unsubscribeFunctions.set(NOTIFICATIONS_FEED_STORE_SUBSCRIBE, [
      storeToastsUnsubscribe
    ]);

    this.eventBus?.publish(NotificationsFeedEventsEnum.OPEN);
    await this.updateDataAndNotifications();
  }

  /**
   * Close the notifications feed and toggle on the toast manager.
   */
  protected async handleCloseUI() {
    const toastManager = ToastManager.getInstance();
    this.closeUI();
    await toastManager.showToasts();
  }

  protected async setupEventListeners() {
    if (!this.eventBus) {
      return;
    }

    this.subscribeToEventBus(
      NotificationsFeedEventsEnum.CLOSE,
      this.handleCloseUI.bind(this)
    );

    this.subscribeToEventBus(
      NotificationsFeedEventsEnum.CLEAR,
      this.handleClearNotificationsFeedHistory.bind(this)
    );
  }

  protected async updateDataAndNotifications() {
    const { transactions } = this.store.getState();

    const { pendingTransactionToasts } = await createToastsFromTransactions({});

    this.data.pendingTransactions = pendingTransactionToasts;

    this.data.historicTransactions =
      await TransactionsHistoryController.getTransactionsHistory({
        transactionsSessions: transactions
      });

    await this.updateNotificationsFeed();
  }

  private handleClearNotificationsFeedHistory() {
    clearCompletedTransactions();
    this.resetData();
    this.updateNotificationsFeed();
  }

  private async updateNotificationsFeed() {
    if (!this.eventBus) {
      return;
    }

    this.eventBus.publish(
      NotificationsFeedEventsEnum.PENDING_TRANSACTIONS_UPDATE,
      this.data.pendingTransactions
    );

    this.eventBus.publish(
      NotificationsFeedEventsEnum.TRANSACTIONS_HISTORY_UPDATE,
      this.data.historicTransactions
    );
  }
}
