import { useSetLedgerProvider } from 'components/ProviderInitializer/hooks';
import { useGetAccountProvider } from 'hooks/account/useGetAccountProvider';

export const useGetLedgerProvider = () => {
  const { provider } = useGetAccountProvider();
  const { setLedgerProvider } = useSetLedgerProvider();

  return async function getLedgerProvider() {
    let isConnected: boolean;

    try {
      const address = await provider.getAddress();
      isConnected = Boolean(address);
    } catch (error) {
      isConnected = false;
    }

    if (isConnected) {
      return provider;
    }

    const ledgerProvider = await setLedgerProvider({ isRelogin: true });

    if (!ledgerProvider) {
      return provider;
    }

    return ledgerProvider;
  };
};
