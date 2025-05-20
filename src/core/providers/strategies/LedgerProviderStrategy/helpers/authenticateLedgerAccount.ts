import { HWProvider } from '@multiversx/sdk-hw-provider/out';
import { BigNumber } from 'bignumber.js';

import { ACCOUNTS_ENDPOINT } from 'apiCalls';
import { LedgerConnectStateManager } from 'core/managers/internal/LedgerConnectStateManager/LedgerConnectStateManager';
import { getExplorerAddress } from 'core/methods/network/getExplorerAddress';
import { ProviderTypeEnum } from 'core/providers/types/providerFactory.types';
import { IEventBus } from 'lib/sdkDappCoreUi';
import { setLedgerAccount } from 'store/actions';
import { setLedgerLogin } from 'store/actions/loginInfo/loginInfoActions';
import { getExplorerLink } from 'utils/transactions/getExplorerLink';

import { getAuthTokenText } from './getAuthTokenText';
import { updateAccountsList } from './updateAccountsList';
import {
  LedgerConfigType,
  LedgerLoginType
} from '../types/ledgerProvider.types';

interface IGetLedgerLogin {
  options?: {
    callbackUrl?: string;
    token?: string;
  };
  config: LedgerConfigType;
  provider: HWProvider | null;
  eventBus?: IEventBus | null;
  login: LedgerLoginType | null;
}

interface ISelectedAccount {
  address: string;
  signature: string;
  addressIndex: number;
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

  const accountsListProps = {
    manager,
    provider
  };

  // refresh account list
  await updateAccountsList(accountsListProps);

  // cycle trough accounts until user makes a choice
  const selectedAccount = await new Promise<ISelectedAccount>(async function (
    resolve,
    reject
  ) {
    async function handleGoToPage(page: number) {
      const addressesPerPage = manager ? manager.addressesPerPage ?? 1 : 1;
      const startIndex = new BigNumber(page - 1).times(addressesPerPage);

      manager?.updateStartIndex(Math.max(0, parseInt(startIndex.toString())));
      await updateAccountsList(accountsListProps);
    }

    async function handleAccessWallet(payload: {
      addressIndex: number;
      selectedAddress: string;
    }) {
      if (!provider || !login) {
        return;
      }

      manager?.updateConfirmScreen({
        ...authData,
        selectedAddress: payload.selectedAddress,
        explorerLink: getExplorerLink({
          to: `/${ACCOUNTS_ENDPOINT}/${payload.selectedAddress}`,
          explorerAddress
        })
      });

      try {
        const loginInfo = options?.token
          ? await provider.tokenLogin({
              token: Buffer.from(`${options?.token}{}`),
              addressIndex: payload.addressIndex
            })
          : await login({
              addressIndex: payload.addressIndex
            });

        resolve({
          address: loginInfo.address,
          signature: loginInfo.signature
            ? loginInfo.signature.toString('hex')
            : '',
          addressIndex: payload.addressIndex
        });
      } catch (err) {
        console.error('User rejected login:', err);

        const shouldGoBack = Boolean(manager?.getConfirmScreenData());
        if (shouldGoBack) {
          await updateAccountsList(accountsListProps);
        }
      }
    }

    async function handleCancel() {
      await updateAccountsList(accountsListProps);
      manager.unsubscribeFromAuthEvents({
        handleCancel,
        handleAccessWallet,
        handleGoToPage
      });
      reject('User cancelled login');
    }

    manager.subscribeToAuthEvents({
      handleCancel,
      handleAccessWallet,
      handleGoToPage
    });
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
