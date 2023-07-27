import { SignableMessage } from '@multiversx/sdk-core';
import { Transaction } from '@multiversx/sdk-core';
import qs from 'qs';
import {
  WALLET_PROVIDER_CONNECT_URL,
  WALLET_PROVIDER_SIGN_TRANSACTION_URL
} from './const';
import {
  ErrAccountNotConnected,
  ErrCannotSignSingleTransaction
} from './errors';
import { Operation } from './operation';

interface IWalletV2Account {
  address: string;
  name?: string;
  signature?: string;
}

export const PARENT_DAPP_WINDOW_NAME = 'parentDapp';
export const CHILD_WEB_WALLET_WINDOW_NAME = 'childWallet';

export class WalletV2Provider {
  private walletUrl = '';
  public account: IWalletV2Account = { address: '' };
  private initialized = false;
  private static _instance: WalletV2Provider = new WalletV2Provider();
  walletWindow: Window | null = null;

  private constructor() {
    if (WalletV2Provider._instance) {
      throw new Error(
        'Error: Instantiation failed: Use WalletV2Provider.getInstance() instead of new.'
      );
    }
    window.name = PARENT_DAPP_WINDOW_NAME;
    WalletV2Provider._instance = this;
  }

  public static getInstance(walletUrl: string): WalletV2Provider {
    WalletV2Provider._instance.walletUrl = walletUrl;
    return WalletV2Provider._instance;
  }

  public setAddress(address: string): WalletV2Provider {
    this.account.address = address;
    return WalletV2Provider._instance;
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
        'WalletV2 provider is not initialised, call init() first'
      );
    }
    const redirectUrl = this.buildWalletUrl({
      endpoint: WALLET_PROVIDER_CONNECT_URL,
      callbackUrl: options?.callbackUrl,
      params: {
        token: options?.token,
        isChildTab: true
      }
    });
    this.walletWindow = window.open(redirectUrl, CHILD_WEB_WALLET_WINDOW_NAME);
    const account: { address: string; signature: string } = await new Promise(
      (resolve) => {
        const walletUrl = this.walletUrl;
        window.addEventListener('message', function eventHandler(event) {
          if (event.origin === new URL(walletUrl).origin) {
            window.removeEventListener('message', eventHandler);
            resolve(JSON.parse(event.data));
          }
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
      const plainTx = WalletV2Provider.prepareWalletTransaction(tx);
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
    jsonToSend.isChildTab = true;

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
    console.log('close wallet window!');
    if (this.walletWindow) {
      this.walletWindow.close();
    }
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
    if (this.walletWindow) {
      const redirectUrl = this.buildTransactionsUrl(
        WALLET_PROVIDER_SIGN_TRANSACTION_URL,
        transactions
      );
      this.walletWindow.location.href = redirectUrl;
    }
    throw new Error(`Transaction canceled. ${transactions}`);
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
