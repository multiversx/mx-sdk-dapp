import { UITagsEnum } from 'constants/UITags.enum';
import { MvxWalletConnect } from 'lib/sdkDappUi';
import { UnlockPanelEventsEnum } from 'managers/UnlockPanelManager/UnlockPanelManager.types';
import {
  WalletConnectEventsEnum,
  IWalletConnectModalData
} from 'providers/strategies/WalletConnectProviderStrategy/types/walletConnect.types';
import { UIBaseManager } from '../UIBaseManager/UIBaseManager';

export class WalletConnectStateManager extends UIBaseManager<
  MvxWalletConnect,
  IWalletConnectModalData,
  WalletConnectEventsEnum
> {
  private static instance: WalletConnectStateManager;

  protected initialData: IWalletConnectModalData = {
    wcURI: '',
    walletConnectDeepLink: ''
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

  public get walletConnectData(): IWalletConnectModalData {
    return this.data;
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
