import { UITagsEnum } from 'constants/UITags.enum';
import { IEventBus } from 'lib/sdkDappCoreUi';
import { ProviderErrorsEnum } from 'types/provider.types';
import {
  CreateEventBusUIElementType,
  createUIElement
} from 'utils/createUIElement';

export abstract class UIBaseManager<
  TElement extends CreateEventBusUIElementType,
  TData extends Record<string, any> | null,
  TEventEnum extends string
> {
  protected eventBus: IEventBus | null = null;
  protected uiElement: TElement | null = null;
  protected isCreatingElement = false;
  protected anchor?: HTMLElement;
  protected uiTag: UITagsEnum;
  protected uiDataUpdateEvent: TEventEnum;
  protected unsubscribeFunctions: (() => void)[] = [];
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
    await this.setupEventListeners();
  }

  public updateData(newData: Partial<TData>) {
    this.data = { ...this.data, ...newData };
    this.notifyDataUpdate();
  }

  public subscribeToEventBus(event: TEventEnum, callback: Function) {
    if (!this.eventBus) {
      throw new Error('Event bus is not initialized');
    }

    const unsubscribe = this.eventBus?.subscribe(event, callback);
    if (unsubscribe) {
      this.unsubscribeFunctions.push(unsubscribe);
    }
  }

  public notifyDataUpdate() {
    this.eventBus?.publish(this.uiDataUpdateEvent, this.data);
  }

  protected destroy() {
    this.unsubscribeFunctions.forEach((unsubscribe) => unsubscribe());
    this.unsubscribeFunctions = [];
    this.eventBus = null;
    this.uiElement?.remove();
    this.uiElement = null;
  }

  protected getInitialData(): TData {
    return this.initialData;
  }

  protected resetData() {
    this.data = this.getInitialData();
  }

  protected abstract setupEventListeners(): Promise<void>;

  private async createUIElement(
    anchor: HTMLElement | undefined = this.anchor
  ): Promise<TElement | null> {
    if (this.isCreatingElement || this.uiElement) {
      return this.uiElement;
    }

    this.isCreatingElement = true;

    this.uiElement = await createUIElement<TElement>({
      name: this.uiTag,
      anchor
    });

    this.isCreatingElement = false;

    if (!this.uiElement) {
      throw new Error(`Failed to create ${this.uiTag} element`);
    }

    if (!this.eventBus) {
      this.eventBus = await this.uiElement.getEventBus();
    }

    if (!this.eventBus) {
      throw new Error(ProviderErrorsEnum.eventBusError);
    }

    return this.uiElement;
  }
}
