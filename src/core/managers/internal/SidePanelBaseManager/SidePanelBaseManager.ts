import { UITagsEnum } from 'constants/UITags.enum';
import { setIsUnlockPanelOpen } from 'store/actions/ui/uiActions';
import { ProviderErrorsEnum } from 'types/provider.types';
import { CreateEventBusUIElementType } from 'utils/createUIElement';
import { UIBaseManager } from '../UIBaseManager/UIBaseManager';

type SidePanelBaseManagerInitParamsType<TEventEnum> = {
  uiDataUpdateEvent: TEventEnum;
  uiTag: UITagsEnum;
  uiSidePanelOpenEvent: TEventEnum;
  uiSidePanelCloseEvent: TEventEnum;
};

interface ISideManagerUIElement extends CreateEventBusUIElementType {
  closeWithAnimation?: () => Promise<unknown>;
}

export abstract class SidePanelBaseManager<
  TElement extends ISideManagerUIElement,
  TData extends Record<string, any>,
  TEventEnum extends string
> extends UIBaseManager<TElement, TData, TEventEnum> {
  protected isOpen = false;
  protected uiSidePanelOpenEvent: TEventEnum;
  protected uiSidePanelCloseEvent: TEventEnum;
  protected unsubscribeFunctions: (() => void)[] = [];

  constructor({
    uiDataUpdateEvent,
    uiTag,
    uiSidePanelOpenEvent,
    uiSidePanelCloseEvent
  }: SidePanelBaseManagerInitParamsType<TEventEnum>) {
    super({
      uiDataUpdateEvent,
      uiTag
    });
    this.uiSidePanelOpenEvent = uiSidePanelOpenEvent;
    this.uiSidePanelCloseEvent = uiSidePanelCloseEvent;
    this.data = this.getInitialData();
  }

  public async openUI(data: Partial<TData> = {}) {
    if (this.isOpen && this.uiElement) {
      // UI element is already open
      return;
    }

    if (!this.uiElement) {
      // Try to create the UI element again
      await this.createUIElement();
    }

    if (!this.uiElement) {
      // The UI element failed to be created
      throw new Error(`Failed to create ${this.uiTag} element`);
    }

    if (!this.eventBus) {
      // Try to get the event bus from the UI element again
      await this.getEventBus();
    }

    if (!this.eventBus) {
      // The event bus failed to be retrieved
      throw new Error(ProviderErrorsEnum.eventBusError);
    }

    const initialData = this.getInitialData();

    const isDataEmpty = Object.keys(data).length === 0;

    this.data = isDataEmpty ? initialData : { ...initialData, ...data };

    this.setIsUnlockPanelOpen(true);
    this.eventBus?.publish(this.uiDataUpdateEvent, this.data);
    this.notifyDataUpdate();
  }

  public closeAndReset(): void {
    if (!this.eventBus) {
      return;
    }

    this.data = { ...this.data, shouldClose: true };
    this.notifyDataUpdate();
    this.handleCloseUI();
  }

  public async destroy() {
    if (this.eventBus) {
      this.eventBus.unsubscribe(
        this.uiSidePanelCloseEvent,
        this.handleCloseUI.bind(this)
      );
    }

    this.setIsUnlockPanelOpen(false);
    this.unsubscribeFunctions.forEach((unsubscribe) => unsubscribe());
    this.unsubscribeFunctions = [];
    await this.uiElement?.closeWithAnimation?.();

    super.destroy();
  }

  protected handleCloseUI(): void {
    this.resetData();
    this.destroy();
  }

  private setIsUnlockPanelOpen(isOpen: boolean): void {
    this.isOpen = isOpen;
    setIsUnlockPanelOpen(isOpen);
  }
}
