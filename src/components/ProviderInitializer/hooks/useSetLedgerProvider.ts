import { useState } from 'react';
import { HWProvider } from '@multiversx/sdk-hw-provider';
import {
  setAccountProvider,
  getAccountProvider
} from 'providers/accountProvider';
import { useSelector } from 'reduxStore/DappProviderContext';
import {
  isLoggedInSelector,
  ledgerLoginSelector,
  logoutRouteSelector
} from 'reduxStore/selectors';
import { getLedgerConfiguration } from 'utils/account';
import { logout } from 'utils/logout';

type SetLedgerProviderType = {
  isRelogin?: boolean;
};

export const useSetLedgerProvider = () => {
  const logoutRoute = useSelector(logoutRouteSelector);
  const isLoggedIn = useSelector(isLoggedInSelector);
  const ledgerLogin = useSelector(ledgerLoginSelector);
  const provider = getAccountProvider();

  const [ledgerData, setLedgerData] =
    useState<{
      version: string;
      dataEnabled: boolean;
    }>();

  const initHWProvider = async () => {
    const hasAddressIndex = ledgerLogin?.index != null;

    try {
      if (provider instanceof HWProvider && provider.isInitialized()) {
        if (hasAddressIndex) {
          await provider.setAddressIndex(ledgerLogin.index);
        }

        return provider;
      }

      const hwWalletP = new HWProvider();
      const isInitialized = await hwWalletP.init();

      if (!isInitialized) {
        return null;
      }

      if (hasAddressIndex) {
        await hwWalletP.setAddressIndex(ledgerLogin.index);
      }

      return hwWalletP;
    } catch (e) {
      console.error('Failed to initialise Ledger Provider');

      return null;
    }
  };

  async function setLedgerProvider(props?: SetLedgerProviderType) {
    let hwWalletP: HWProvider | null;

    const shouldLogout = isLoggedIn && !props?.isRelogin;

    try {
      hwWalletP = await initHWProvider();

      if (!hwWalletP) {
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
