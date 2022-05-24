import {
  SignableMessage,
  Transaction,
} from '@elrondnetwork/erdjs';

export interface IDappProvider {
  init?(): Promise<boolean>;
  login?<TOptions = { callbackUrl?: string } | undefined, TResponse = string>(options?: TOptions): Promise<TResponse>;
  logout<TOptions = { callbackUrl?: string }, TResponse = boolean>(options?: TOptions): Promise<TResponse>;
  getAddress(): Promise<string>;
  isInitialized(): boolean;
  isConnected(): Promise<boolean>;
  sendTransaction?<TOptions = { callbackUrl?: string }, TResponse = Transaction>(transaction: Transaction, options?: TOptions): Promise<TResponse>;
  signTransaction?<TOptions = { callbackUrl?: string }, TResponse = Transaction>(transaction: Transaction, options?: TOptions): Promise<TResponse>;
  signTransactions?<TOptions = { callbackUrl?: string }, TResponse = Transaction[]>(transactions: Transaction[], options?: TOptions): Promise<TResponse>;
  signMessage?(message: SignableMessage): Promise<SignableMessage>;
}
