import isEqual from 'lodash.isequal';
import { UITagsEnum } from 'constants/UITags.enum';
import { TransactionsHistoryController } from 'controllers/TransactionsHistoryController';
import { ITransactionListItem, MvxNotificationsFeed } from 'lib/sdkDappUi';
import { clearCompletedTransactions } from 'store/actions/transactions/transactionsActions';
import { getStore } from 'store/store';
import { NotificationsFeedEventsEnum } from './types';
import { SidePanelBaseManager } from '../internal/SidePanelBaseManager/SidePanelBaseManager';
import { createToastsFromTransactions } from '../internal/ToastManager/helpers/createToastsFromTransactions';
import { ITransactionToast } from '../internal/ToastManager/types';
import { ToastManager } from '../internal';

interface INotificationsFeedManagerData {
  pendingTransactions: ITransactionToast[];
  historicTransactions: ITransactionListItem[];
}

export class NotificationsFeedManager extends SidePanelBaseManager<
  MvxNotificationsFeed,
  INotificationsFeedManagerData,
  NotificationsFeedEventsEnum
> {
  private static instance: NotificationsFeedManager;
  private store = getStore();

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

  constructor() {
    super({
      uiDataUpdateEvent: NotificationsFeedEventsEnum.OPEN_NOTIFICATIONS_FEED,
      uiTag: UITagsEnum.NOTIFICATIONS_FEED
    });
    this.data = { ...this.initialData };
  }

  public isNotificationsFeedOpen(): boolean {
    return this.isOpen;
  }

  public async openNotificationsFeed() {
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
    this.unsubscribeFunctions.push(storeToastsUnsubscribe);

    this.eventBus?.publish(NotificationsFeedEventsEnum.OPEN_NOTIFICATIONS_FEED);
    await this.updateDataAndNotifications();
  }

  protected handleCloseUI() {
    const toastManager = ToastManager.getInstance();
    toastManager.showToasts();
    this.closeUI();
  }

  protected async setupEventListeners() {
    if (!this.eventBus) {
      return;
    }

    this.subscribeToEventBus(
      NotificationsFeedEventsEnum.CLOSE_NOTIFICATIONS_FEED,
      this.handleCloseUI.bind(this)
    );

    this.subscribeToEventBus(
      NotificationsFeedEventsEnum.CLEAR_NOTIFICATIONS_FEED_HISTORY,
      this.handleClearNotificationsFeedHistory.bind(this)
    );
  }

  protected async updateDataAndNotifications() {
    const { transactions, account, toasts, network } = this.store.getState();

    const { pendingTransactionToasts } = await createToastsFromTransactions({
      toastList: toasts,
      transactionsSessions: transactions,
      account
    });

    this.data.pendingTransactions = pendingTransactionToasts;

    this.data.historicTransactions =
      await TransactionsHistoryController.getTransactionsHistory({
        transactionsSessions: transactions,
        address: account.address,
        explorerAddress: network.network.explorerAddress,
        egldLabel: network.network.egldLabel
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
