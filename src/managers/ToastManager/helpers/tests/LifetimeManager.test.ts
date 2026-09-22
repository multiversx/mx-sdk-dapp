import {
  customToastCloseHandlersDictionary,
  removeCustomToast,
  removeTransactionToast
} from 'store/actions/toasts/toastsActions';
import { LifetimeManager } from '../LifetimeManager';

jest.mock('store/actions/toasts/toastsActions', () => ({
  customToastCloseHandlersDictionary: {} as Record<string, () => void>,
  removeCustomToast: jest.fn(),
  removeTransactionToast: jest.fn()
}));

describe('LifetimeManager', () => {
  let lifetimeManager: LifetimeManager;

  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
    lifetimeManager = new LifetimeManager();
    lifetimeManager.init({ successfulToastLifetime: 10_000 });
  });

  afterEach(() => {
    lifetimeManager.destroy();
    jest.useRealTimers();
  });

  it('does not restart the lifetime of a toast that is already counting down', () => {
    lifetimeManager.start('toast-1');
    jest.advanceTimersByTime(9_000);
    lifetimeManager.start('toast-1');
    jest.advanceTimersByTime(1_500);

    expect(removeTransactionToast).toHaveBeenCalledTimes(1);
  });

  it('can start a toast again after its lifetime ended', () => {
    lifetimeManager.start('toast-2');
    jest.advanceTimersByTime(10_500);
    lifetimeManager.start('toast-2');
    jest.advanceTimersByTime(10_500);

    expect(removeTransactionToast).toHaveBeenCalledTimes(2);
  });

  it('closes a custom toast and calls its close handler', () => {
    const onClose = jest.fn();
    customToastCloseHandlersDictionary['custom-1'] = onClose;

    lifetimeManager.startWithCustomDuration('custom-1', 1_000);
    jest.advanceTimersByTime(1_500);

    expect(removeCustomToast).toHaveBeenCalledWith('custom-1');
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('keeps the first duration of a custom toast', () => {
    lifetimeManager.startWithCustomDuration('custom-2', 1_000);
    lifetimeManager.startWithCustomDuration('custom-2', 60_000);
    jest.advanceTimersByTime(1_500);

    expect(removeCustomToast).toHaveBeenCalledTimes(1);
  });
});
