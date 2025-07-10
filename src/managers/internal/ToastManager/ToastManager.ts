import isEqual from 'lodash.isequal';
import { UITagsEnum } from 'constants/UITags.enum';
import { MvxToastList } from 'lib/sdkDappUi';
import { NotificationsFeedManager } from 'managers/NotificationsFeedManager/NotificationsFeedManager';
import {
  customToastCloseHandlersDictionary,
  customToastComponentDictionary,
  removeAllCustomToasts,
  removeCustomToast,
  removeTransactionToast,
  addTransactionToast,
  createCustomToast
} from 'store/actions/toasts/toastsActions';
import {
  getIsTransactionFailed,
  getIsTransactionSuccessful,
  getIsTransactionTimedOut
} from 'store/actions/transactions/transactionStateByStatus';

import { CustomToastType } from 'store/slices/toast/toastSlice.types';
import { getStore } from 'store/store';
import { IEventBus } from 'types/manager.types';
import { ProviderErrorsEnum } from 'types/provider.types';
import { ComponentFactory } from 'utils/ComponentFactory';
import { createToastsFromTransactions } from './helpers/createToastsFromTransactions';
import { LifetimeManager } from './helpers/LifetimeManager';
import { ITransactionToast, ToastEventsEnum } from './types';

interface IToastManager {
  successfulToastLifetime?: number;
}

const DEFAULT_SUCCESSFUL_TOAST_LIFETIME = 10_000;

export class ToastManager {
  private readonly lifetimeManager: LifetimeManager;
  private isCreatingElement = false;
  private static instance: ToastManager;
  private toastsElement: MvxToastList | null = null;
  private transactionToasts: ITransactionToast[] = [];
  private customToasts: CustomToastType[] = [];
  private successfulToastLifetime?: number;
  private storeToastsSubscription: () => void = () => null;
  private readonly notificationsFeedManager: NotificationsFeedManager;
  private eventBusUnsubscribeFunctions: (() => void)[] = [];
  private eventBus: IEventBus<
    ITransactionToast[] | CustomToastType[] | null
  > | null = null;

  store = getStore();

  constructor() {
    this.destroy();
    this.lifetimeManager = new LifetimeManager();

    this.notificationsFeedManager = NotificationsFeedManager.getInstance();
  }

  public async init({
    successfulToastLifetime = DEFAULT_SUCCESSFUL_TOAST_LIFETIME
  }: IToastManager = {}) {
    this.successfulToastLifetime = successfulToastLifetime;

    this.lifetimeManager.init({ successfulToastLifetime });

    this.updateTransactionToastsList();
    this.updateCustomToastList();

    await this.subscribeToEventBusNotifications();

    this.storeToastsSubscription = this.store.subscribe(
      (
        { toasts, transactions },
        { toasts: prevToasts, transactions: prevTransactions }
      ) => {
        if (
          !isEqual(prevToasts.transactionToasts, toasts.transactionToasts) ||
          !isEqual(prevTransactions, transactions)
        ) {
          this.updateTransactionToastsList();
        }

        if (!isEqual(prevToasts.customToasts, toasts.customToasts)) {
          this.updateCustomToastList();
        }
      }
    );
  }

  public static getInstance(): ToastManager {
    if (!ToastManager.instance) {
      ToastManager.instance = new ToastManager();
    }
    return ToastManager.instance;
  }

  private handleCompletedTransaction(toastId: string): boolean {
    const { transactions } = this.store.getState();
    const transaction = transactions[toastId];

    if (!transaction) {
      return false;
    }

    const { status } = transaction;
    const isTimedOut = getIsTransactionTimedOut(status);
    const isFailed = getIsTransactionFailed(status);
    const isSuccessful = getIsTransactionSuccessful(status);
    const isCompleted = isFailed || isSuccessful || isTimedOut;

    if (isCompleted) {
      if (this.successfulToastLifetime) {
        this.lifetimeManager.start(toastId);
      }
      return isCompleted;
    }

    this.lifetimeManager.stop(toastId);
    return isCompleted;
  }

  public createTransactionToast(
    toastId: string,
    totalDuration: number
  ): string {
    const newToastId = addTransactionToast({
      toastId,
      totalDuration
    });

    this.handleCompletedTransaction(toastId);
    this.updateTransactionToastsList();
    return newToastId;
  }

  public createCustomToast(toast: CustomToastType): string {
    const toastId = createCustomToast(toast);
    this.updateCustomToastList();
    return toastId;
  }

  private async updateTransactionToastsList() {
    const {
      toasts: toastList,
      transactions: transactionsSessions,
      account
    } = this.store.getState();

    const { pendingTransactionToasts, completedTransactionToasts } =
      await createToastsFromTransactions({
        toastList,
        transactionsSessions,
        account
      });

    this.transactionToasts = [
      ...pendingTransactionToasts,
      ...completedTransactionToasts.filter((toast) => {
        const maxTxTimestamp = Math.max(
          ...toast.transactions.map((tx) => tx.timestamp)
        );
        const now = Date.now() / 1000;
        const isRecent = now <= 10 + maxTxTimestamp;
        return isRecent; // transactions are recent, not older than 10 seconds
      })
    ];

    for (const toast of toastList.transactionToasts) {
      this.handleCompletedTransaction(toast.toastId);
    }

    await this.publishTransactionToasts();
  }

  private async updateCustomToastList() {
    const { toasts: toastList } = this.store.getState();
    this.customToasts = [];

    for (const toast of toastList.customToasts) {
      const isSimpleToast = 'message' in toast;

      const newToast: CustomToastType = isSimpleToast
        ? { ...toast }
        : {
            ...toast,
            instantiateToastElement:
              customToastComponentDictionary[toast.toastId]
          };
      this.customToasts.push(newToast);

      if (toast.duration) {
        this.lifetimeManager.startWithCustomDuration(
          toast.toastId,
          toast.duration
        );
      }
    }
    this.eventBus?.publish(
      ToastEventsEnum.CUSTOM_TOAST_DATA_UPDATE,
      this.customToasts
    );
  }

  private async createToastListElement(): Promise<MvxToastList | null> {
    if (this.toastsElement) {
      return this.toastsElement;
    }

    if (!this.isCreatingElement) {
      this.isCreatingElement = true;

      this.toastsElement = await ComponentFactory.create<MvxToastList>({
        name: UITagsEnum.TOAST_LIST
      });

      this.isCreatingElement = false;
    }

    return this.toastsElement;
  }

  private handleTransactionToastClose(toastId: string) {
    const isCompleted = this.handleCompletedTransaction(toastId);

    if (isCompleted) {
      removeTransactionToast(toastId);
    }
  }

  private async subscribeToEventBusNotifications() {
    const toastsElement = await this.createToastListElement();

    if (!toastsElement) {
      return;
    }

    this.eventBus = await toastsElement.getEventBus();
    if (!this.eventBus) {
      throw new Error(ProviderErrorsEnum.eventBusError);
    }

    this.eventBus.subscribe(
      ToastEventsEnum.CLOSE,
      this.handleCloseToast.bind(this)
    );

    this.eventBusUnsubscribeFunctions.push(() => {
      this.eventBus?.unsubscribe(
        ToastEventsEnum.CLOSE,
        this.handleCloseToast.bind(this)
      );
    });

    this.eventBus.subscribe(
      ToastEventsEnum.OPEN_NOTIFICATIONS_FEED,
      this.handleOpenNotificationsFeed.bind(this)
    );

    this.eventBusUnsubscribeFunctions.push(() => {
      this.eventBus?.unsubscribe(
        ToastEventsEnum.OPEN_NOTIFICATIONS_FEED,
        this.handleOpenNotificationsFeed.bind(this)
      );
    });
  }

  public showToasts() {
    this.eventBus?.publish(ToastEventsEnum.SHOW, null);
    this.updateCustomToastList();
    this.updateTransactionToastsList();
  }

  public hideToasts() {
    this.eventBus?.publish(ToastEventsEnum.HIDE, null);
  }

  private async handleOpenNotificationsFeed() {
    this.notificationsFeedManager.openNotificationsFeed();
  }

  private handleCloseToast(toastId: string) {
    const customToast = this.customToasts.find(
      (toast) => toast.toastId === toastId
    );

    if (customToast) {
      this.lifetimeManager.stop(toastId);
      const handleClose = customToastCloseHandlersDictionary[toastId];
      handleClose?.();
      removeCustomToast(toastId);
      return;
    }

    this.handleTransactionToastClose(toastId);
  }

  private async publishTransactionToasts() {
    if (
      this.notificationsFeedManager.isNotificationsFeedOpen() &&
      this.eventBus
    ) {
      this.eventBus.publish(
        ToastEventsEnum.TRANSACTION_TOAST_DATA_UPDATE,
        this.transactionToasts
      );

      this.hideToasts();
      return;
    }

    if (!this.eventBus) {
      const toastsElement = await this.createToastListElement();

      if (!toastsElement) {
        return;
      }

      this.eventBus = await toastsElement.getEventBus();
    }

    this.eventBus.publish(
      ToastEventsEnum.TRANSACTION_TOAST_DATA_UPDATE,
      this.transactionToasts
    );
  }

  public destroy() {
    this.storeToastsSubscription();
    this.lifetimeManager?.destroy();
    this.notificationsFeedManager?.destroy();
    removeAllCustomToasts();
    this.eventBusUnsubscribeFunctions.forEach((unsubscribe) => unsubscribe());
    this.eventBusUnsubscribeFunctions = [];
  }
}
