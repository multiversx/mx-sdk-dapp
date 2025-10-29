import { GAS_PRICE } from 'constants/mvx.constants';
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

  private _gasPriceOptionMap: Record<
    number, // nonce
    {
      initialGasPrice: number;
      gasPriceOption: number;
    }
  > = {};

  protected initialData: ISignTransactionsPanelData = {
    commonData: {
      transactionsCount: 0,
      currentIndexToSign: 0,
      egldLabel: '',
      currentIndex: 0,
      gasPriceOption: 0,
      gasPriceOptions: [],
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
    const gasPriceOption = GAS_PRICE;

    transactions
      .filter((tx) => tx != null)
      .forEach((transaction) => {
        const initialGasPrice = transaction ? Number(transaction.gasPrice) : 0;

        this.updateGasPriceMap({
          nonce: Number(transaction.nonce),
          gasPriceOption,
          initialGasPrice
        });
      });

    this.updateCommonData({ gasPriceOption });
  }

  public updateGasPriceMap({
    nonce,
    gasPriceOption,
    initialGasPrice
  }: {
    nonce: number;
    initialGasPrice?: number;
    gasPriceOption: number;
  }) {
    this._gasPriceOptionMap[nonce] = {
      ...this._gasPriceOptionMap[nonce],
      gasPriceOption
    };

    if (!initialGasPrice) {
      return;
    }

    this._gasPriceOptionMap[nonce].initialGasPrice = initialGasPrice;
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

  public get getGasPriceOptionMap() {
    return this._gasPriceOptionMap;
  }

  protected async setupEventListeners() {
    if (!this.eventBus) {
      return;
    }

    this.subscribeToEventBus(SignEventsEnum.CLOSE, this.closeUI.bind(this));
  }
}
