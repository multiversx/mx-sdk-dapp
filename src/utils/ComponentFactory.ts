import { safeWindow } from 'constants/index';
import { UITagsEnum } from 'constants/UITags.enum';
import { IEventBus } from 'lib/sdkDappUi';

export interface CreateEventBusUIElementType extends HTMLElement {
  getEventBus: () => Promise<IEventBus | null>;
}

export type CreateComponentType = <T = CreateEventBusUIElementType>({
  name,
  anchor
}: {
  name: `${UITagsEnum}`;
  anchor?: HTMLElement;
}) => Promise<T>;

export class ComponentFactory {
  private static createComponent: CreateComponentType = async <
    T = CreateEventBusUIElementType
  >({
    name,
    anchor
  }: {
    name: `${UITagsEnum}`;
    anchor?: HTMLElement;
  }) => {
    const webComponent = safeWindow?.customElements?.get(name);

    if (!safeWindow?.document || !webComponent) {
      return null as T;
    }

    const element = safeWindow.document.createElement(name);
    const rootElement = anchor || safeWindow.document.body;
    rootElement.appendChild(element);
    await customElements.whenDefined(name);

    return element as T;
  };

  static get create() {
    return this.createComponent;
  }

  static set create(customCreateFunction: CreateComponentType) {
    this.createComponent = customCreateFunction;
  }
}
