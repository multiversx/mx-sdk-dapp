import { UITagsEnum } from 'constants/UITags.enum';
import { UnlockPanelEventsEnum } from 'core/managers/UnlockPanelManager/UnlockPanelManager.types';
import {
  WalletConnectEventsEnum,
  IWalletConnectModalData
} from 'core/providers/strategies/WalletConnectProviderStrategy/types';
import { MvxWalletConnectProvider } from 'lib/sdkDappUi';
import { UIBaseManager } from '../UIBaseManager/UIBaseManager';

export class WalletConnectStateManager extends UIBaseManager<
  MvxWalletConnectProvider,
  IWalletConnectModalData,
  WalletConnectEventsEnum
> {
  private static instance: WalletConnectStateManager;

  protected initialData: IWalletConnectModalData = {
    wcURI: ''
  };

  public static getInstance(): WalletConnectStateManager {
    if (!WalletConnectStateManager.instance) {
      WalletConnectStateManager.instance = new WalletConnectStateManager();
    }
    return WalletConnectStateManager.instance;
  }

  constructor() {
    super({
      uiDataUpdateEvent: WalletConnectEventsEnum.DATA_UPDATE,
      uiTag: UITagsEnum.WALLET_CONNECT
    });
    this.data = { ...this.initialData };
  }

  public handleClose(options?: { isLoginFinished?: boolean }) {
    if (options?.isLoginFinished) {
      return;
    }

    if (this.anchor) {
      this.anchor.dispatchEvent(
        new CustomEvent(UnlockPanelEventsEnum.ANCHOR_CLOSE, {
          composed: false,
          bubbles: false
        })
      );
    } else {
      this.destroy();
    }
  }

  protected async setupEventListeners() {
    if (!this.eventBus) {
      return;
    }

    this.eventBus.subscribe(
      WalletConnectEventsEnum.CLOSE,
      this.handleClose.bind(this)
    );

    this.eventBus.subscribe(
      WalletConnectEventsEnum.UI_DISCONNECTED,
      this.destroy.bind(this)
    );
  }
}
