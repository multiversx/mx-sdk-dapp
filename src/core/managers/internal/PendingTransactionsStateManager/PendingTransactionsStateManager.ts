import { UITagsEnum } from 'constants/UITags.enum';
import { IProviderBase } from 'core/providers/types/providerFactory.types';
import { MvxPendingTransactionsPanel } from 'lib/sdkDappUi';
import { PendingTransactionsEventsEnum } from './types/pendingTransactions.types';
import { SidePanelBaseManager } from '../SidePanelBaseManager/SidePanelBaseManager';

export class PendingTransactionsStateManager extends SidePanelBaseManager<
  MvxPendingTransactionsPanel,
  IProviderBase | null,
  PendingTransactionsEventsEnum
> {
  private static instance: PendingTransactionsStateManager;

  protected initialData: IProviderBase | null = null;

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
      uiTag: UITagsEnum.PENDING_TRANSACTIONS_PANEL
    });
    this.data = this.initialData;
  }

  public isPendingTransactionsOpen(): boolean {
    return this.isOpen;
  }

  protected async setupEventListeners() {
    if (!this.eventBus) {
      return;
    }

    this.subscribeToEventBus(
      PendingTransactionsEventsEnum.CLOSE,
      this.closeUI.bind(this)
    );
  }
}
