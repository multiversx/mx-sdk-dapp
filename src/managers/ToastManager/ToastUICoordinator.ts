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

type OnCloseToastType = (toastId: string) => boolean;
type StoreObjectType = ReturnType<typeof getStore>;

export class ToastUICoordinator {
  private toastsElement: MvxToastList | null = null;
  private eventBus: IEventBus<
    ITransactionToast[] | CustomToastType[] | null
  > | null = null;
  private creationPromise: Promise<MvxToastList | null> | null = null;
  private eventBusUnsubscribeFunctions: (() => void)[] = [];
  private readonly notificationsFeedManager: NotificationsFeedManager;
  private readonly store: StoreObjectType;
  private readonly onCloseToast: OnCloseToastType;

  constructor(props: {
    onCloseToast: OnCloseToastType;
    store?: StoreObjectType;
    notificationsFeedManager?: NotificationsFeedManager;
  }) {
    this.onCloseToast = props.onCloseToast;
    this.store = props.store || getStore();
    this.notificationsFeedManager =
      props.notificationsFeedManager || NotificationsFeedManager.getInstance();
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

  private readonly handleOpenNotificationsFeed = () => {
    this.notificationsFeedManager.openNotificationsFeed();
  };

  public destroy() {
    this.eventBusUnsubscribeFunctions.forEach((unsubscribe) => unsubscribe());
    this.eventBusUnsubscribeFunctions = [];
    this.notificationsFeedManager?.destroy();
  }

  private async createToastListElement(): Promise<MvxToastList | null> {
    if (this.toastsElement) {
      return this.toastsElement;
    }

    if (!this.creationPromise) {
      this.creationPromise = ComponentFactory.create<MvxToastList>({
        name: UITagsEnum.TOAST_LIST
      }).finally(() => {
        this.creationPromise = null;
      });
    }

    this.toastsElement = await this.creationPromise;

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
      this.handleOpenNotificationsFeed
    );

    this.eventBusUnsubscribeFunctions.push(() => {
      this.eventBus?.unsubscribe(
        ToastEventsEnum.OPEN_NOTIFICATIONS_FEED,
        this.handleOpenNotificationsFeed
      );
    });
  }
}
