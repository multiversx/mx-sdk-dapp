import { EventBus } from '@multiversx/sdk-dapp-ui/utils/EventBus';
import type { NotificationsFeedManager } from 'managers/NotificationsFeedManager/NotificationsFeedManager';
import { ToastUICoordinator } from '../ToastUICoordinator';
import { ToastEventsEnum } from '../types';

const createNotificationsFeedManagerMock = (
  overrides: Partial<{
    isNotificationsFeedOpen: () => boolean;
    openNotificationsFeed: () => void;
    destroy: () => void;
  }> = {}
) =>
  ({
    isNotificationsFeedOpen: () => false,
    openNotificationsFeed: jest.fn(),
    destroy: jest.fn(),
    ...overrides
  }) as unknown as NotificationsFeedManager;

describe('ToastUICoordinator tests', () => {
  it('publishes show event when showToasts is called', () => {
    const coordinator = new ToastUICoordinator({
      onCloseToast: jest.fn()
    });

    const eventBus = new EventBus();
    const publishSpy = jest.spyOn(eventBus, 'publish');

    (coordinator as any).eventBus = eventBus;

    coordinator.showToasts();

    expect(publishSpy).toHaveBeenCalledWith(ToastEventsEnum.SHOW, null);
  });

  it('publishes transaction update when notifications feed is open', async () => {
    const coordinator = new ToastUICoordinator({
      onCloseToast: jest.fn(),
      notificationsFeedManager: createNotificationsFeedManagerMock({
        isNotificationsFeedOpen: () => true
      })
    });

    const eventBus = new EventBus();
    const publishSpy = jest.spyOn(eventBus, 'publish');

    (coordinator as any).eventBus = eventBus;

    const toasts = [{ toastId: 'toast-1' }] as any;

    await coordinator.publishTransactionToasts(toasts);

    expect(publishSpy).toHaveBeenCalledWith(
      ToastEventsEnum.TRANSACTION_TOAST_DATA_UPDATE,
      toasts
    );
  });

  it('opens notifications feed through private handler', () => {
    const openNotificationsFeed = jest.fn();
    const coordinator = new ToastUICoordinator({
      onCloseToast: jest.fn(),
      notificationsFeedManager: createNotificationsFeedManagerMock({
        openNotificationsFeed
      })
    });

    (coordinator as any).handleOpenNotificationsFeed();

    expect(openNotificationsFeed).toHaveBeenCalledTimes(1);
  });

  it('subscribes to close and open feed events during initialization', async () => {
    const onCloseToast = jest.fn();
    const coordinator = new ToastUICoordinator({
      onCloseToast,
      notificationsFeedManager: createNotificationsFeedManagerMock()
    });

    const eventBus = {
      subscribe: jest.fn(),
      unsubscribe: jest.fn()
    };

    const toastsElement = {
      getEventBus: jest.fn().mockResolvedValue(eventBus)
    };

    jest
      .spyOn(coordinator as any, 'createToastListElement')
      .mockResolvedValue(toastsElement);

    await (coordinator as any).subscribeToEventBusNotifications();

    const summary = {
      closeSubscription: eventBus.subscribe.mock.calls.some(
        ([event]) => event === ToastEventsEnum.CLOSE
      ),
      openFeedSubscription: eventBus.subscribe.mock.calls.some(
        ([event]) => event === ToastEventsEnum.OPEN_NOTIFICATIONS_FEED
      ),
      eventBusStored: (coordinator as any).eventBus === eventBus
    };

    expect(summary).toEqual({
      closeSubscription: true,
      openFeedSubscription: true,
      eventBusStored: true
    });
  });

  it('cleans up subscriptions and destroys notifications feed on destroy', () => {
    const unsubscribe = jest.fn();
    const destroyNotificationsFeed = jest.fn();

    const coordinator = new ToastUICoordinator({
      onCloseToast: jest.fn(),
      notificationsFeedManager: createNotificationsFeedManagerMock({
        destroy: destroyNotificationsFeed
      })
    });

    (coordinator as any).eventBusUnsubscribeFunctions = [unsubscribe];

    coordinator.destroy();

    const summary = {
      unsubscribeCalls: unsubscribe.mock.calls.length,
      remainingUnsubscribers: (coordinator as any).eventBusUnsubscribeFunctions
        .length,
      notificationsFeedDestroyed: destroyNotificationsFeed.mock.calls.length
    };

    expect(summary).toEqual({
      unsubscribeCalls: 1,
      remainingUnsubscribers: 0,
      notificationsFeedDestroyed: 1
    });
  });
});
