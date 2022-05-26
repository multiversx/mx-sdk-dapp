import { SignableMessage, Transaction } from '@elrondnetwork/erdjs';
import { PlainSignedTransaction } from '@elrondnetwork/erdjs-web-wallet-provider/out/plainSignedTransaction';

export interface IDappProvider {
  init?(): Promise<boolean>;
  login?<TResponse = string, TOptions = { callbackUrl?: string } | undefined>(
    options?: TOptions
  ): Promise<TResponse>;
  logout<TResponse = boolean, TOptions = { callbackUrl?: string }>(
    options?: TOptions
  ): Promise<TResponse>;
  getAddress(): Promise<string>;
  isInitialized(): boolean;
  isConnected(): Promise<boolean>;
  sendTransaction?<
    TResponse = Transaction,
    TOptions = { callbackUrl?: string }
  >(
    transaction: Transaction,
    options?: TOptions
  ): Promise<TResponse>;
  signTransaction?<
    TResponse = PlainSignedTransaction,
    TOptions = { callbackUrl?: string }
  >(
    transaction: Transaction,
    options?: TOptions
  ): Promise<TResponse>;
  signTransactions?<
    TResponse = PlainSignedTransaction,
    TOptions = { callbackUrl?: string }
  >(
    transactions: Transaction[],
    options?: TOptions
  ): Promise<TResponse>;
  signMessage<T extends SignableMessage, TOptions = { callbackUrl?: string }>(
    message: T,
    options: TOptions
  ): Promise<T>;
}
