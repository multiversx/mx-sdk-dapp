import { SignableMessage } from '@multiversx/sdk-core';
import { Transaction } from '@multiversx/sdk-core';
import qs from 'qs';
import {
  ErrAccountNotConnected,
  ErrCannotSignSingleTransaction
} from './errors';

interface ICrossWindowWalletAccount {
  address: string;
  name?: string;
  signature?: string;
}

export const DAPP_WINDOW_NAME = window.location.origin;

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
    window.name = window.name = DAPP_WINDOW_NAME;
    CrossWindowProvider._instance = this;
  }

  public static getInstance(): CrossWindowProvider {
    return CrossWindowProvider._instance;
  }

  public setAddress(address: string): CrossWindowProvider {
    this.account.address = address;
    return CrossWindowProvider._instance;
  }

  public setWalletUrl(url: string): CrossWindowProvider {
    this.walletUrl = url;
    return CrossWindowProvider._instance;
  }

  async init(): Promise<boolean> {
    window.name = DAPP_WINDOW_NAME;
    this.initialized = true;
    return this.initialized;
  }

  async handshake(): Promise<boolean> {
    console.log('handshake!');
    if (!this.walletWindow) {
      console.log('open wallet');
      this.walletWindow = window.open(this.walletUrl, this.walletUrl);
    } else {
      console.log('open existing wallet');
      window.open('', this.walletUrl);
    }

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

    const payloadQueryString = this.buildWalletQueryString({
      params: {
        token: this.accessToken
      }
    });
    const isRelogin = await this.isConnected();
    console.log('send connect event');
    this.walletWindow?.postMessage(
      {
        type: 'mxDappConnect',
        payload: { queryString: payloadQueryString, isRelogin }
      },
      this.walletUrl
    );
    if (!isRelogin) {
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
    }

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
            self.walletWindow?.close();
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
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;

    return await new Promise((resolve) => {
      const walletUrl = this.walletUrl;
      window.addEventListener('message', async function eventHandler(event) {
        try {
          const { type, payload } = event.data;
          const isWalletEvent = event.origin === new URL(walletUrl).origin;

          const isRelogin = await self.isConnected();
          if (isRelogin && type === 'connect') return;

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
      // TODO: do the same for:
      // receiverUsername
      // senderUsername
    } else {
      // The web wallet expects the data field to be a string, even if it's empty (early 2023).
      plainTransaction.data = '';
    }

    return plainTransaction;
  }

  private buildTransactionsQueryString(transactions: Transaction[]): string {
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
      params: jsonToSend
    });
  }

  private buildWalletQueryString(options: { params?: any }): string {
    const callbackUrl = this.callbackUrl || window.location.href;
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

    const payloadQueryString = this.buildTransactionsQueryString(transactions);
    this.walletWindow?.postMessage(
      { type: 'mxDappSignTransactions', payload: payloadQueryString },
      this.walletUrl
    );

    const { type, payload: signedPlainTransactions }: any =
      await this.listenOnce();
    console.log('transaction resp received: ', signedPlainTransactions);

    if (type === 'cancel') {
      throw new Error('Transaction canceled.');
    }

    if (!signedPlainTransactions || !signedPlainTransactions.length) {
      throw new Error('Could not sign transactions');
    }
    console.log('prepare transactions!');
    const signedTransactions = signedPlainTransactions.map((tx: any) => {
      console.log('tx to transform: ', tx);
      const transaction = Transaction.fromPlainObject(tx);
      return transaction;
    });

    console.log('signed transactions: ', signedTransactions);

    return signedTransactions;
  }

  async signMessage(message: SignableMessage): Promise<SignableMessage> {
    this.ensureConnected();
    await this.handshake();
    console.log('continue with sign message');
    const payloadQueryString = this.buildWalletQueryString({
      params: {
        message: message.message.toString()
      }
    });
    this.walletWindow?.postMessage(
      { type: 'mxDappSignMessage', payload: payloadQueryString },
      this.walletUrl
    );
    console.log('listen for sign response');
    const {
      type,
      payload: { status, signature }
    } = await this.listenOnce();
    console.log('sign response received', type, status, signature);
    if (type !== 'signMessage') {
      console.log('error!');
      throw new Error(
        `Could not connect. received ${type} event instead of signMessage`
      );
    }
    console.log('sign response correct');

    if (status !== 'signed') {
      throw new Error('Could not sign message');
    }

    message.applySignature(Buffer.from(signature, 'hex'));

    return message;
  }

  cancelAction() {
    this.walletWindow?.postMessage(
      { type: 'mxDappCancelAction' },
      this.walletUrl
    );
  }
}
