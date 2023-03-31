import { Transaction } from '@multiversx/sdk-core/out';
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

const token =
  'ZXJkMWR5ZmE5eG16MjhtZ2NocHY1dzg5Y3l4NmxzczhxdzlrNmM1bWRsZzRsYzV2ajRwcGhreXFyamVkYW0.YUhSMGNITTZMeTlwYm5SbGNtNWhiQzEzWVd4c1pYUXViWFZzZEdsMlpYSnplQzVqYjIwLmNkYWU5ZmM0ODM0ZTg0ZWU0YTIzYzcwYmIxNjI2ODgyNTQ0MzRmNjRhNTY3YzdkNDYyZjczYzRjNjllOThhNmUuODY0MDAuZXlKMGFXMWxjM1JoYlhBaU9qRTJPREF5TnpBMk9EbDk.7c75a57a9a78aa44b57581d4582513934f2cb2bc10c102e55d823392e46040acd6b6aae92f5fd1e3005f5e870aaa2d590674f2d26f250559fc99f65485451300';

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
  ) {
    if (!this._initialized) {
      throw new Error(
        'Guardian provider not initialized, please call init first'
      );
    }

    try {
      const response = await axios.post(
        `${this.guardianServiceApiUrl}/guardian/sign-multiple-transactions`,
        { code, transactions },
        { timeout: API_TIMEOUT }
      );

      return response.data.data.transactions;
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
          timeout: API_TIMEOUT,
          headers: {
            Authorization: `Bearer ${token}`
          }
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
