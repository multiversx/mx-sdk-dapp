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

export const useSetLedgerProvider = () => {
  const logoutRoute = useSelector(logoutRouteSelector);
  const isLoggedIn = useSelector(isLoggedInSelector);
  const ledgerLogin = useSelector(ledgerLoginSelector);

  const [ledgerData, setLedgerData] =
    useState<{
      version: string;
      dataEnabled: boolean;
    }>();

  async function getInitializedHwWalletProvider() {
    const hwWalletP = await getHwWalletProvider(ledgerLogin?.index);

    if (!hwWalletP && isLoggedIn) {
      console.warn('Could not initialise ledger app');
      logout(logoutRoute);
      return null;
    }

    return hwWalletP;
  }

  async function setLedgerProvider() {
    try {
      const hwWalletP = await getInitializedHwWalletProvider();
      if (!hwWalletP) {
        return;
      }
      const ledgerConfig = await getLedgerConfiguration(hwWalletP);
      setAccountProvider(hwWalletP);
      setLedgerData(ledgerConfig);
    } catch (err) {
      console.error('Could not initialise ledger app', err);
      logout(logoutRoute);
    }
  }

  return { setLedgerProvider, ledgerData };
};
