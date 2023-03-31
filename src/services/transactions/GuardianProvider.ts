import {
  Transaction,
  TransactionVersion,
  TransactionOptions
} from '@multiversx/sdk-core/out';
import axios from 'axios';

//TODO: to be moved
const MFA_SERVICES: { [key: string]: string } = {
  ServiceID: 'https://mx-mfa-auth.elrond.ro'
};
const API_TIMEOUT = 5000;
interface IRawAccount {
  address: string;
  balance: string;
  nonce: number;
  shard: number;
  rootHash: string;
  txCount: number;
  scrCount: number;
  developerReward: string;
  serviceUID: string;
}
const GUARDED_GAS_ADDITION = 50000;

class GuardianProvider {
  private static _instance: GuardianProvider = new GuardianProvider();
  private guardianServiceApiUrl = '';
  private address = '';
  private _accountGuarded = false;
  private _guardianAddress = '';
  private _initialized = false;
  private _pendingGuardianAddress = '';

  constructor() {
    if (GuardianProvider._instance) {
      throw new Error(
        'Error: Instantiation failed: Use GuardianProvider.getInstance() instead of new.'
      );
    }
    GuardianProvider._instance = this;
  }

  public static getInstance(): GuardianProvider {
    return GuardianProvider._instance;
  }

  public async applyGuardianSignature(
    transactions: Transaction[],
    code: string
  ): Promise<Transaction[]> {
    if (!this._initialized) {
      throw new Error(
        'Guardian provider not initialized, please call init first'
      );
    }

    const txToSend = transactions.map((tx) => {
      tx.version = TransactionVersion.withTxOptions();
      //add guardians feature options - in the next release of the SDK Core
      tx.setGasLimit(tx.getGasLimit().valueOf() + GUARDED_GAS_ADDITION);
      return tx.toPlainObject();
    });

    try {
      const response = await axios.post(
        `${this.guardianServiceApiUrl}/guardian/sign-multiple-transactions`,
        { code, transactions: txToSend },
        { timeout: API_TIMEOUT }
      );

      return response.data.data.transactions.map((tx: any) => {
        return Transaction.fromPlainObject(tx);
      });
    } catch (error) {
      throw error;
    }
  }

  public async init(address: string, apiAddress: string) {
    this.address = address;

    try {
      const { serviceUID } = await axios.get<IRawAccount, IRawAccount>(
        `${apiAddress}/accounts/${this.address}`,
        {
          timeout: API_TIMEOUT
        }
      );

      //TODO: remove this when the serviceUID is returned from the API
      this.guardianServiceApiUrl =
        MFA_SERVICES[serviceUID] ?? MFA_SERVICES.ServiceID;

      const {
        data: {
          data: { guardianData }
        }
      } = await axios.get(
        `${apiAddress}/address/${this.address}/guardian-data`,
        {
          timeout: API_TIMEOUT
        }
      );

      this._accountGuarded = guardianData.guarded ?? false;
      this._guardianAddress = guardianData.activeGuardian?.address ?? '';
      this._pendingGuardianAddress =
        guardianData.pendingGuardian?.address ?? '';

      this._initialized = true;
      return this._initialized;
    } catch (error) {
      throw error;
    }
  }

  public get initialized(): boolean {
    return this._initialized;
  }

  public get accountGuarded(): boolean {
    return this._accountGuarded;
  }

  public get guardianAddress(): string {
    return this._guardianAddress;
  }

  public get pendingGuardianAddress(): string {
    return this._pendingGuardianAddress;
  }
}

export default GuardianProvider;
