import { IPlainTransactionObject } from '@multiversx/sdk-core/out';
import { SignableMessage } from '@multiversx/sdk-core/out/signableMessage';
import { Transaction } from '@multiversx/sdk-core/out/transaction';
import {
  ErrAccountNotConnected,
  ErrCannotSignSingleTransaction
} from './errors';
import { Operation } from './operation';

interface IMetamaskAccount {
  address: string;
  signature?: string;
}

export class MetamaskProvider {
  public account: IMetamaskAccount = { address: '' };
  private initialized = false;
  private static _instance: MetamaskProvider = new MetamaskProvider();

  private constructor() {
    if (MetamaskProvider._instance) {
      throw new Error(
        'Error: Instantiation failed: Use MetamaskProvider.getInstance() instead of new.'
      );
    }
    MetamaskProvider._instance = this;
  }

  public static getInstance(): MetamaskProvider {
    return MetamaskProvider._instance;
  }

  public setAddress(address: string): MetamaskProvider {
    this.account.address = address;
    return MetamaskProvider._instance;
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
        'Extension provider is not initialised, call init() first'
      );
    }
    const { token } = options;
    const data = token ? token : '';
    await this.startBgrMsgChannel(Operation.Connect, data);
    return this.account.address;
  }

  async logout(): Promise<boolean> {
    if (!this.initialized) {
      throw new Error(
        'Metamask provider is not initialised, call init() first'
      );
    }
    try {
      await this.startBgrMsgChannel(Operation.Logout, this.account.address);
      this.disconnect();
    } catch (error) {
      console.warn('Metamask origin url is already cleared!', error);
    }

    return true;
  }

  private disconnect() {
    this.account = { address: '' };
  }

  async getAddress(): Promise<string> {
    if (!this.initialized) {
      throw new Error(
        'Metamask provider is not initialised, call init() first'
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

    const metamaskResponse = await this.startBgrMsgChannel(
      Operation.SignTransactions,
      {
        from: this.account.address,
        transactions: transactions.map((transaction) =>
          transaction.toPlainObject()
        )
      }
    );

    try {
      const transactionsResponse = metamaskResponse.map(
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
    const metamaskResponse = await this.startBgrMsgChannel(
      Operation.SignMessage,
      data
    );
    const signatureHex = metamaskResponse.signature;
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
