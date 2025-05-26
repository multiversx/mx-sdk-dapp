import { EMPTY_PPU } from 'constants/placeholders.constants';
import { UITagsEnum } from 'constants/UITags.enum';
import { Transaction } from 'lib/sdkCore';
import { MvxSignTransactionsPanel } from 'lib/sdkDappUi';
import { NftEnumType } from 'types/tokens.types';
import {
  FungibleTransactionType,
  ISignTransactionsPanelData,
  SignEventsEnum,
  TokenType,
  ISignTransactionsPanelCommonData
} from './types/signTransactionsPanel.types';
import { SidePanelBaseManager } from '../SidePanelBaseManager/SidePanelBaseManager';

export class SignTransactionsStateManager extends SidePanelBaseManager<
  MvxSignTransactionsPanel,
  ISignTransactionsPanelData,
  SignEventsEnum
> {
  private static instance: SignTransactionsStateManager;
  public readonly addressesPerPage = 10;

  private _ppuMap: Record<
    number, // nonce
    {
      initialGasPrice: number;
      ppu: ISignTransactionsPanelCommonData['ppu'];
    }
  > = {};

  protected initialData: ISignTransactionsPanelData = {
    commonData: {
      transactionsCount: 0,
      currentIndexToSign: 0,
      egldLabel: '',
      currentIndex: 0,
      ppuOptions: [],
      address: '',
      origin: ''
    },
    tokenTransaction: null,
    nftTransaction: null,
    sftTransaction: null
  };

  public static getInstance(): SignTransactionsStateManager {
    if (!SignTransactionsStateManager.instance) {
      SignTransactionsStateManager.instance =
        new SignTransactionsStateManager();
    }
    return SignTransactionsStateManager.instance;
  }

  constructor() {
    super({
      uiDataUpdateEvent: SignEventsEnum.DATA_UPDATE,
      uiTag: UITagsEnum.SIGN_TRANSACTIONS_PANEL
    });
    this.data = { ...this.initialData };
  }

  get transactionsCount() {
    return this.data.commonData.transactionsCount;
  }

  public initializeGasPriceMap(transactions: Transaction[]) {
    const ppu = EMPTY_PPU;

    transactions
      .filter((tx) => tx != null)
      .forEach((transaction) => {
        const initialGasPrice = transaction ? Number(transaction.gasPrice) : 0;

        this.updateGasPriceMap({
          nonce: Number(transaction.nonce),
          ppu,
          initialGasPrice
        });
      });

    this.updateCommonData({ ppu });
  }

  public updateGasPriceMap({
    nonce,
    ppu,
    initialGasPrice
  }: {
    nonce: number;
    initialGasPrice?: number;
    ppu: ISignTransactionsPanelCommonData['ppu'];
  }) {
    this._ppuMap[nonce] = {
      ...this._ppuMap[nonce],
      ppu
    };

    if (!initialGasPrice) {
      return;
    }

    this._ppuMap[nonce].initialGasPrice = initialGasPrice;
  }

  public updateCommonData(
    newCommonData: Partial<ISignTransactionsPanelCommonData>
  ): void {
    this.data.commonData = {
      ...this.data.commonData,
      ...newCommonData
    };
    this.notifyDataUpdate();
  }

  public updateIsLoading(newState: boolean) {
    this.data.isLoading = newState;

    this.notifyDataUpdate();
  }

  public updateTokenTransaction(
    tokenData: ISignTransactionsPanelData['tokenTransaction']
  ): void {
    this.data.tokenTransaction = tokenData;
    this.data.sftTransaction = null;
    this.data.nftTransaction = null;

    this.notifyDataUpdate();
  }

  public updateNonFungibleTransaction(
    type: TokenType,
    fungibleData: FungibleTransactionType
  ): void {
    switch (type) {
      case NftEnumType.NonFungibleESDT:
        this.data.nftTransaction = fungibleData;
        this.data.tokenTransaction = null;
        this.data.sftTransaction = null;
        break;
      case NftEnumType.SemiFungibleESDT:
        this.data.sftTransaction = fungibleData;
        this.data.nftTransaction = null;
        this.data.tokenTransaction = null;
        break;
      default:
        break;
    }

    this.notifyDataUpdate();
  }

  public get currentScreenIndex() {
    return this.data.commonData.currentIndex;
  }

  public get ppuMap() {
    return this._ppuMap;
  }

  protected async setupEventListeners() {
    if (!this.eventBus) {
      return;
    }

    this.subscribeToEventBus(SignEventsEnum.CLOSE, this.closeUI.bind(this));
  }
}
