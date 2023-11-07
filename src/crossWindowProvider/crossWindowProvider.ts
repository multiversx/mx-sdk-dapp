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

interface ICrossWindowWalletAccount {
  address: string;
  name?: string;
  signature?: string;
}

export const PARENT_DAPP_WINDOW_NAME = window.location.origin;
export const CHILD_WEB_WALLET_WINDOW_NAME = 'childWallet';
let old_name = window.name;
const check_name = function () {
  if (window.name != old_name) {
    console.log('window name changed to ' + window.name + ' from ' + old_name);
    old_name = window.name;
  }
};
setInterval(check_name, 1000);

export class CrossWindowProvider {
  private walletUrl = '';
  public account: ICrossWindowWalletAccount = { address: '' };
  private initialized = false;
  private static _instance: CrossWindowProvider = new CrossWindowProvider();
  walletWindow: Window | null = null;
  private handshakeEstablished = false;
  private callbackUrl: string | undefined = undefined;
  private accessToken: string | undefined = undefined;

  private constructor() {
    if (CrossWindowProvider._instance) {
      throw new Error(
        'Error: Instantiation failed: Use CrossWindowProvider.getInstance() instead of new.'
      );
    }
    window.addEventListener('beforeunload', () => {
      if (this.walletWindow && window.opener) {
        return this.walletWindow?.postMessage(
          { type: 'mxDappHandshake', payload: false },
          this.walletUrl
        );
      }
      this.walletWindow?.close();
    });

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
    window.name = PARENT_DAPP_WINDOW_NAME;
    this.initialized = true;
    return this.initialized;
  }

  async handshake(): Promise<boolean> {
    console.log('handshake!');
    if (!this.walletWindow) {
      console.log('open wallet');
      this.walletWindow = window.open(
        this.walletUrl,
        CHILD_WEB_WALLET_WINDOW_NAME
      );
    } else {
      console.log('open existing wallet');
      window.open('', CHILD_WEB_WALLET_WINDOW_NAME);
    }

    //check if can be returned true if wallet window exists
    if (this.handshakeEstablished) {
      console.log('handshake already established');
      return true;
    }

    const { type, payload } = await this.listenOnce();
    if (type !== 'handshake' || !payload) {
      throw new Error('Handshake could not be established');
    }
    console.log('handshake event received');

    this.walletWindow?.postMessage(
      { type: 'mxDappHandshake', payload: true },
      this.walletUrl
    );
    this.onHandshakeChangeListener();

    const redirectQueryString = this.buildWalletQueryString({
      endpoint: WALLET_PROVIDER_CONNECT_URL,
      callbackUrl: this.callbackUrl,
      params: {
        token: this.accessToken
      }
    });
    console.log('send connect event');
    this.walletWindow?.postMessage(
      { type: 'mxDappConnect', payload: redirectQueryString },
      this.walletUrl
    );

    const {
      type: connectType,
      payload: { address, signature }
    } = await this.listenOnce();
    console.log('connect response received');
    if (connectType !== 'connect') {
      throw new Error(
        `Could not connect. received ${connectType} event instead of connect`
      );
    }
    console.log('connect is correct');
    this.account.address = address;
    this.account.signature = signature;
    this.handshakeEstablished = true;
    return true;
  }

  private async onHandshakeChangeListener() {
    console.log('add handshake change listener');
    const walletUrl = this.walletUrl;
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    window.addEventListener('message', function eventHandler(event) {
      try {
        const { type, payload } = event.data;
        const isWalletEvent = event.origin === new URL(walletUrl).origin;

        if (isWalletEvent && type === 'handshake') {
          console.log('handshake changed! ', payload);
          if (payload === false) {
            self.handshakeEstablished = false;
            self.walletWindow = null;
            console.log('remove handshake!!@#s');
            window.removeEventListener('message', eventHandler);
          }
        }
      } catch {}
    });
  }

  async listenOnce(): Promise<any> {
    if (!this.walletWindow) {
      throw new Error('Wallet window is not instantiated');
    }
    return await new Promise((resolve) => {
      const walletUrl = this.walletUrl;
      window.addEventListener('message', function eventHandler(event) {
        try {
          const { type, payload } = event.data;
          const isWalletEvent = event.origin === new URL(walletUrl).origin;

          if (isWalletEvent) {
            window.removeEventListener('message', eventHandler);
            resolve({ type, payload });
          }
        } catch {}
      });
    });
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
    this.callbackUrl = options.callbackUrl;
    this.accessToken = options.token;

    await this.handshake();

    return this.account.address;
  }
  //----------------------------------------------------------------------------------------------------------------------------------

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

    return this.buildWalletQueryString({
      endpoint,
      callbackUrl: options?.callbackUrl,
      params: jsonToSend
    });
  }

  private buildWalletQueryString(options: {
    endpoint: string;
    callbackUrl?: string;
    params?: any;
  }): string {
    const callbackUrl = options?.callbackUrl || window.location.href;
    const partialQueryString = qs.stringify(options.params || {});
    const fullQueryString = partialQueryString
      ? `${partialQueryString}&callbackUrl=${callbackUrl}`
      : `callbackUrl=${callbackUrl}`;

    return fullQueryString;
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
        this.walletWindow.close();
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

    await this.handshake();

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
    await this.handshake();

    console.log('continue sign message');
    this.walletWindow = window.open(
      this.walletUrl,
      CHILD_WEB_WALLET_WINDOW_NAME
    );
    const data = {
      account: this.account.address,
      message: message.message.toString()
    };

    this.walletWindow?.postMessage(
      { type: 'mxDappSignMessage', payload: 'sign message' },
      this.walletUrl
    );

    // const signatureHex = crossWindowResponse.signature;
    // const signature = Buffer.from(signatureHex, 'hex');

    // message.applySignature(signature);
    return message;
  }

  cancelAction() {
    // return this.startBgrMsgChannel(Operation.CancelAction, {});
  }
}
