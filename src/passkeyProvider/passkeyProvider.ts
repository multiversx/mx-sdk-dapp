import { Address } from '@multiversx/sdk-core/out';
import { SignableMessage } from '@multiversx/sdk-core/out/signableMessage';
import { Transaction } from '@multiversx/sdk-core/out/transaction';
import { UserSecretKey, UserSigner } from '@multiversx/sdk-wallet/out';
import {
  AuthenticatorNotSupported,
  ErrCannotSignSingleTransaction
} from './errors';
import { client } from './lib/webauthn-prf';

interface IPasskeyAccount {
  address: string;
  name?: string;
  signature?: string;
}

interface SignMessageParams {
  message: string;
  address?: string;
  privateKey: string;
}

export class PasskeyProvider {
  public account: IPasskeyAccount = { address: '' };
  private initialized = false;
  private static _instance: PasskeyProvider = new PasskeyProvider();
  private keyPair: { privateKey: string; publicKey: string } | undefined =
    undefined;

  private constructor() {
    if (PasskeyProvider._instance) {
      throw new Error(
        'Error: Instantiation failed: Use PasskeyProvider.getInstance() instead of new.'
      );
    }
    PasskeyProvider._instance = this;
  }

  public static getInstance(): PasskeyProvider {
    return PasskeyProvider._instance;
  }

  public setAddress(address: string): PasskeyProvider {
    this.account.address = address;
    return PasskeyProvider._instance;
  }

  async init(): Promise<boolean> {
    this.initialized = true;
    return this.initialized;
  }

  async login(
    options: {
      walletName?: string;
      callbackUrl?: string;
      token?: string;
    } = {}
  ): Promise<{ address: string; signature?: string }> {
    if (!this.initialized) {
      throw new Error('Passkey provider is not initialised, call init() first');
    }
    const { token } = options;
    await this.ensureConnected();
    if (!this.keyPair?.privateKey && !this.keyPair?.publicKey) {
      throw new Error('Could not retrieve key pair.');
    }
    this.account.address = this.keyPair.publicKey;

    if (token) {
      const signedToken = await this.signMessageWithPrivateKey({
        address: this.account.address,
        message: token,
        privateKey: this.keyPair.privateKey
      });

      this.account.signature = signedToken.getSignature().toString('hex');
    }

    if (!this.keyPair.publicKey) {
      throw new Error('Login cancelled');
    }

    this.destroyKeyPair();

    return { address: this.account.address, signature: this.account.signature };
  }

  private destroyKeyPair() {
    this.keyPair = undefined;
  }

  private async signMessageWithPrivateKey({
    message,
    address,
    privateKey
  }: SignMessageParams): Promise<SignableMessage> {
    const signer = new UserSigner(UserSecretKey.fromString(privateKey));

    const messageToSign = new SignableMessage({
      ...(address ? { address: new Address(address) } : {}),
      message: Buffer.from(message)
    });
    const serializedMessage = messageToSign.serializeForSigning();
    const signature = await signer.sign(serializedMessage);
    messageToSign.applySignature(signature);

    return messageToSign;
  }

  public setUserKeyPair(inputKeyMaterial: Uint8Array) {
    const privateKey = new UserSecretKey(inputKeyMaterial);
    const publicKey = privateKey.generatePublicKey().toAddress().bech32();
    if (this.account.address && publicKey !== this.account.address) {
      throw new Error(
        `Wrong address. Please use the passkey for ${this.account.address}`
      );
    }
    this.keyPair = {
      privateKey: privateKey.hex(),
      publicKey
    };
  }

  public async createAccount(walletName: string, token: string) {
    const challengeFromServer = window.crypto.randomUUID();
    const { extensionResults } = await client.register(
      walletName,
      challengeFromServer,
      {
        authenticatorType: 'extern'
      }
    );
    this.setUserKeyPair(extensionResults);

    return this.login({ walletName, token });
  }

  public async isExistingUser(email: string) {
    return Boolean(window.localStorage.getItem(email));
  }

  async logout(): Promise<boolean> {
    if (!this.initialized) {
      throw new Error('Passkey provider is not initialised, call init() first');
    }
    try {
      this.disconnect();
    } catch (error) {
      console.warn('Passkey origin url is already cleared!', error);
    }

    return true;
  }

  private disconnect() {
    this.account = { address: '' };
  }

  async getAddress(): Promise<string> {
    if (!this.initialized) {
      throw new Error('Passkey provider is not initialised, call init() first');
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
    await this.ensureConnected();

    const signedTransactions = await this.signTransactions([transaction]);

    if (signedTransactions.length != 1) {
      throw new ErrCannotSignSingleTransaction();
    }
    this.destroyKeyPair();
    return signedTransactions[0];
  }

  private async ensureConnected() {
    if (this.keyPair?.privateKey || this.keyPair?.publicKey) {
      return;
    }

    const challengeFromServer = window.crypto.randomUUID();
    let inputKeyMaterial: Uint8Array;
    try {
      const { extensionResults } = await client.authenticate(
        [],
        challengeFromServer,
        { userVerification: 'required', authenticatorType: 'extern' }
      );
      inputKeyMaterial = extensionResults;
    } catch (error) {
      throw new AuthenticatorNotSupported();
    }
    this.setUserKeyPair(inputKeyMaterial);
  }

  async signTransactions(transactions: Transaction[]): Promise<Transaction[]> {
    await this.ensureConnected();

    try {
      const signer = new UserSigner(
        UserSecretKey.fromString(this.keyPair!.privateKey)
      );

      for (const transaction of transactions) {
        const signature = await signer.sign(transaction.serializeForSigning());
        transaction.applySignature(signature);
      }
      this.destroyKeyPair();
      return transactions;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      this.destroyKeyPair();
      throw new Error(`Transaction canceled: ${error.message}.`);
    }
  }

  async signMessage(message: SignableMessage): Promise<SignableMessage> {
    await this.ensureConnected();
    const signedMessage = await this.signMessageWithPrivateKey({
      message: message.message.toString(),
      address: this.account.address,
      privateKey: this.keyPair!.privateKey
    });
    const signature = signedMessage.getSignature();

    message.applySignature(signature);

    this.destroyKeyPair();
    return message;
  }

  cancelAction() {
    return true;
  }
}
