import isEqual from 'lodash.isequal';
import { DEFAULT_TOAST_LIEFTIME } from 'constants/transactions.constants';
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

export class ToastManager {
  private readonly lifetimeManager: LifetimeManager;
  private store: ReturnType<typeof getStore>;
  private isCreatingElement = false;
  private static instance: ToastManager;
  private toastsElement: MvxToastList | null = null;
  private transactionToasts: ITransactionToast[] = [];
  private customToasts: CustomToastType[] = [];
  private successfulToastLifetime?: number;
  private unsubscribeFromStore: () => void = () => null;
  private readonly notificationsFeedManager: NotificationsFeedManager;
  private eventBusUnsubscribeFunctions: (() => void)[] = [];
  private eventBus: IEventBus<
    ITransactionToast[] | CustomToastType[] | null
  > | null = null;

  constructor(props?: {
    store?: ReturnType<typeof getStore>;
    lifetimeManager?: LifetimeManager;
    notificationsFeedManager?: NotificationsFeedManager;
  }) {
    this.destroy();
    this.store = props?.store || getStore();
    this.lifetimeManager = props?.lifetimeManager ?? new LifetimeManager();
    this.notificationsFeedManager =
      props?.notificationsFeedManager ??
      NotificationsFeedManager.getInstance(this.store);
  }

  public async init({
    successfulToastLifetime = DEFAULT_TOAST_LIEFTIME
  }: IToastManager = {}) {
    this.successfulToastLifetime = successfulToastLifetime;

    this.lifetimeManager.init({ successfulToastLifetime });

    await this.updateTransactionToastsList();
    await this.updateCustomToastList();

    await this.subscribeToEventBusNotifications();

    this.unsubscribeFromStore = this.store.subscribe(
      async (
        { toasts, transactions },
        { toasts: prevToasts, transactions: prevTransactions }
      ) => {
        const newToastsWereCreated = !isEqual(
          prevToasts.transactionToasts,
          toasts.transactionToasts
        );
        const checkBatchHasNewData = !isEqual(prevTransactions, transactions);

        if (newToastsWereCreated || checkBatchHasNewData) {
          await this.updateTransactionToastsList({
            skipFetchingTransactions: checkBatchHasNewData // transactions were already fetched by `checkBatch`
          });
        }

        const newCustomToastsWereCreated = !isEqual(
          prevToasts.customToasts,
          toasts.customToasts
        );

        if (newCustomToastsWereCreated) {
          await this.updateCustomToastList();
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

  public async createTransactionToast(
    toastId: string,
    totalDuration: number
  ): Promise<string> {
    const newToastId = addTransactionToast({
      toastId,
      totalDuration
    });

    this.handleCompletedTransaction(toastId);
    await this.updateTransactionToastsList();
    return newToastId;
  }

  public createCustomToast(toast: CustomToastType): string {
    const toastId = createCustomToast(toast);
    this.updateCustomToastList();
    return toastId;
  }

  private async updateTransactionToastsList(props?: {
    skipFetchingTransactions?: boolean;
  }) {
    const {
      toasts: toastList,
      transactions: transactionsSessions,
      account
    } = this.store.getState();

    const { pendingTransactionToasts, completedTransactionToasts } =
      await createToastsFromTransactions({
        toastList,
        transactionsSessions,
        account,
        skipFetchingTransactions: props?.skipFetchingTransactions
      });

    this.transactionToasts = [
      ...pendingTransactionToasts,
      ...completedTransactionToasts
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

    this.eventBus.subscribe(ToastEventsEnum.CLOSE, this.closeToast.bind(this));

    this.eventBusUnsubscribeFunctions.push(() => {
      this.eventBus?.unsubscribe(
        ToastEventsEnum.CLOSE,
        this.closeToast.bind(this)
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

  public async showToasts() {
    this.eventBus?.publish(ToastEventsEnum.SHOW, null);

    await this.updateCustomToastList();
    await this.updateTransactionToastsList();
  }

  public hideToasts() {
    this.eventBus?.publish(ToastEventsEnum.HIDE, null);
  }

  private async handleOpenNotificationsFeed() {
    this.notificationsFeedManager.openNotificationsFeed();
  }

  public closeToast(toastId: string) {
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
    this.unsubscribeFromStore();
    this.lifetimeManager?.destroy();
    this.notificationsFeedManager?.destroy();
    removeAllCustomToasts();
    this.eventBusUnsubscribeFunctions.forEach((unsubscribe) => unsubscribe());
    this.eventBusUnsubscribeFunctions = [];
  }
}
