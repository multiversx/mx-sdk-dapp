import { providerLabels } from 'constants/providerFactory.constants';
import { UITagsEnum } from 'constants/UITags.enum';
import { ProviderFactory } from 'core/providers/ProviderFactory';
import {
  IProviderBase,
  IProviderFactory,
  ProviderTypeEnum
} from 'core/providers/types/providerFactory.types';
import { MvxUnlockPanel } from 'lib/sdkDappUi';
import {
  AllowedProviderType,
  CloseCallbackType,
  LoginHandlerType,
  UnlockPanelEventsEnum,
  UnlockPanelManagerInitParamsType
} from './UnlockPanelManager.types';
import { SidePanelBaseManager } from '../internal/SidePanelBaseManager';

export class UnlockPanelManager extends SidePanelBaseManager<
  MvxUnlockPanel,
  IProviderBase[] | null,
  UnlockPanelEventsEnum
> {
  protected initialData: IProviderBase[] | null = null;

  private static instance: UnlockPanelManager;
  private static loginHandler: LoginHandlerType | null = null;
  private static closeCallback: CloseCallbackType | null = null;
  private static allowedProviders?: AllowedProviderType[] | null = null;

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

    if (params.closeCallback) {
      this.closeCallback = params.closeCallback;
    }

    return this.getInstance();
  }

  public openUnlockPanel = async () => {
    this.data = UnlockPanelManager.getProvidersList();
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

  private handleCloseUI = async (options?: { isLoginFinished?: boolean }) => {
    if (!options?.isLoginFinished && UnlockPanelManager.closeCallback) {
      UnlockPanelManager.closeCallback();
    }

    this.closeUI();
  };

  private handleLogin = async ({ type, anchor }: IProviderFactory) => {
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

  private handleCancelLogin = async () => {
    await ProviderFactory.destroy();
  };

  private isSimpleLoginCallback = (
    login: LoginHandlerType
  ): login is () => void => {
    const takesZeroArguments = login.length === 0;
    return takesZeroArguments;
  };

  private static getProvidersList(): IProviderBase[] {
    const customProviders = ProviderFactory.customProviders;

    const enumProviderTypes = Object.values(ProviderTypeEnum).filter(
      (type) =>
        type !== ProviderTypeEnum.none && type !== ProviderTypeEnum.webview
    );

    const allAvailableProviderTypes = [
      ...enumProviderTypes,
      ...customProviders.map((p) => p.type)
    ];

    const allowedProviderTypes = this.allowedProviders
      ? this.allowedProviders.filter((type) =>
          allAvailableProviderTypes.includes(type)
        )
      : allAvailableProviderTypes;

    const providerList: IProviderBase[] = allowedProviderTypes.map((type) => {
      const custom = customProviders.find(
        (customProvider) => customProvider.type === type
      );
      if (custom) {
        return custom;
      }

      return {
        name: providerLabels[type as ProviderTypeEnum] ?? type,
        type
      };
    });

    return providerList;
  }
}
