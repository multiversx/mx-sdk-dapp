import isEqual from 'lodash.isequal';
import { UITagsEnum } from 'constants/UITags.enum';
import { TransactionsHistoryController } from 'controllers/TransactionsHistoryController';
import { ITransactionListItem, MvxNotificationsFeed } from 'lib/sdkDappCoreUi';
import { clearCompletedTransactions } from 'store/actions/transactions/transactionsActions';
import { getStore } from 'store/store';
import { NotificationsFeedEventsEnum } from './types';
import { SidePanelBaseManager } from '../internal/SidePanelBaseManager/SidePanelBaseManager';
import { createToastsFromTransactions } from '../internal/ToastManager/helpers/createToastsFromTransactions';
import { ITransactionToast } from '../internal/ToastManager/types';

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
      uiTag: UITagsEnum.NOTIFICATIONS_FEED,
      uiSidePanelOpenEvent: NotificationsFeedEventsEnum.OPEN_NOTIFICATIONS_FEED,
      uiSidePanelCloseEvent:
        NotificationsFeedEventsEnum.CLOSE_NOTIFICATIONS_FEED
    });
    this.data = { ...this.initialData };
  }

  public isNotificationsFeedOpen(): boolean {
    return this.isOpen;
  }

  // public async init() {
  //   await super.init();
  //   this.setInitialData();
  //   this.resetData();
  //   await this.updateDataAndNotifications();

  //   const storeToastsUnsubscribe = this.store.subscribe(
  //     async (
  //       { toasts, transactions },
  //       { toasts: prevToasts, transactions: prevTransactions }
  //     ) => {
  //       if (
  //         !isEqual(prevToasts.transactionToasts, toasts.transactionToasts) ||
  //         !isEqual(prevTransactions, transactions)
  //       ) {
  //         await this.updateDataAndNotifications();
  //       }
  //     }
  //   );

  //   this.unsubscribeFunctions.push(storeToastsUnsubscribe);
  // }

  public async openNotificationsFeed() {
    await this.openUI();
    this.resetData();
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

  public async destroy() {
    await super.destroy();
  }

  protected handleCloseUI() {
    this.isOpen = false;
  }

  protected async setupEventListeners() {
    if (!this.eventBus) {
      return;
    }

    this.eventBus.subscribe(
      NotificationsFeedEventsEnum.CLOSE_NOTIFICATIONS_FEED,
      this.handleCloseUI.bind(this)
    );

    this.unsubscribeFunctions.push(() => {
      this.eventBus?.unsubscribe(
        NotificationsFeedEventsEnum.CLOSE_NOTIFICATIONS_FEED,
        this.handleCloseUI.bind(this)
      );
    });

    this.eventBus.subscribe(
      NotificationsFeedEventsEnum.CLEAR_NOTIFICATIONS_FEED_HISTORY,
      this.handleClearNotificationsFeedHistory.bind(this)
    );

    this.unsubscribeFunctions.push(() => {
      this.eventBus?.unsubscribe(
        NotificationsFeedEventsEnum.CLEAR_NOTIFICATIONS_FEED_HISTORY,
        this.handleClearNotificationsFeedHistory.bind(this)
      );
    });
  }

  private handleClearNotificationsFeedHistory() {
    clearCompletedTransactions();
    this.resetData();
    this.updateNotificationsFeed();
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

  private async updateNotificationsFeed() {
    if (!this.eventBus) {
      await this.getEventBus();
    }

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

  // private setInitialData() {
  //   this.initialData = {
  //     pendingTransactions: [],
  //     historicTransactions: []
  //   };
  // }
}
