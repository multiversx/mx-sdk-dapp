import { HWProvider } from '@multiversx/sdk-hw-provider/out';
import { BigNumber } from 'bignumber.js';

import { ACCOUNTS_ENDPOINT } from 'apiCalls/endpoints';
import { LedgerConnectStateManager } from 'managers/internal/LedgerConnectStateManager/LedgerConnectStateManager';
import { getExplorerLink } from 'utils/transactions/getExplorerLink';

import { getAuthTokenText } from './getAuthTokenText';
import { updateAccountsList } from './updateAccountsList';
import { LedgerLoginType } from '../../../types/ledgerProvider.types';

interface SelectedAccount {
  address: string;
  signature: string;
  addressIndex: number;
}

interface IWaitForLedgerSelection {
  manager: LedgerConnectStateManager;
  provider: HWProvider | null;
  login: LedgerLoginType | null;
  token?: string;
  explorerAddress: string;
  authData: ReturnType<typeof getAuthTokenText>;
}

export async function waitForLedgerSelection({
  manager,
  provider,
  login,
  token,
  explorerAddress,
  authData
}: IWaitForLedgerSelection): Promise<SelectedAccount> {
  const accountsListProps = {
    manager,
    provider
  };

  const selectedAccount = await new Promise<SelectedAccount>(async function (
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
        const loginInfo = token
          ? await provider.tokenLogin({
              token: Buffer.from(`${token}{}`),
              addressIndex: payload.addressIndex
            })
          : await login({
              addressIndex: payload.addressIndex
            });

        manager.unsubscribeFromAuthEvents({
          handleCancel,
          handleAccessWallet,
          handleGoToPage
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

  return selectedAccount;
}
