import { IEventBus } from '@multiversx/sdk-dapp-ui/dist/loader';
import { safeWindow } from 'constants/index';
import { UITagsEnum } from 'constants/UITags.enum';
import { defineCustomElements } from 'lib/sdkDappCoreUi';

export interface CreateEventBusUIElementType extends HTMLElement {
  getEventBus: () => Promise<IEventBus | null>;
}

export const createUIElement = async <T = CreateEventBusUIElementType>({
  name,
  anchor
}: {
  name: UITagsEnum;
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
