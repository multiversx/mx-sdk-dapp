import { useState } from 'react';
import { HWProvider } from '@multiversx/sdk-hw-provider';
import { setAccountProvider } from 'providers/accountProvider';
import { useSelector } from 'reduxStore/DappProviderContext';
import {
  isLoggedInSelector,
  ledgerLoginSelector,
  logoutRouteSelector
} from 'reduxStore/selectors';
import { getLedgerConfiguration } from 'utils/account';
import { logout } from 'utils/logout';

async function getHwWalletProvider(ledgerLoginIndex?: number) {
  const hwWalletP = new HWProvider();
  let isInitialized = hwWalletP.isInitialized();
  if (!isInitialized) {
    isInitialized = await hwWalletP.init();
  }

  if (!isInitialized) {
    return null;
  }

  if (ledgerLoginIndex != null) {
    await hwWalletP.setAddressIndex(ledgerLoginIndex);
  }

  return hwWalletP;
}

type SetLedgerProviderType = {
  isRelogin?: boolean;
};

export const useSetLedgerProvider = () => {
  const logoutRoute = useSelector(logoutRouteSelector);
  const isLoggedIn = useSelector(isLoggedInSelector);
  const ledgerLogin = useSelector(ledgerLoginSelector);

  const [ledgerData, setLedgerData] =
    useState<{
      version: string;
      dataEnabled: boolean;
    }>();

  async function setLedgerProvider(props?: SetLedgerProviderType) {
    let hwWalletP: HWProvider | null = null;

    const shouldLogout = isLoggedIn && !props?.isRelogin;

    try {
      hwWalletP = await getHwWalletProvider(ledgerLogin?.index);

      if (!hwWalletP) {
        console.warn('Could not initialise ledger app');

        if (shouldLogout) {
          logout(logoutRoute);
        }
        return;
      }

      const ledgerConfig = await getLedgerConfiguration(hwWalletP);
      setAccountProvider(hwWalletP);
      setLedgerData(ledgerConfig);

      return hwWalletP;
    } catch (err) {
      console.error('Could not initialise ledger app', err);
      if (shouldLogout) {
        logout(logoutRoute);
      }
    }
    return null;
  }

  return { setLedgerProvider, ledgerData };
};
