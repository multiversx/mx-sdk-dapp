import { UITagsEnum } from 'constants/UITags.enum';
import { MvxUnlockPanel } from 'lib/sdkDappUi';
import { ProviderFactory } from 'providers/ProviderFactory';
import {
  IProviderBase,
  IProviderFactory,
  ProviderType
} from 'providers/types/providerFactory.types';
import { networkSelector } from 'store/selectors/networkSelectors';
import { getState } from 'store/store';
import {
  OnCloseUnlockPanelType,
  LoginHandlerType,
  UnlockPanelEventsEnum,
  UnlockPanelManagerInitParamsType
} from './UnlockPanelManager.types';
import { SidePanelBaseManager } from '../internal/SidePanelBaseManager';
import { getIsSimpleLoginCallback } from './helpers/getIsSimpleLoginCallback';
import { getProvidersList } from './helpers/getProviderList';

interface IUnlockPanelManagerData {
  providers: IProviderBase[] | null;
  walletAddress: string | null;
}

export class UnlockPanelManager extends SidePanelBaseManager<
  MvxUnlockPanel,
  IUnlockPanelManagerData,
  UnlockPanelEventsEnum
> {
  protected initialData: IUnlockPanelManagerData = {
    providers: null,
    walletAddress: null
  };

  private static instance: UnlockPanelManager;
  private static loginHandler: LoginHandlerType | null = null;
  private static onClose: OnCloseUnlockPanelType | null = null;
  private static allowedProviders?: ProviderType[] | null = null;
  private static onCancelLogin?: (() => Promise<void>) | null = null;

  constructor() {
    super({
      uiTag: UITagsEnum.UNLOCK_PANEL,
      uiDataUpdateEvent: UnlockPanelEventsEnum.OPEN
    });

    this.data = this.initialData;
  }

  public static getInstance(): UnlockPanelManager {
    if (!UnlockPanelManager.instance) {
      UnlockPanelManager.instance = new UnlockPanelManager();
    }
    return UnlockPanelManager.instance;
  }

  public static init(params: UnlockPanelManagerInitParamsType) {
    this.loginHandler = params.loginHandler;
    this.allowedProviders = params.allowedProviders;

    if (params.onClose) {
      this.onClose = params.onClose;
    }

    if (params.onCancelLogin) {
      this.onCancelLogin = params.onCancelLogin;
    }

    return this.getInstance();
  }

  public openUnlockPanel = async () => {
    const { walletAddress } = networkSelector(getState());

    const providers = getProvidersList(
      ProviderFactory.customProviders,
      UnlockPanelManager.allowedProviders
    );

    this.data = {
      providers,
      walletAddress
    };

    await this.openUI();
    this.notifyDataUpdate();
  };

  public selectProvider = (providerType: ProviderType) => {
    if (!this.eventBus) {
      throw new Error('Panel not initialized. Call openUnlockPanel() first.');
    }

    this.eventBus.publish(UnlockPanelEventsEnum.SELECT_PROVIDER, {
      providerType
    });
  };

  protected setupEventListeners = async () => {
    if (!this.eventBus) {
      return;
    }

    this.subscribeToEventBus(UnlockPanelEventsEnum.LOGIN, this.handleLogin);
    this.subscribeToEventBus(
      UnlockPanelEventsEnum.CANCEL_LOGIN,
      this.handleCancelLogin
    );
    this.subscribeToEventBus(UnlockPanelEventsEnum.CLOSE, this.handleCloseUI);
  };

  private readonly handleCloseUI = async (options?: {
    isLoginFinished?: boolean;
  }) => {
    if (!options?.isLoginFinished && UnlockPanelManager.onClose) {
      UnlockPanelManager.onClose();
    }

    this.closeUI();
  };

  private readonly handleLogin = async ({ type, anchor }: IProviderFactory) => {
    if (!UnlockPanelManager.loginHandler) {
      throw new Error(
        'Login callback not initialized. Please call `init()` first.'
      );
    }

    try {
      if (getIsSimpleLoginCallback(UnlockPanelManager.loginHandler)) {
        const provider = await ProviderFactory.create({ type, anchor });
        await provider.login();
        UnlockPanelManager.loginHandler();
      } else {
        UnlockPanelManager.loginHandler({ type, anchor });
      }
      await this.handleCloseUI({ isLoginFinished: true });
    } catch (error) {
      console.error(error);
      this.eventBus?.publish(
        UnlockPanelEventsEnum.CANCEL_IN_PROVIDER,
        this.data
      );
    }
  };

  private readonly handleCancelLogin = async () => {
    await ProviderFactory.destroy();
    UnlockPanelManager.onCancelLogin?.();
  };
}
