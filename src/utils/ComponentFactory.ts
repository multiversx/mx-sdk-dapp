import { IEventBus } from '@multiversx/sdk-dapp-ui/dist/loader';
import { safeWindow } from 'constants/index';
import { UITagsEnum } from 'constants/UITags.enum';
import { defineCustomElements } from 'lib/sdkDappUi';

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
    await defineCustomElements(safeWindow);

    if (!safeWindow.document) {
      return {} as T;
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
