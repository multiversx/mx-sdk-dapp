// types here need to be synced with the types in sdk-dapp-ui sign-transactions-modal.types.ts
import {
  DecodedDisplayType,
  DecodeMethodEnum
} from 'types/serverTransactions.types';
import type { EsdtEnumType, NftEnumType } from 'types/tokens.types';

export interface ITransactionData {
  receiver?: string;
  data?: string;
  value?: string;
}

export type FungibleTransactionType = {
  amount: string;
  identifier?: string;
  imageURL: string;
};

export type TokenType = EsdtEnumType | NftEnumType;

export interface ISignTransactionsPanelCommonData {
  receiver?: string;
  receiverIcon?: string;
  data?: string;
  decodedData?: Partial<Record<DecodeMethodEnum, DecodedDisplayType>>;
  gasPrice?: string; // formatted gas price
  gasPriceOption?: number;
  gasPriceOptions: {
    label: string;
    value: number;
  }[];
  gasLimit?: string;
  transactionsCount: number;
  tokenType?: TokenType;
  egldLabel: string;
  feeLimit?: string;
  feeInFiatLimit?: string | null;
  currentIndex: number;
  currentIndexToSign: number;
  needsSigning?: boolean;
  isEditable?: boolean;
  highlight?: string | null;
  scCall?: string | null;
  nextUnsignedTxIndex?: number;
  providerName?: string;
  address?: string;
  username?: string;
  origin?: string;
  explorerLink?: string;
}

export interface ISignTransactionsPanelData {
  shouldClose?: boolean;
  isLoading?: boolean;
  commonData: ISignTransactionsPanelCommonData;
  tokenTransaction: {
    identifier?: string;
    amount: string;
    usdValue: string;
  } | null;
  nftTransaction: FungibleTransactionType | null;
  sftTransaction: FungibleTransactionType | null;
}

export enum SignEventsEnum {
  CONFIRM = 'CONFIRM_SIGN_TRANSACTIONS', // can be sign or next
  NEXT = 'NEXT_SIGN_TRANSACTIONS',
  BACK = 'BACK_SIGN_TRANSACTIONS',
  DATA_UPDATE = 'DATA_UPDATE_SIGN_TRANSACTIONS',
  SET_GAS_PRICE_OPTION = 'SET_GAS_PRICE_OPTION_SIGN_TRANSACTIONS',
  CLOSE = 'CLOSE_SIGN_TRANSACTIONS'
}
