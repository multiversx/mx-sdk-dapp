import { providerLabels } from 'constants/providerFactory.constants';
import { Message, Transaction } from 'lib/sdkCore';
import { IDAppProviderAccount } from 'lib/sdkDappUtils';
import { CrossWindowProvider } from 'lib/sdkWebWalletCrossWindowProvider';
import {
  ProviderTypeEnum,
  ProviderType
} from 'providers/types/providerFactory.types';
import { networkSelector } from 'store/selectors/networkSelectors';
import { getState } from 'store/store';
import { ProviderErrorsEnum } from 'types/provider.types';
import { BaseProviderStrategy } from '../BaseProviderStrategy/BaseProviderStrategy';
import { signMessage } from '../helpers/signMessage/signMessage';
import { guardTransactions } from '../helpers/signTransactions/helpers/guardTransactions/guardTransactions';

type CrossWindowProviderProps = {
  address?: string;
  walletAddress?: string;
};

export class CrossWindowProviderStrategy extends BaseProviderStrategy {
  private readonly provider: CrossWindowProvider;
  private readonly walletAddress?: string;

  constructor(config?: CrossWindowProviderProps) {
    super(config?.address);
    this.walletAddress = config?.walletAddress;
    this.provider = CrossWindowProvider.getInstance();
    this._login = this.provider.login.bind(this.provider);
  }

  async init(): Promise<boolean> {
    this.initializeAddress();
    return this.initializeProvider();
  }

  private async initializeProvider() {
    const network = networkSelector(getState());

    const isProviderInitialized = await this.provider.init();

    this.provider.setWalletUrl(this.walletAddress ?? network.walletAddress);

    if (this.address) {
      this.provider.setAddress(this.address);
    }

    return isProviderInitialized;
  }

  logout(): Promise<boolean> {
    return this.provider.logout();
  }

  getType(): ProviderType {
    return ProviderTypeEnum.crossWindow;
  }

  getAddress(): Promise<string | undefined> {
    if (!this.provider) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    return this.provider.getAddress();
  }

  setAccount(account: IDAppProviderAccount): void {
    return this.provider.setAccount(account);
  }

  isInitialized(): boolean {
    return this.provider.isInitialized();
  }

  cancelAction = async () => {
    this.provider.cancelAction();
  };

  signTransactions = async (transactions: Transaction[]) => {
    if (!this.provider) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    const { onClose, manager } = await this.initSignState();

    try {
      const signedTransactions: Transaction[] =
        (await this.provider.signTransactions(transactions)) ?? [];

      const optionallyGuardedTransactions =
        await guardTransactions(signedTransactions);

      return optionallyGuardedTransactions;
    } catch (error) {
      await onClose({ shouldCancelAction: true });

      throw error;
    } finally {
      manager.closeUI();
    }
  };

  signMessage = async (message: Message) => {
    if (!this.provider) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    const signedMessage = await signMessage({
      message,
      handleSignMessage: this.provider.signMessage.bind(this.provider),
      cancelAction: this.cancelAction,
      providerType: providerLabels.crossWindow
    });

    return signedMessage;
  };
}
