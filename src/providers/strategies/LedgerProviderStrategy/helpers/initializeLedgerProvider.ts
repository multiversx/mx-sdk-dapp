import { LedgerConnectStateManager } from 'managers/internal/LedgerConnectStateManager/LedgerConnectStateManager';
import { getIsLoggedIn } from 'methods/account/getIsLoggedIn';
import { getLedgerErrorCodes } from './getLedgerErrorCodes';
import { getLedgerProvider } from './getLedgerProvider/getLedgerProvider';

type InitializeLedgerProviderType = {
  manager: LedgerConnectStateManager | null;
  resolve: (value: Awaited<ReturnType<typeof getLedgerProvider>>) => void;
  reject: (reason?: unknown) => void;
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

  const handlers = {
    handleRetry: () => {
      attempt();
    },
    handleCancel: () => {
      unsubscribe();
      reject('Device unavailable');
    }
  };

  function subscribe() {
    manager?.unsubscribeFromProviderInit(handlers);
    manager?.subscribeToProviderInit(handlers);
  }

  function unsubscribe() {
    manager?.unsubscribeFromProviderInit(handlers);
  }

  async function attempt() {
    try {
      manager?.updateAccountScreen({
        isLoading: true
      });

      if (shouldInitiateLogin) {
        subscribe();
      }

      const data = await getLedgerProvider({ shouldInitProvider });

      unsubscribe();
      resolve(data);
    } catch (err) {
      if (!shouldInitiateLogin) {
        unsubscribe();
        reject(err);
        return;
      }

      const { errorMessage, defaultErrorMessage } = getLedgerErrorCodes(err);
      manager?.updateConnectScreen({
        error: errorMessage ?? defaultErrorMessage ?? failInitializeErrorText
      });

      subscribe();
    }
  }

  await attempt();
}
