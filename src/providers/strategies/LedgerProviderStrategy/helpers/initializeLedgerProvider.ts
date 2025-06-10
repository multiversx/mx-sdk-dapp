import { LedgerConnectStateManager } from 'managers/internal/LedgerConnectStateManager/LedgerConnectStateManager';
import { getIsLoggedIn } from 'methods/account/getIsLoggedIn';
import { getLedgerErrorCodes } from './getLedgerErrorCodes';
import { getLedgerProvider } from './getLedgerProvider';

type InitializeLedgerProviderType = {
  manager: LedgerConnectStateManager | null;
  resolve: (value: Awaited<ReturnType<typeof getLedgerProvider>>) => void;
  reject: (reason?: string) => void;
  shouldInitProvider?: boolean;
};

const failInitializeErrorText = 'Check if the MultiversX App is open on Ledger';

export async function initializeLedgerProvider({
  manager,
  resolve,
  reject,
  shouldInitProvider
}: InitializeLedgerProviderType) {
  const shouldInitiateLogin = !getIsLoggedIn();

  // Calls itself to handle retry logic if the user needs to reconnect to the Ledger provider.
  const handleRetry = () =>
    initializeLedgerProvider({ manager, resolve, reject, shouldInitProvider });

  const handleCancel = () => reject('Device unavailable');

  try {
    manager?.updateAccountScreen({
      isLoading: true
    });

    if (manager && shouldInitiateLogin) {
      manager.subscribeToProviderInit({ handleRetry, handleCancel });
    }

    const data = await getLedgerProvider({ shouldInitProvider });

    if (manager && shouldInitiateLogin) {
      manager.unsubscribeFromProviderInit({ handleRetry, handleCancel });
    }

    resolve(data);
  } catch (err) {
    if (!shouldInitiateLogin) {
      throw err;
    }

    const { errorMessage, defaultErrorMessage } = getLedgerErrorCodes(err);
    manager?.updateConnectScreen({
      error: errorMessage ?? defaultErrorMessage ?? failInitializeErrorText
    });

    if (manager) {
      manager.subscribeToProviderInit({ handleRetry, handleCancel });
    }
  }
}
