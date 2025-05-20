import {
  customToastCloseHandlersDictionary,
  removeCustomToast,
  removeTransactionToast
} from 'store/actions/toasts/toastsActions';

interface IToastProgressManagerParams {
  successfulToastLifetime?: number;
}

export class LifetimeManager {
  private timeoutIntervals: Map<string, ReturnType<typeof setTimeout>> =
    new Map();
  private successfulToastLifetime: number;
  private static DEFAULT_TIMEOUT = 10000;

  constructor({ successfulToastLifetime }: IToastProgressManagerParams = {}) {
    this.successfulToastLifetime =
      successfulToastLifetime || LifetimeManager.DEFAULT_TIMEOUT;
  }

  public start = (toastId: string) => {
    this.stop(toastId);

    if (this.successfulToastLifetime <= 0) {
      return;
    }

    const timeout = setTimeout(() => {
      removeTransactionToast(toastId);
    }, this.successfulToastLifetime);

    this.timeoutIntervals.set(toastId, timeout);
  };

  public startWithCustomDuration = (toastId: string, duration: number) => {
    this.stop(toastId);

    if (duration <= 0) {
      return;
    }

    const timeout = setTimeout(() => {
      removeCustomToast(toastId);
      const handleClose = customToastCloseHandlersDictionary[toastId];
      handleClose?.();
    }, duration);

    this.timeoutIntervals.set(toastId, timeout);
  };

  public stop = (toastId: string) => {
    const timeout = this.timeoutIntervals.get(toastId);
    if (timeout) {
      clearTimeout(timeout);
      this.timeoutIntervals.delete(toastId);
    }
  };

  public destroy() {
    this.timeoutIntervals.forEach((interval) => clearTimeout(interval));
    this.timeoutIntervals.clear();
  }
}
