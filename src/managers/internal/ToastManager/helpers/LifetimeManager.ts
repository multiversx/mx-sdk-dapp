import {
  customToastCloseHandlersDictionary,
  removeCustomToast,
  removeTransactionToast
} from 'store/actions/toasts/toastsActions';

interface IToastProgressManagerParams {
  successfulToastLifetime?: number;
}

const DEFAULT_SUCCESSFUL_TOAST_LIFETIME = 10_000;

export class LifetimeManager {
  private timeoutIntervals: Map<string, ReturnType<typeof setTimeout>> =
    new Map();
  private successfulToastLifetime: number = DEFAULT_SUCCESSFUL_TOAST_LIFETIME;

  constructor() {}

  public init({ successfulToastLifetime }: IToastProgressManagerParams) {
    this.successfulToastLifetime =
      successfulToastLifetime || DEFAULT_SUCCESSFUL_TOAST_LIFETIME;
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
