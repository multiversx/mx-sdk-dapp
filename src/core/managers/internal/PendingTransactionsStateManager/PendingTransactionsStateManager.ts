import { UITagsEnum } from 'constants/UITags.enum';
import { IProviderBase } from 'core/providers/types/providerFactory.types';
import { MvxPendingTransactionsPanel } from 'lib/sdkDappCoreUi';
import { PendingTransactionsEventsEnum } from './types/pendingTransactions.types';
import { SidePanelBaseManager } from '../SidePanelBaseManager/SidePanelBaseManager';

interface IPendingTransactionsState {
  provider: IProviderBase | null;
  shouldClose?: boolean;
}

export class PendingTransactionsStateManager extends SidePanelBaseManager<
  MvxPendingTransactionsPanel,
  IPendingTransactionsState,
  PendingTransactionsEventsEnum
> {
  private static instance: PendingTransactionsStateManager;

  protected initialData: IPendingTransactionsState = {
    provider: null,
    shouldClose: false
  };

  public static getInstance(): PendingTransactionsStateManager {
    if (!PendingTransactionsStateManager.instance) {
      PendingTransactionsStateManager.instance =
        new PendingTransactionsStateManager();
    }

    return PendingTransactionsStateManager.instance;
  }

  constructor() {
    super({
      uiDataUpdateEvent: PendingTransactionsEventsEnum.DATA_UPDATE,
      uiTag: UITagsEnum.PENDING_TRANSACTIONS_PANEL,
      uiSidePanelOpenEvent:
        PendingTransactionsEventsEnum.OPEN_PENDING_TRANSACTIONS_PANEL,
      uiSidePanelCloseEvent:
        PendingTransactionsEventsEnum.CLOSE_PENDING_TRANSACTIONS
    });
    this.data = { ...this.initialData };
  }

  public isPendingTransactionsOpen(): boolean {
    return this.isOpen;
  }

  public async openProviderIdleState(data: IPendingTransactionsState) {
    await this.openUI(data);
  }

  protected async setupEventListeners() {
    if (!this.eventBus) {
      return;
    }

    this.eventBus.subscribe(
      PendingTransactionsEventsEnum.CLOSE_PENDING_TRANSACTIONS,
      this.handleCloseUI.bind(this)
    );
  }
}
