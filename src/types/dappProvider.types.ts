import { SignableMessage, Transaction } from '@multiversx/sdk-core';
import { EngineTypes } from 'utils/walletconnect/__sdkWalletconnectProvider';
import { Nullable } from './transactions.types';

export interface DappOptions {
  callbackUrl?: string;
}

export interface IDappProvider {
  init?(): Promise<boolean>;
  login?(options?: DappOptions): Promise<string | boolean>;
  logout(options?: DappOptions): Promise<boolean>;
  getAddress(): Promise<string>;
  isInitialized(): boolean;
  isConnected(): Promise<boolean>;
  sendTransaction?(
    transaction: Transaction,
    options?: DappOptions
  ): Promise<Transaction | void>;
  signTransaction(
    transaction: Transaction,
    options?: DappOptions
  ): Promise<Nullable<Transaction | undefined>>;
  signTransactions(
    transactions: Transaction[],
    options?: DappOptions
  ): Promise<Nullable<Transaction[]>>;
  signMessage(
    message: SignableMessage,
    options: DappOptions
  ): Promise<Nullable<SignableMessage>>;
  sendCustomMessage?({
    method,
    params
  }: {
    method: string;
    params: any;
  }): Promise<any>;
  sendCustomRequest?(options?: {
    request: EngineTypes.RequestParams['request'];
  }): Promise<any>;
  ping?(): Promise<boolean>;
  relogin?: () => Promise<Nullable<string | void>>;
  setShouldShowConsentPopup?: (shouldShow: boolean) => void;
}
