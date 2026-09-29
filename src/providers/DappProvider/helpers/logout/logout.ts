import { tokenDataStorage } from 'apiCalls/tokens/tokenDataStorage';
import { subscriptions } from 'constants/storage.constants';
import { safeWindow } from 'constants/window.constants';
import { LogoutManager } from 'managers/LogoutManager/LogoutManager';
import { getAddress } from 'methods/account/getAddress';
import { warnInsecureDefault } from 'methods/initApp/helpers/flagsConfig';
import { getFlagsConfig } from 'methods/initApp/helpers/getFlagsConfig';
import { websocketManager } from 'methods/initApp/websocket/registerWebsocket';
import { broadcastLogoutAcrossTabs } from 'providers/DappProvider/helpers/logout/broadcastLogoutAcrossTabs';
import { emptyProvider } from 'providers/helpers/emptyProvider';
import { IProvider } from 'providers/types/providerFactory.types';
import { logoutAction } from 'store/actions/sharedActions/sharedActions';
import { clearNonceReservations } from 'utils/account/nonceReservations';

export type LogoutPropsType = {
  shouldAttemptReLogin?: boolean;
  shouldBroadcastLogoutAcrossTabs?: boolean;
  /*
   * Only used for web-wallet crossWindow login
   */
  hasConsentPopup?: boolean;
  /*
   * Clears local state before `provider.logout()`, even with `strictLogout`
   */
  clearLocalSessionFirst?: boolean;
};

interface IProviderLogout {
  provider: IProvider;
  options?: LogoutPropsType;
}

export const clearLocalSession = () => {
  logoutAction();
  LogoutManager.getInstance().stop();
  clearNonceReservations();
  tokenDataStorage.clear();

  // Clear all active subscriptions on logout
  subscriptions.forEach((unsubscribe) => unsubscribe());
  subscriptions.clear();
  websocketManager.closeConnectionRef?.();
};

const getIsProviderInitialized = (provider: IProvider) => {
  try {
    return provider.isInitialized();
  } catch {
    return false;
  }
};

export async function logout({
  provider,
  options = {
    shouldBroadcastLogoutAcrossTabs: true
  }
}: IProviderLogout): Promise<boolean> {
  const address = getAddress();
  const { strictLogout } = getFlagsConfig();

  const broadcastLogout = () => {
    if (options.shouldBroadcastLogoutAcrossTabs && safeWindow.localStorage) {
      broadcastLogoutAcrossTabs(address, safeWindow.localStorage);
    }
  };

  if (strictLogout && !options.clearLocalSessionFirst) {
    if (provider === emptyProvider) {
      broadcastLogout();
      clearLocalSession();

      return true;
    }

    let isLoggedOut = false;

    try {
      isLoggedOut = await provider.logout();
    } catch (err) {
      // a provider that never initialized holds no session to end
      if (getIsProviderInitialized(provider)) {
        throw err;
      }

      console.warn('Provider logout failed:', err);
      isLoggedOut = true;
    }

    if (!isLoggedOut) {
      throw new Error(
        'Provider logout did not succeed. The session is still active - retry the logout.'
      );
    }

    broadcastLogout();
    clearLocalSession();

    return true;
  }

  broadcastLogout();

  try {
    clearLocalSession();

    const isLoggedOut = await provider.logout();
    return isLoggedOut;
  } catch (err) {
    if (!strictLogout) {
      warnInsecureDefault(
        'strictLogout',
        'Local session state was cleared before `provider.logout()` failed.'
      );
    }
    console.error('Logging out error:', err);
    return false;
  }
}
