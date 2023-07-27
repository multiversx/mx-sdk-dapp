import { IPlainTransactionObject } from '@multiversx/sdk-core';
import { SignableMessage } from '@multiversx/sdk-core';
import { Transaction } from '@multiversx/sdk-core';
import {
  ErrAccountNotConnected,
  ErrCannotSignSingleTransaction
} from './errors';
import { Operation } from './operation';
import { WALLET_PROVIDER_CONNECT_URL } from './const';
import qs from 'qs';

declare global {
  interface Window {
    elrondWallet: { extensionId: string };
  }
}

interface IWalletV2Account {
  address: string;
  name?: string;
  signature?: string;
}

export class WalletV2Provider {
  private walletUrl = '';
  public account: IWalletV2Account = { address: '' };
  private initialized: boolean = false;
  private static _instance: WalletV2Provider = new WalletV2Provider();

  private constructor() {
    if (WalletV2Provider._instance) {
      throw new Error(
        'Error: Instantiation failed: Use WalletV2Provider.getInstance() instead of new.'
      );
    }
    WalletV2Provider._instance = this;
  }

  public static getInstance(walletUrl: string): WalletV2Provider {
    console.log('geting instance', walletUrl);
    WalletV2Provider._instance.walletUrl = walletUrl;
    return WalletV2Provider._instance;
  }

  public setAddress(address: string): WalletV2Provider {
    this.account.address = address;
    return WalletV2Provider._instance;
  }

  async init(): Promise<boolean> {
    if (window && window.elrondWallet) {
      this.initialized = true;
    }
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
        'WalletV2 provider is not initialised, call init() first'
      );
    }
    console.log('-----');
    const { token } = options;
    const data = token ? token : '';
    // await this.startBgrMsgChannel(Operation.Connect, data);
    console.log('try login with walletV2');
    const redirectUrl = this.buildWalletUrl({
      endpoint: WALLET_PROVIDER_CONNECT_URL,
      callbackUrl: options?.callbackUrl,
      params: {
        token: options?.token,
        isChildTab: true
      }
    });
    console.log('heee');
    const myWindow = window.open(redirectUrl, '_blank');
    console.log(myWindow, data);

    throw new Error('not able to login');
    return this.account.address;
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
        'WalletV2 provider is not initialised, call init() first'
      );
    }
    try {
      await this.startBgrMsgChannel(Operation.Logout, this.account.address);
      this.disconnect();
    } catch (error) {
      console.warn('WalletV2 origin url is already cleared!', error);
    }

    return true;
  }

  private disconnect() {
    this.account = { address: '' };
  }

  async getAddress(): Promise<string> {
    if (!this.initialized) {
      throw new Error(
        'WalletV2 provider is not initialised, call init() first'
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

    const walletV2Response = await this.startBgrMsgChannel(
      Operation.SignTransactions,
      {
        from: this.account.address,
        transactions: transactions.map((transaction) =>
          transaction.toPlainObject()
        )
      }
    );

    try {
      const transactionsResponse = walletV2Response.map(
        (transaction: IPlainTransactionObject) =>
          Transaction.fromPlainObject(transaction)
      );

      return transactionsResponse;
    } catch (error: any) {
      throw new Error(`Transaction canceled: ${error.message}.`);
    }
  }

  async signMessage(message: SignableMessage): Promise<SignableMessage> {
    this.ensureConnected();

    const data = {
      account: this.account.address,
      message: message.message.toString()
    };
    const walletV2Response = await this.startBgrMsgChannel(
      Operation.SignMessage,
      data
    );
    const signatureHex = walletV2Response.signature;
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
