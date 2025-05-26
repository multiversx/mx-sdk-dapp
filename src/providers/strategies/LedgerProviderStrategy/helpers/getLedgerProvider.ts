import { HWProvider } from '@multiversx/sdk-hw-provider';
import { getIsLoggedIn } from 'methods/account/getIsLoggedIn';
import { getAccountProvider } from 'providers/helpers/accountProvider';
import { ledgerAccountSelector } from 'store/selectors/accountSelectors';
import { ledgerLoginSelector } from 'store/selectors/loginInfoSelectors';
import { getState } from 'store/store';
import { getLedgerConfiguration } from './getLedgerConfiguration';

export async function getLedgerProvider(props?: {
  shouldInitProvider?: boolean; // provider will be initialized if not logged in
}) {
  const isLoggedIn = getIsLoggedIn();
  const shouldInitProvider = props?.shouldInitProvider || !isLoggedIn;
  const ledgerLogin = ledgerLoginSelector(getState());
  const ledgerAccount = ledgerAccountSelector(getState());
  const provider = getAccountProvider();

  const ledgerProvider = new HWProvider();

  const initHWProvider = async () => {
    const hasAddressIndex = ledgerLogin?.index != null;

    if (provider instanceof HWProvider && provider.isInitialized()) {
      if (hasAddressIndex) {
        await provider.setAddressIndex(ledgerLogin.index);
      }

      return provider;
    }

    if (shouldInitProvider) {
      const isInitialized = await ledgerProvider.init();
      if (!isInitialized) {
        throw new Error('Failed to initialize Ledger Provider');
      }
    }

    if (hasAddressIndex) {
      await ledgerProvider.setAddressIndex(ledgerLogin.index);
    }

    return ledgerProvider;
  };

  try {
    if (!shouldInitProvider && ledgerAccount) {
      return {
        ledgerProvider,
        ledgerConfig: {
          version: ledgerAccount.version,
          dataEnabled: ledgerAccount.hasContractDataEnabled
        }
      };
    }

    const initializedLedgerProvider = await initHWProvider();
    const ledgerConfig = await getLedgerConfiguration(
      initializedLedgerProvider
    );
    return { ledgerProvider: initializedLedgerProvider, ledgerConfig };
  } catch (err) {
    console.error('Could not initialize ledger app', err);

    throw err;
  }
}
