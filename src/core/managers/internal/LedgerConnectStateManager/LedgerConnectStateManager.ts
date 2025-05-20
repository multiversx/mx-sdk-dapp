import { UITagsEnum } from 'constants/UITags.enum';

import { UnlockPanelEventsEnum } from 'core/managers/UnlockPanelManager/UnlockPanelManager.types';
import {
  IAccountScreenData,
  ILedgerAccount,
  ILedgerConnectPanelData,
  IConnectScreenData,
  IConfirmScreenData
} from 'core/providers/strategies/LedgerProviderStrategy/types/ledger.types';
import { MvxLedgerFlow } from 'lib/sdkDappCoreUi';
import { LedgerConnectEventsEnum } from './types';
import { UIBaseManager } from '../UIBaseManager/UIBaseManager';

type AuthEventsParams = {
  handleCancel: () => Promise<void>;
  handleAccessWallet: (payload: {
    addressIndex: number;
    selectedAddress: string;
  }) => Promise<void>;
  handleGoToPage: (page: number) => Promise<void>;
};

type ProviderInitEventsParams = {
  handleRetry: () => void;
  handleCancel: () => void;
};

export class LedgerConnectStateManager extends UIBaseManager<
  MvxLedgerFlow,
  ILedgerConnectPanelData,
  LedgerConnectEventsEnum
> {
  private static instance: LedgerConnectStateManager;

  public static getInstance(): LedgerConnectStateManager {
    if (!LedgerConnectStateManager.instance) {
      LedgerConnectStateManager.instance = new LedgerConnectStateManager();
    }
    return LedgerConnectStateManager.instance;
  }

  public readonly addressesPerPage = 10;

  private allAccounts: ILedgerAccount[] = [];

  // first screen data
  private initialConnectScreenData: IConnectScreenData = {};
  private connectScreenData: IConnectScreenData = {
    ...this.initialConnectScreenData
  };

  // second screen data
  private initialAccountScreenData: IAccountScreenData = {
    accounts: this.allAccounts,
    startIndex: 0,
    addressesPerPage: this.addressesPerPage,
    isLoading: true
  };

  private accountScreenData: IAccountScreenData = {
    ...this.initialAccountScreenData
  };

  // third screen data
  private initialConfirmScreenData: IConfirmScreenData = {
    selectedAddress: '',
    explorerLink: ''
  };

  private confirmScreenData: IConfirmScreenData = {
    ...this.initialConfirmScreenData
  };

  protected initialData: ILedgerConnectPanelData = {
    connectScreenData: this.initialConnectScreenData,
    accountScreenData: this.initialAccountScreenData,
    confirmScreenData: this.initialConfirmScreenData
  };

  constructor() {
    super({
      uiDataUpdateEvent: LedgerConnectEventsEnum.DATA_UPDATE,
      uiTag: UITagsEnum.LEDGER_FLOW
    });
    this.data = this.getInitialData();
  }

  public updateAllAccounts(accounts: ILedgerAccount[]): void {
    this.allAccounts = accounts;
    this.accountScreenData.accounts = accounts;
  }

  public updateStartIndex(startIndex: number): void {
    this.accountScreenData.startIndex = startIndex;
  }

  public updateConnectScreen(members: Partial<IConnectScreenData>): void {
    this.connectScreenData = {
      ...this.connectScreenData,
      ...members
    };

    this.data.confirmScreenData = null;
    this.data.accountScreenData = null;
    this.data.connectScreenData = this.connectScreenData;
    this.notifyDataUpdate();
  }

  public updateAccountScreen(members: Partial<IAccountScreenData>): void {
    this.accountScreenData = {
      ...this.accountScreenData,
      ...members
    };
    this.data.confirmScreenData = null;
    this.data.accountScreenData = this.accountScreenData;
    this.notifyDataUpdate();
  }

  public updateConfirmScreen(members: Partial<IConfirmScreenData>): void {
    this.confirmScreenData = {
      ...this.confirmScreenData,
      ...members
    };
    this.data.accountScreenData = null;
    this.data.confirmScreenData = this.confirmScreenData;
    this.notifyDataUpdate();
  }

  public getAccountScreenData(): IAccountScreenData | null {
    return this.data.accountScreenData;
  }

  public getConfirmScreenData(): IConfirmScreenData | null {
    return this.data.confirmScreenData;
  }

  public getAllAccounts(): ILedgerAccount[] {
    return this.allAccounts;
  }

  public subscribeToProviderInit({
    handleRetry,
    handleCancel
  }: ProviderInitEventsParams): void {
    if (!this.eventBus) {
      return;
    }

    this.eventBus.subscribe(
      LedgerConnectEventsEnum.CONNECT_DEVICE,
      handleRetry
    );
    this.eventBus.subscribe(LedgerConnectEventsEnum.CLOSE, handleCancel);
    this.eventBus.subscribe(
      LedgerConnectEventsEnum.UI_DISCONNECTED,
      this.destroy.bind(this)
    );
  }

  public unsubscribeFromProviderInit({
    handleRetry,
    handleCancel
  }: ProviderInitEventsParams): void {
    if (!this.eventBus) {
      return;
    }

    this.eventBus.unsubscribe(
      LedgerConnectEventsEnum.CONNECT_DEVICE,
      handleRetry
    );
    this.eventBus.unsubscribe(LedgerConnectEventsEnum.CLOSE, handleCancel);
    this.eventBus.unsubscribe(
      LedgerConnectEventsEnum.UI_DISCONNECTED,
      this.destroy.bind(this)
    );
  }

  public subscribeToAuthEvents({
    handleCancel,
    handleAccessWallet,
    handleGoToPage
  }: AuthEventsParams) {
    if (!this.eventBus) {
      return;
    }

    this.eventBus.subscribe(LedgerConnectEventsEnum.CLOSE, handleCancel);

    this.eventBus.subscribe(
      LedgerConnectEventsEnum.ACCESS_WALLET,
      handleAccessWallet
    );
    this.eventBus.subscribe(LedgerConnectEventsEnum.GO_TO_PAGE, handleGoToPage);
  }
  public unsubscribeFromAuthEvents({
    handleCancel,
    handleAccessWallet,
    handleGoToPage
  }: AuthEventsParams) {
    if (!this.eventBus) {
      return;
    }

    this.eventBus.unsubscribe(LedgerConnectEventsEnum.CLOSE, handleCancel);

    this.eventBus.unsubscribe(
      LedgerConnectEventsEnum.ACCESS_WALLET,
      handleAccessWallet
    );
    this.eventBus.unsubscribe(
      LedgerConnectEventsEnum.GO_TO_PAGE,
      handleGoToPage
    );
  }

  public handleClose() {
    if (this.anchor) {
      this.anchor?.dispatchEvent(
        new CustomEvent(UnlockPanelEventsEnum.ANCHOR_CLOSE, {
          composed: false,
          bubbles: false
        })
      );
    } else {
      this.destroy();
    }
  }

  protected resetData(): void {
    this.accountScreenData = { ...this.initialAccountScreenData };
    this.confirmScreenData = { ...this.initialConfirmScreenData };
    this.connectScreenData = { ...this.initialConnectScreenData };
    super.resetData();
  }

  protected async setupEventListeners() {
    if (!this.eventBus) {
      return;
    }

    this.eventBus.subscribe(
      LedgerConnectEventsEnum.CLOSE,
      this.handleClose.bind(this)
    );
  }
}
