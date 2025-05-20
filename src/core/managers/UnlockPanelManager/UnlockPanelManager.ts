import { providerLabels } from 'constants/providerFactory.constants';
import { UITagsEnum } from 'constants/UITags.enum';
import { ProviderFactory } from 'core/providers/ProviderFactory';
import {
  IProviderBase,
  IProviderFactory,
  ProviderTypeEnum
} from 'core/providers/types/providerFactory.types';
import { MvxUnlockPanel } from 'lib/sdkDappUi';
import { IEventBus } from 'types/manager.types';
import { ProviderErrorsEnum } from 'types/provider.types';
import { createUIElement } from 'utils/createUIElement';
import {
  AllowedProviderType,
  IUnlockPanel,
  LoginHandlerType,
  UnlockPanelEventsEnum,
  UnlockPanelManagerInitParamsType
} from './UnlockPanelManager.types';

export class UnlockPanelManager {
  private static instance: UnlockPanelManager;
  private static loginHandler: LoginHandlerType | null = null;
  private static allowedProviders?: AllowedProviderType[] | null = null;

  private data: IUnlockPanel = { isOpen: false };
  private unlockPanelElement: MvxUnlockPanel | null = null;
  private eventBus: IEventBus<IUnlockPanel> | null = null;

  private readonly initialData: IUnlockPanel = { isOpen: false };

  private constructor() {
    this.data = { ...this.initialData };
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
    return this.getInstance();
  }

  public async openUnlockPanel() {
    if (this.data.isOpen) {
      return;
    }

    this.data = {
      isOpen: true,
      allowedProviders: UnlockPanelManager.getProvidersList()
    };

    await this.ensureUnlockPanelElementExists();
    await this.ensureEventBus();
    this.eventBus?.publish(UnlockPanelEventsEnum.OPEN, this.data);

    this.subscribeToEvents();
  }

  private async ensureUnlockPanelElementExists() {
    if (!this.unlockPanelElement) {
      this.unlockPanelElement = await createUIElement<MvxUnlockPanel>({
        name: UITagsEnum.UNLOCK_PANEL
      });

      if (!this.unlockPanelElement) {
        throw new Error(`Failed to create ${UITagsEnum.UNLOCK_PANEL} element`);
      }
    }
  }

  private async ensureEventBus() {
    if (!this.eventBus && this.unlockPanelElement) {
      this.eventBus = await this.unlockPanelElement.getEventBus();

      if (!this.eventBus) {
        throw new Error(ProviderErrorsEnum.eventBusError);
      }
    }
  }

  private subscribeToEvents() {
    this.eventBus?.subscribe(
      UnlockPanelEventsEnum.LOGIN,
      this.handleLogin.bind(this)
    );
    this.eventBus?.subscribe(
      UnlockPanelEventsEnum.CANCEL_LOGIN,
      this.handleCancelLogin.bind(this)
    );
    this.eventBus?.subscribe(
      UnlockPanelEventsEnum.CLOSE,
      this.handleCloseUI.bind(this)
    );
  }

  private async handleCloseUI() {
    this.data = { ...this.initialData };
    await this.destroyUnlockPanel();
  }

  private async handleLogin({ type, anchor }: IProviderFactory) {
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
      await this.handleCloseUI();
    } catch (error) {
      console.error(error);
      this.eventBus?.publish(
        UnlockPanelEventsEnum.CANCEL_IN_PROVIDER,
        this.data
      );
    }
  }

  private async handleCancelLogin() {
    await ProviderFactory.destroy();
  }

  private async destroyUnlockPanel() {
    this.eventBus = null;
    this.unlockPanelElement?.remove();
    this.unlockPanelElement = null;
  }

  private isSimpleLoginCallback(login: LoginHandlerType): login is () => void {
    const takesZeroArguments = login.length === 0;
    return takesZeroArguments;
  }

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
