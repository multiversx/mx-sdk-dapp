import { HWProvider } from '@multiversx/sdk-hw-provider';
import { getIsLoggedIn } from 'methods/account/getIsLoggedIn';
import { getAccountProvider } from 'providers/helpers/accountProvider';
import { ledgerAccountSelector } from 'store/selectors/accountSelectors';
import { ledgerLoginSelector } from 'store/selectors/loginInfoSelectors';
import { getState } from 'store/store';
import { getLedgerConfiguration } from './helpers/getLedgerConfiguration';
import { initHwProvider } from './helpers/initHwProvider';
import { LedgerConfigType } from '../../types/ledgerProvider.types';

export async function getLedgerProvider(props?: {
  shouldInitProvider?: boolean; // provider will be initialized if not logged in
}) {
  const isLoggedIn = getIsLoggedIn();
  const shouldInitProvider = props?.shouldInitProvider || !isLoggedIn;
  const ledgerLogin = ledgerLoginSelector(getState());
  const ledgerAccount = ledgerAccountSelector(getState());
  const provider = getAccountProvider();

  const ledgerProvider = new HWProvider();

  try {
    if (!shouldInitProvider && ledgerAccount) {
      const ledgerConfig: LedgerConfigType = {
        version: ledgerAccount.version,
        dataEnabled: ledgerAccount.hasContractDataEnabled
      };
      return {
        ledgerProvider,
        ledgerConfig
      };
    }

    const initializedLedgerProvider = await initHwProvider({
      provider,
      ledgerProvider,
      ledgerLogin,
      shouldInitProvider
    });

    const ledgerConfig = await getLedgerConfiguration(
      initializedLedgerProvider
    );
    return { ledgerProvider: initializedLedgerProvider, ledgerConfig };
  } catch (err) {
    console.error('Could not initialize ledger app', err);

    throw err;
  }
}
