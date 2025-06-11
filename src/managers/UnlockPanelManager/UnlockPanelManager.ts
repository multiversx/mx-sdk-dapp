import { providerLabels } from 'constants/providerFactory.constants';
import { UITagsEnum } from 'constants/UITags.enum';
import { MvxUnlockPanel } from 'lib/sdkDappUi';
import { ProviderFactory } from 'providers/ProviderFactory';
import {
  IProviderBase,
  IProviderFactory,
  ICustomProvider,
  ProviderTypeEnum,
  ProviderType
} from 'providers/types/providerFactory.types';
import { networkSelector } from 'store/selectors';
import { getState } from 'store/store';
import {
  OnCloseUnlockPanelType,
  LoginHandlerType,
  UnlockPanelEventsEnum,
  UnlockPanelManagerInitParamsType
} from './UnlockPanelManager.types';
import { SidePanelBaseManager } from '../internal/SidePanelBaseManager';

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
  private static allowedProviders?: ICustomProvider[] | null = null;

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

    return this.getInstance();
  }

  public openUnlockPanel = async () => {
    const { walletAddress } = networkSelector(getState());

    this.data = {
      providers: this.getProvidersList(),
      walletAddress
    };

    await this.openUI();
    this.notifyDataUpdate();
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
      if (this.isSimpleLoginCallback(UnlockPanelManager.loginHandler)) {
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
  };

  private readonly isSimpleLoginCallback = (
    login: LoginHandlerType
  ): login is () => void => {
    const takesZeroArguments = login.length === 0;
    return takesZeroArguments;
  };

  private getProvidersList(): IProviderBase[] {
    const customProviders = ProviderFactory.customProviders;

    const defaultProviderTypes = Object.values(ProviderTypeEnum).filter(
      (type) =>
        type !== ProviderTypeEnum.none && type !== ProviderTypeEnum.webview
    );

    const allAvailableProviderTypes = [
      ...defaultProviderTypes,
      ...customProviders.map((p) => p.type)
    ];

    const customProviderLabels = customProviders.reduce(
      (acc, provider) => {
        acc[provider.type] = provider.name;
        return acc;
      },
      {} as Record<ProviderType, string>
    );

    const allAvailableLabels = {
      ...providerLabels,
      ...customProviderLabels
    };

    const allowedProviderTypes = UnlockPanelManager.allowedProviders
      ? UnlockPanelManager?.allowedProviders
          .map((p) => p.type)
          .filter((type) => allAvailableProviderTypes.includes(type))
      : allAvailableProviderTypes;

    const providerList = allowedProviderTypes.map((type) => {
      const custom = customProviders.find(
        (customProvider) => customProvider.type === type
      );
      if (custom) {
        return custom;
      }

      return {
        name: type in allAvailableLabels ? allAvailableLabels[type] : type,
        type
      };
    });

    return providerList;
  }
}
