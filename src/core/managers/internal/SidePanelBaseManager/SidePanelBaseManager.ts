import { UITagsEnum } from 'constants/UITags.enum';
import { IEventBus } from 'lib/sdkDappCoreUi';
import { setIsUnlockPanelOpen } from 'store/actions/ui/uiActions';
import { ProviderErrorsEnum } from 'types/provider.types';
import { createUIElement } from 'utils/createUIElement';

interface IUIElement {
  getEventBus: () => Promise<IEventBus | null>;
}

export abstract class SidePanelBaseManager<TElement, TData, TEventEnum> {
  protected eventBus: IEventBus | null = null;
  protected uiElement: TElement | null = null;
  protected isCreatingElement = false;
  protected isOpen = false;
  protected anchor?: HTMLElement;
  protected type?: string; // useful for debugging

  protected abstract initialData: TData;
  protected data: TData;
  protected unsubscribeFunctions: (() => void)[] = [];
  constructor(type?: string) {
    this.type = type;
    this.data = this.getInitialData();
  }

  public async init(anchor?: HTMLElement) {
    this.anchor = anchor;
    await this.createUIElement(anchor);
    await this.getEventBus();
    await this.setupEventListeners();
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
      throw new Error(`Failed to create ${this.getUIElementName()} element`);
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
    this.publishEvent(this.getOpenEventName());
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

  public updateData(newData: Partial<TData>): void {
    this.data = { ...this.data, ...newData };
    this.notifyDataUpdate();
  }

  public async getEventBus(): Promise<IEventBus | null> {
    // Return eventBus in null state while element is being created
    if (this.isCreatingElement) {
      return this.eventBus;
    }

    if (!this.uiElement) {
      // Try to create the UI element again
      await this.createUIElement();
    }

    if (!this.uiElement) {
      // The UI element failed to be created
      throw new Error(`Failed to create ${this.getUIElementName()} element`);
    }

    this.eventBus ??= await (
      this.uiElement as unknown as IUIElement
    ).getEventBus();

    if (!this.eventBus) {
      // The event bus failed to be retrieved
      throw new Error(ProviderErrorsEnum.eventBusError);
    }

    return this.eventBus;
  }

  public async createUIElement(
    anchor: HTMLElement | undefined = this.anchor
  ): Promise<TElement | null> {
    if (this.isCreatingElement || this.uiElement) {
      return this.uiElement;
    }

    if (!this.isCreatingElement) {
      this.isCreatingElement = true;

      const element = await createUIElement<TElement>({
        name: this.getUIElementName(),
        anchor
      });

      this.uiElement = element || null;
      await this.getEventBus();
      this.isCreatingElement = false;
    }

    if (!this.uiElement) {
      throw new Error(`Failed to create ${this.getUIElementName()} element`);
    }

    return this.uiElement;
  }

  public destroy() {
    if (this.eventBus) {
      this.eventBus.unsubscribe(
        this.getCloseEventName() as unknown as string,
        this.handleCloseUI.bind(this)
      );

      this.eventBus = null;
    }

    if (this.uiElement) {
      const parentElement = (this.uiElement as unknown as HTMLElement)
        .parentElement;

      if (parentElement) {
        parentElement.removeChild(this.uiElement as unknown as HTMLElement);
      }

      this.uiElement = null;
    }

    this.setIsUnlockPanelOpen(false);
    this.unsubscribeFunctions.forEach((unsubscribe) => unsubscribe());
    this.unsubscribeFunctions = [];
  }

  protected getInitialData(): TData {
    return this.initialData;
  }

  protected publishEvent(event: TEventEnum, data?: TData) {
    if (!this.eventBus) {
      return;
    }

    this.eventBus.publish(event as unknown as string, data);
  }

  protected resetData(): void {
    this.data = this.getInitialData();
  }

  protected notifyDataUpdate(): void {
    if (!this.eventBus) {
      return;
    }

    this.publishEvent(this.getDataUpdateEventName(), this.data);
  }

  protected handleCloseUI(): void {
    this.setIsUnlockPanelOpen(false);
    this.resetData();
  }

  private setIsUnlockPanelOpen(isOpen: boolean): void {
    this.isOpen = isOpen;
    setIsUnlockPanelOpen(isOpen);
  }

  protected abstract getUIElementName(): UITagsEnum;
  protected abstract getOpenEventName(): TEventEnum;
  protected abstract getCloseEventName(): TEventEnum;
  protected abstract getDataUpdateEventName(): TEventEnum;
  protected abstract setupEventListeners(): Promise<void>;
}
