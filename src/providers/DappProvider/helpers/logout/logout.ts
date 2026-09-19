import { tokenDataStorage } from 'apiCalls/tokens/tokenDataStorage';
import { subscriptions } from 'constants/storage.constants';
import { safeWindow } from 'constants/window.constants';
import { getAddress } from 'methods/account/getAddress';
import { warnInsecureDefault } from 'methods/initApp/helpers/flagsConfig';
import { getFlagsConfig } from 'methods/initApp/helpers/getFlagsConfig';
import { websocketManager } from 'methods/initApp/websocket/registerWebsocket';
import { IProvider } from 'providers/types/providerFactory.types';
import { logoutAction } from 'store/actions/sharedActions/sharedActions';
import { clearNonceReservations } from 'utils/account/nonceReservations';
import { broadcastLogoutAcrossTabs } from './broadcastLogoutAcrossTabs';

export type LogoutPropsType = {
  shouldAttemptReLogin?: boolean;
  shouldBroadcastLogoutAcrossTabs?: boolean;
  /*
   * Only used for web-wallet crossWindow login
   */
  hasConsentPopup?: boolean;
};

interface IProviderLogout {
  provider: IProvider;
  options?: LogoutPropsType;
}

const clearLocalSession = () => {
  logoutAction();
  clearNonceReservations();
  tokenDataStorage.clear();

  // Clear all active subscriptions on logout
  subscriptions.forEach((unsubscribe) => unsubscribe());
  subscriptions.clear();
  websocketManager.closeConnectionRef?.();
};

export async function logout({
  provider,
  options = {
    shouldBroadcastLogoutAcrossTabs: true
  }
}: IProviderLogout): Promise<boolean> {
  const address = getAddress();
  const { strictLogout } = getFlagsConfig();

  if (options.shouldBroadcastLogoutAcrossTabs && safeWindow.localStorage) {
    broadcastLogoutAcrossTabs(address, safeWindow.localStorage);
  }

  if (strictLogout) {
    const isLoggedOut = await provider.logout();

    if (!isLoggedOut) {
      throw new Error(
        'Provider logout did not succeed. The session is still active - retry the logout.'
      );
    }

    clearLocalSession();

    return true;
  }

  try {
    clearLocalSession();

    const isLoggedOut = await provider.logout();
    return isLoggedOut;
  } catch (err) {
    warnInsecureDefault(
      'strictLogout',
      'Local session state was cleared before `provider.logout()` failed.'
    );
    console.error('Logging out error:', err);
    return false;
  }
}
