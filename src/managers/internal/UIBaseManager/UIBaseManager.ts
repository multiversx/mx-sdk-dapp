import { UITagsEnum } from 'constants/UITags.enum';
import { IEventBus } from 'lib/sdkDappUi';
import { ProviderErrorsEnum } from 'types/provider.types';
import {
  ComponentFactory,
  CreateEventBusUIElementType
} from 'utils/ComponentFactory';

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
  protected eventHandlers: Map<TEventEnum, Function[]> = new Map();
  protected unsubscribeFunctions: Map<TEventEnum, (() => void)[]> = new Map();
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
      throw new Error(ProviderErrorsEnum.eventBusError);
    }

    const unsubscribe = this.eventBus?.subscribe(event, callback);
    if (unsubscribe) {
      const existing = this.unsubscribeFunctions.get(event) || [];
      existing.push(unsubscribe);
      this.unsubscribeFunctions.set(event, existing);

      // Store handler programatic access (e.g. for testing)
      const existingHandlers = this.eventHandlers.get(event) || [];
      existingHandlers.push(callback);
      this.eventHandlers.set(event, existingHandlers);
    }
  }

  public notifyDataUpdate() {
    this.eventBus?.publish(this.uiDataUpdateEvent, this.data);
  }

  public clearEventHandlers(
    events: TEventEnum[] = Array.from(this.unsubscribeFunctions.keys())
  ) {
    events.forEach((event) => {
      const unsubList = this.unsubscribeFunctions.get(event) || [];
      unsubList.forEach((unsubscribe) => unsubscribe());
      this.unsubscribeFunctions.delete(event);
      this.eventHandlers.delete(event);
    });
  }

  public destroy() {
    this.unsubscribeFunctions.forEach((unsubList) =>
      unsubList.forEach((unsubscribe) => unsubscribe())
    );
    this.unsubscribeFunctions.clear();
    this.eventHandlers.clear();
    this.eventBus = null;
    this.uiElement?.remove?.();
    this.uiElement = null;
  }

  protected getInitialData(): TData {
    return this.initialData;
  }

  /**
   * Get registered handlers for a specific event (useful for testing)
   */
  public getEventHandlers(event: TEventEnum): Function[] {
    return this.eventHandlers.get(event) || [];
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

    this.uiElement = await ComponentFactory.create<TElement>({
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
