import isEqual from 'lodash.isequal';
import { DEFAULT_TOAST_LIFETIME } from 'constants/transactions.constants';
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
import { createToastsFromTransactions } from './helpers/createToastsFromTransactions';
import { LifetimeManager } from './helpers/LifetimeManager';
import { ToastUICoordinator } from './ToastUICoordinator';
import { ITransactionToast } from './types';

interface IToastManager {
  successfulToastLifetime?: number;
}

export class ToastManager {
  private readonly lifetimeManager: LifetimeManager;
  private store: ReturnType<typeof getStore>;
  private static instance: ToastManager;
  private transactionToasts: ITransactionToast[] = [];
  private customToasts: CustomToastType[] = [];
  private successfulToastLifetime?: number;
  private unsubscribeFromStore: () => void = () => null;
  private uiCoordinator: ToastUICoordinator | null = null;

  constructor(props?: {
    store?: ReturnType<typeof getStore>;
    lifetimeManager?: LifetimeManager;
    uiCoordinator?: ToastUICoordinator;
  }) {
    this.destroy();
    this.store = props?.store || getStore();
    this.lifetimeManager = props?.lifetimeManager ?? new LifetimeManager();
    this.uiCoordinator =
      props?.uiCoordinator ??
      new ToastUICoordinator({
        onCloseToast: this.closeToast.bind(this)
      });
  }

  public async init({
    successfulToastLifetime = DEFAULT_TOAST_LIFETIME
  }: IToastManager = {}) {
    this.successfulToastLifetime = successfulToastLifetime;

    this.lifetimeManager.init({ successfulToastLifetime });

    await this.updateTransactionToastsList();
    await this.updateCustomToastList();

    await this.uiCoordinator?.init();

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

        console.log('transactions', transactions);
        console.log('toasts', toasts);

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

  public async createCustomToast(toast: CustomToastType): Promise<string> {
    const toastId = createCustomToast(toast);
    await this.updateCustomToastList();
    return toastId;
  }

  private async updateTransactionToastsList(props?: {
    skipFetchingTransactions?: boolean;
  }) {
    const store = this.store.getState();
    const { toasts: toastList } = store;

    const { pendingTransactionToasts, completedTransactionToasts } =
      await createToastsFromTransactions({
        skipFetchingTransactions: props?.skipFetchingTransactions,
        store
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
    await this.uiCoordinator?.publishCustomToasts(this.customToasts);
  }

  private handleTransactionToastClose(toastId: string): boolean {
    const isCompleted = this.handleCompletedTransaction(toastId);

    if (isCompleted) {
      removeTransactionToast(toastId);
      return true;
    }

    return false;
  }

  public async showToasts() {
    this.uiCoordinator?.showToasts();
    await this.updateCustomToastList();
    await this.updateTransactionToastsList();
  }

  public hideToasts() {
    this.uiCoordinator?.hideToasts();
  }

  public closeToast(toastId: string): boolean {
    const customToast = this.customToasts.find(
      (toast) => toast.toastId === toastId
    );

    if (customToast) {
      this.lifetimeManager.stop(toastId);
      const handleClose = customToastCloseHandlersDictionary[toastId];
      handleClose?.();
      removeCustomToast(toastId);
      return true;
    }

    return this.handleTransactionToastClose(toastId);
  }

  private async publishTransactionToasts() {
    await this.uiCoordinator?.publishTransactionToasts(this.transactionToasts);
  }

  public destroy() {
    this.unsubscribeFromStore();
    this.lifetimeManager?.destroy();
    this.uiCoordinator?.destroy();
    removeAllCustomToasts();
  }
}
