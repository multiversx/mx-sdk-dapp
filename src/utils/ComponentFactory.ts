import { safeWindow } from 'constants/index';
import { UITagsEnum } from 'constants/UITags.enum';
import type { IEventBus } from 'lib/sdkDappUi';

export interface CreateEventBusUIElementType extends HTMLElement {
  getEventBus: () => Promise<IEventBus | null>;
}

const loaders: Record<
  UITagsEnum,
  () => Promise<{
    defineCustomElement: () => void;
  }>
> = {
  [UITagsEnum.NOTIFICATIONS_FEED]: () =>
    import('@multiversx/sdk-dapp-ui/mvx-notifications-feed'),
  [UITagsEnum.LEDGER_CONNECT]: () =>
    import('@multiversx/sdk-dapp-ui/mvx-ledger-connect'),
  [UITagsEnum.UNLOCK_PANEL]: () =>
    import('@multiversx/sdk-dapp-ui/mvx-unlock-panel'),
  [UITagsEnum.WALLET_CONNECT]: () =>
    import('@multiversx/sdk-dapp-ui/mvx-wallet-connect'),
  [UITagsEnum.TOAST_LIST]: () =>
    import('@multiversx/sdk-dapp-ui/mvx-toast-list'),
  [UITagsEnum.PENDING_TRANSACTIONS_PANEL]: () =>
    import('@multiversx/sdk-dapp-ui/mvx-pending-transactions-panel'),
  [UITagsEnum.SIGN_TRANSACTIONS_PANEL]: () =>
    import('@multiversx/sdk-dapp-ui/mvx-sign-transactions-panel')
};

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
    const loadElement = loaders[name];

    const componentClass = await loadElement?.();
    componentClass?.defineCustomElement();

    const webComponent = safeWindow?.customElements?.get(name);

    if (!webComponent) {
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
