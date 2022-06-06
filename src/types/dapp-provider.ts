import { SignableMessage, Transaction } from '@elrondnetwork/erdjs';

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
  signTransaction<TResponse = Transaction, TOptions = { callbackUrl?: string }>(
    transaction: Transaction,
    options?: TOptions
  ): Promise<TResponse>;
  signTransactions<
    TResponse = Transaction[],
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
