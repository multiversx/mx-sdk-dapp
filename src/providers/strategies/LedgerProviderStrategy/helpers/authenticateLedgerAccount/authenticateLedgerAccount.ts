import { HWProvider } from '@multiversx/sdk-hw-provider/out';
import { LedgerConnectStateManager } from 'managers/internal/LedgerConnectStateManager/LedgerConnectStateManager';
import { getExplorerAddress } from 'methods/network/getExplorerAddress';
import { ProviderTypeEnum } from 'providers/types/providerFactory.types';
import { setLedgerAccount } from 'store/actions/account/accountActions';
import { setLedgerLogin } from 'store/actions/loginInfo/loginInfoActions';

import { getAuthTokenText } from './helpers/getAuthTokenText';
import { updateAccountsList } from './helpers/updateAccountsList';
import { waitForLedgerSelection } from './helpers/waitForLedgerSelection';
import {
  LedgerConfigType,
  LedgerLoginType
} from '../../types/ledgerProvider.types';

interface IGetLedgerLogin {
  options?: {
    callbackUrl?: string;
    token?: string;
  };
  config: LedgerConfigType;
  provider: HWProvider | null;
  login: LedgerLoginType | null;
}

export async function authenticateLedgerAccount({
  options,
  config,
  provider,
  login
}: IGetLedgerLogin) {
  const manager = LedgerConnectStateManager.getInstance();

  const explorerAddress = getExplorerAddress();

  const authData = getAuthTokenText({
    loginToken: options?.token,
    version: config.version
  });

  // refresh account list
  await updateAccountsList({ manager, provider });

  // cycle through accounts until user makes a choice
  const selectedAccount = await waitForLedgerSelection({
    manager,
    provider,
    login,
    token: options?.token,
    explorerAddress,
    authData
  });

  const { version, dataEnabled } = config;

  // login is finished, data can be persisted in the store
  setLedgerLogin({
    index: selectedAccount.addressIndex,
    loginType: ProviderTypeEnum.ledger
  });

  setLedgerAccount({
    address: selectedAccount.address,
    index: selectedAccount.addressIndex,
    version,
    hasContractDataEnabled: dataEnabled
  });

  return {
    address: selectedAccount.address,
    signature: selectedAccount.signature
  };
}
