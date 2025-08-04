import { UITagsEnum } from 'constants/UITags.enum';
import { MvxPendingTransactionsPanel } from 'lib/sdkDappUi';
import { IProviderBase } from 'providers/types/providerFactory.types';
import { SidePanelBaseManager } from '../SidePanelBaseManager/SidePanelBaseManager';
import { PendingTransactionsEventsEnum } from './types/pendingTransactions.types';

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

  public destroy() {
    this.unsubscribeFunctions.forEach((unsubList) =>
      unsubList.forEach((unsubscribe) => unsubscribe())
    );
    this.unsubscribeFunctions.clear();
    this.eventBus = null;
    this.uiElement?.remove?.();
    this.uiElement = null;
  }
}
