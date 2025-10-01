import { UITagsEnum } from 'constants/UITags.enum';
import { MvxToastList } from 'lib/sdkDappUi';
import { NotificationsFeedManager } from 'managers/NotificationsFeedManager/NotificationsFeedManager';
import type { CustomToastType } from 'store/slices/toast/toastSlice.types';
import { getStore } from 'store/store';
import { IEventBus } from 'types/manager.types';
import { ProviderErrorsEnum } from 'types/provider.types';
import { ComponentFactory } from 'utils/ComponentFactory';
import { ToastEventsEnum } from './types';
import type { ITransactionToast } from './types';

export class ToastUICoordinator {
  private toastsElement: MvxToastList | null = null;
  private eventBus: IEventBus<
    ITransactionToast[] | CustomToastType[] | null
  > | null = null;
  private isCreatingElement = false;
  private eventBusUnsubscribeFunctions: (() => void)[] = [];
  private readonly notificationsFeedManager: NotificationsFeedManager;
  private readonly store: ReturnType<typeof getStore>;
  private readonly onCloseToast: (toastId: string) => void;

  constructor(props: {
    onCloseToast: (toastId: string) => void;
    store?: ReturnType<typeof getStore>;
    notificationsFeedManager?: NotificationsFeedManager;
  }) {
    this.onCloseToast = props.onCloseToast;
    this.store = props.store || getStore();
    this.notificationsFeedManager =
      props.notificationsFeedManager ||
      NotificationsFeedManager.getInstance(this.store);
  }

  public async init() {
    await this.subscribeToEventBusNotifications();
  }

  public showToasts() {
    this.eventBus?.publish(ToastEventsEnum.SHOW, null);
  }

  public hideToasts() {
    this.eventBus?.publish(ToastEventsEnum.HIDE, null);
  }

  public async publishTransactionToasts(toasts: ITransactionToast[]) {
    if (
      this.notificationsFeedManager.isNotificationsFeedOpen() &&
      this.eventBus
    ) {
      this.eventBus.publish(
        ToastEventsEnum.TRANSACTION_TOAST_DATA_UPDATE,
        toasts
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

    this.eventBus?.publish(
      ToastEventsEnum.TRANSACTION_TOAST_DATA_UPDATE,
      toasts
    );
  }

  public async publishCustomToasts(customToasts: CustomToastType[]) {
    this.eventBus?.publish(
      ToastEventsEnum.CUSTOM_TOAST_DATA_UPDATE,
      customToasts
    );
  }

  private handleOpenNotificationsFeed() {
    this.notificationsFeedManager.openNotificationsFeed();
  }

  public destroy() {
    this.eventBusUnsubscribeFunctions.forEach((unsubscribe) => unsubscribe());
    this.eventBusUnsubscribeFunctions = [];
    this.notificationsFeedManager?.destroy();
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

  private async subscribeToEventBusNotifications() {
    const toastsElement = await this.createToastListElement();

    if (!toastsElement) {
      return;
    }

    this.eventBus = await toastsElement.getEventBus();
    if (!this.eventBus) {
      throw new Error(ProviderErrorsEnum.eventBusError);
    }

    this.eventBus.subscribe(ToastEventsEnum.CLOSE, this.onCloseToast);

    this.eventBusUnsubscribeFunctions.push(() => {
      this.eventBus?.unsubscribe(ToastEventsEnum.CLOSE, this.onCloseToast);
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
}
