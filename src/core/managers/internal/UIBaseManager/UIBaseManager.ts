import { UITagsEnum } from 'constants/UITags.enum';
import { IEventBus } from 'lib/sdkDappCoreUi';
import { ProviderErrorsEnum } from 'types/provider.types';
import {
  CreateEventBusUIElementType,
  createUIElement
} from 'utils/createUIElement';

export abstract class UIBaseManager<
  TElement extends CreateEventBusUIElementType,
  TData extends Record<string, any>,
  TEventEnum extends string
> {
  protected eventBus: IEventBus | null = null;
  protected uiElement: TElement | null = null;
  protected isCreatingElement = false;
  protected anchor?: HTMLElement;
  protected uiTag: UITagsEnum;
  protected uiDataUpdateEvent: TEventEnum;

  protected abstract initialData: TData;
  protected data: TData;

  constructor({
    uiDataUpdateEvent,
    uiTag
  }: {
    uiTag: UITagsEnum;
    uiDataUpdateEvent: TEventEnum;
  }) {
    this.uiDataUpdateEvent = uiDataUpdateEvent;
    this.uiTag = uiTag;
    this.data = this.getInitialData();
  }

  public async init(anchor?: HTMLElement) {
    this.anchor = anchor;
    await this.createUIElement(anchor);
    await this.getEventBus();
    await this.setupEventListeners();
  }

  public updateData(newData: Partial<TData>) {
    this.data = { ...this.data, ...newData };
    this.notifyDataUpdate();
  }

  public async getEventBus(): Promise<IEventBus | null> {
    if (this.isCreatingElement) {
      return this.eventBus;
    }

    if (!this.uiElement) {
      await this.createUIElement();
    }
    if (!this.uiElement) {
      throw new Error(`Failed to create ${this.uiTag} element`);
    }
    if (!this.eventBus) {
      this.eventBus = await this.uiElement.getEventBus();
    }

    if (!this.eventBus) {
      throw new Error(ProviderErrorsEnum.eventBusError);
    }

    return this.eventBus;
  }

  public destroy() {
    this.eventBus = null;
    this.uiElement?.remove();
    this.uiElement = null;
  }

  protected getInitialData(): TData {
    return this.initialData;
  }

  protected publishEvent(event: TEventEnum, data?: TData) {
    this.eventBus?.publish(event, data || this.data);
  }

  protected resetData() {
    this.data = this.getInitialData();
  }

  protected notifyDataUpdate() {
    this.publishEvent(this.uiDataUpdateEvent, this.data);
  }

  protected abstract setupEventListeners(): Promise<void>;

  private async createUIElement(
    anchor: HTMLElement | undefined = this.anchor
  ): Promise<TElement | null> {
    if (this.isCreatingElement || this.uiElement) {
      return this.uiElement;
    }

    this.isCreatingElement = true;

    const element = await createUIElement<TElement>({
      name: this.uiTag,
      anchor
    });

    this.uiElement = element || null;
    await this.getEventBus();

    this.isCreatingElement = false;

    if (!this.uiElement) {
      throw new Error(`Failed to create ${this.uiTag} element`);
    }

    return this.uiElement;
  }
}
