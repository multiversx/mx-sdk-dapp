import { SignableMessage } from '@multiversx/sdk-core';
import { Transaction } from '@multiversx/sdk-core';
import qs from 'qs';
import {
  WALLET_PROVIDER_CONNECT_URL,
  WALLET_PROVIDER_DISCONNECT_URL,
  WALLET_PROVIDER_SIGN_TRANSACTION_URL
} from './const';
import {
  ErrAccountNotConnected,
  ErrCannotSignSingleTransaction
} from './errors';
import { Operation } from './operation';

interface ICrossWindowWalletAccount {
  address: string;
  name?: string;
  signature?: string;
}

export const PARENT_DAPP_WINDOW_NAME = window.location.origin;
export const CHILD_WEB_WALLET_WINDOW_NAME = 'childWallet';

export class CrossWindowProvider {
  private walletUrl = '';
  public account: ICrossWindowWalletAccount = { address: '' };
  private initialized = false;
  private static _instance: CrossWindowProvider = new CrossWindowProvider();
  walletWindow: Window | null = null;

  private constructor() {
    if (CrossWindowProvider._instance) {
      throw new Error(
        'Error: Instantiation failed: Use CrossWindowProvider.getInstance() instead of new.'
      );
    }
    window.addEventListener('beforeunload', () => {
      if (this.walletWindow) {
        this.walletWindow.close();
      }
    });
    window.name = PARENT_DAPP_WINDOW_NAME;
    CrossWindowProvider._instance = this;
  }

  public static getInstance(walletUrl: string): CrossWindowProvider {
    CrossWindowProvider._instance.walletUrl = walletUrl;
    return CrossWindowProvider._instance;
  }

  public setAddress(address: string): CrossWindowProvider {
    this.account.address = address;
    return CrossWindowProvider._instance;
  }

  async init(): Promise<boolean> {
    this.initialized = true;
    return this.initialized;
  }

  async login(
    options: {
      callbackUrl?: string;
      token?: string;
    } = {}
  ): Promise<string> {
    if (!this.initialized) {
      throw new Error(
        'Wallet cross window provider is not initialised, call init() first'
      );
    }
    const redirectUrl = this.buildWalletUrl({
      endpoint: WALLET_PROVIDER_CONNECT_URL,
      callbackUrl: options?.callbackUrl,
      params: {
        token: options?.token
      }
    });
    this.walletWindow = window.open(redirectUrl, CHILD_WEB_WALLET_WINDOW_NAME);

    const dataToSend = {
      key1: 'value1',
      key2: 'value2'
      // ... other data
    };

    this.walletWindow?.postMessage(dataToSend, redirectUrl);

    const account: { address: string; signature: string } = await new Promise(
      (resolve) => {
        console.log('\x1b[42m%s\x1b[0m', 'in account promise');

        const walletUrl = this.walletUrl;
        window.addEventListener('message', function eventHandler(event) {
          try {
            const { type, payload } = event.data;
            const isWalletLoginEvent =
              event.origin === new URL(walletUrl).origin && type === 'connect';

            if (isWalletLoginEvent) {
              console.log('\x1b[42m%s\x1b[0m', 112);

              window.removeEventListener('message', eventHandler);
              resolve(payload);
            }
          } catch {}
        });
      }
    );

    this.account.address = account.address;
    this.account.signature = account.signature;

    return this.account.address;
  }

  static prepareWalletTransaction(transaction: Transaction): any {
    const plainTransaction = transaction.toPlainObject();

    // We adjust the data field, in order to make it compatible with what the web wallet expects.
    if (plainTransaction.data) {
      plainTransaction.data = Buffer.from(
        plainTransaction.data,
        'base64'
      ).toString();
    } else {
      // The web wallet expects the data field to be a string, even if it's empty (early 2023).
      plainTransaction.data = '';
    }

    return plainTransaction;
  }

  private buildTransactionsUrl(
    endpoint: string,
    transactions: Transaction[],
    options?: { callbackUrl?: string }
  ): string {
    const jsonToSend: any = {};
    transactions.map((tx) => {
      const plainTx = CrossWindowProvider.prepareWalletTransaction(tx);
      for (const txProp in plainTx) {
        if (
          plainTx.hasOwnProperty(txProp) &&
          !jsonToSend.hasOwnProperty(txProp)
        ) {
          jsonToSend[txProp] = [];
        }

        jsonToSend[txProp].push(plainTx[txProp]);
      }
    });

    return this.buildWalletUrl({
      endpoint,
      callbackUrl: options?.callbackUrl,
      params: jsonToSend
    });
  }

  private buildWalletUrl(options: {
    endpoint: string;
    callbackUrl?: string;
    params?: any;
  }): string {
    const callbackUrl = options?.callbackUrl || window.location.href;
    const partialQueryString = qs.stringify(options.params || {});
    const fullQueryString = partialQueryString
      ? `${partialQueryString}&callbackUrl=${callbackUrl}`
      : `callbackUrl=${callbackUrl}`;
    const url = `${this.baseWalletUrl()}/${
      options.endpoint
    }?${fullQueryString}`;

    console.info(`Redirecting to Wallet URL: ${decodeURI(url)}`);

    return url;
  }

  private baseWalletUrl(): string {
    const pathArray = this.walletUrl.split('/');
    const protocol = pathArray[0];
    const host = pathArray[2];
    return protocol + '//' + host;
  }

  async logout(): Promise<boolean> {
    if (!this.initialized) {
      throw new Error(
        'CrossWindow provider is not initialised, call init() first'
      );
    }
    try {
      this.disconnect();
      if (this.walletWindow) {
        window.open(
          this.buildWalletUrl({ endpoint: WALLET_PROVIDER_DISCONNECT_URL }),
          CHILD_WEB_WALLET_WINDOW_NAME
        );
      }
    } catch (error) {
      console.warn('CrossWindow origin url is already cleared!', error);
    }

    return true;
  }

  private disconnect() {
    this.account = { address: '' };
  }

  async getAddress(): Promise<string> {
    if (!this.initialized) {
      throw new Error(
        'CrossWindow provider is not initialised, call init() first'
      );
    }
    return this.account ? this.account.address : '';
  }

  isInitialized(): boolean {
    return this.initialized;
  }

  // TODO: In V3, this will not be an async function anymore.
  async isConnected(): Promise<boolean> {
    return Boolean(this.account.address);
  }

  async signTransaction(transaction: Transaction): Promise<Transaction> {
    this.ensureConnected();

    const signedTransactions = await this.signTransactions([transaction]);

    if (signedTransactions.length != 1) {
      throw new ErrCannotSignSingleTransaction();
    }

    return signedTransactions[0];
  }

  private ensureConnected() {
    if (!this.account.address) {
      throw new ErrAccountNotConnected();
    }
  }

  async signTransactions(transactions: Transaction[]): Promise<Transaction[]> {
    this.ensureConnected();

    const redirectUrl = this.buildTransactionsUrl(
      WALLET_PROVIDER_SIGN_TRANSACTION_URL,
      transactions
    );
    this.walletWindow = window.open(redirectUrl, CHILD_WEB_WALLET_WINDOW_NAME);

    const transactionsResponse: any = await new Promise((resolve) => {
      const walletUrl = this.walletUrl;
      window.addEventListener('message', function eventHandler(event) {
        if (event.origin === new URL(walletUrl).origin) {
          window.removeEventListener('message', eventHandler);
          resolve(JSON.parse(event.data));
        }
      });
    });

    if (
      transactionsResponse?.status === 'cancelled' &&
      transactionsResponse.address === this.account.address
    ) {
      throw new Error('Transaction canceled.');
    }

    if (
      transactionsResponse?.status === 'cancelled' &&
      transactionsResponse.address === this.account.address
    ) {
      throw new Error('Transaction canceled.');
    } else if (
      Array.isArray(transactionsResponse) &&
      transactionsResponse.length > 0
    ) {
      console.log('transactionsResponse', transactionsResponse);
      const signedTransactions = transactionsResponse.map((tx: any) => {
        const transaction = Transaction.fromPlainObject(tx);
        return transaction;
      });
      return signedTransactions;
    }
    throw new Error('Error signing transactions.');
  }

  async signMessage(message: SignableMessage): Promise<SignableMessage> {
    this.ensureConnected();

    const data = {
      account: this.account.address,
      message: message.message.toString()
    };
    const crossWindowResponse = await this.startBgrMsgChannel(
      Operation.SignMessage,
      data
    );
    const signatureHex = crossWindowResponse.signature;
    const signature = Buffer.from(signatureHex, 'hex');

    message.applySignature(signature);
    return message;
  }

  cancelAction() {
    return this.startBgrMsgChannel(Operation.CancelAction, {});
  }

  private startBgrMsgChannel(
    operation: string,
    connectData: any
  ): Promise<any> {
    return new Promise((resolve) => {
      window.postMessage(
        {
          target: 'erdw-inpage',
          type: operation,
          data: connectData
        },
        window.origin
      );

      const eventHandler = (event: any) => {
        if (event.isTrusted && event.data.target === 'erdw-contentScript') {
          if (event.data.type === 'connectResponse') {
            if (event.data.data && Boolean(event.data.data.address)) {
              this.account = event.data.data;
            }
            window.removeEventListener('message', eventHandler);
            resolve(event.data.data);
          } else {
            window.removeEventListener('message', eventHandler);
            resolve(event.data.data);
          }
        }
      };
      window.addEventListener('message', eventHandler, false);
    });
  }
}
