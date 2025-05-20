import { subscriptions } from 'constants/storage.constants';
import { safeWindow } from 'constants/window.constants';
import { getAddress } from 'core/methods/account/getAddress';
import { websocketManager } from 'core/methods/initApp/websocket/registerWebsocket';
import {
  IProvider,
  ProviderTypeEnum
} from 'core/providers/types/providerFactory.types';
import { CrossWindowProvider } from 'lib/sdkWebWalletCrossWindowProvider';
import { logoutAction } from 'store/actions/sharedActions/sharedActions';

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

const broadcastLogoutAcrossTabs = (address: string, localStorage: Storage) => {
  const logoutEventKey = `sdk-dapp-core-logout-event-${address}`;
  const storedAddress = localStorage.getItem(logoutEventKey);

  if (storedAddress && address !== storedAddress) {
    return;
  }

  localStorage.setItem(logoutEventKey, address);
  localStorage.removeItem(logoutEventKey);
};

export async function logout({
  provider,
  options = {
    shouldBroadcastLogoutAcrossTabs: true,
    hasConsentPopup: false
  }
}: IProviderLogout) {
  let address = getAddress();

  if (options.shouldBroadcastLogoutAcrossTabs && safeWindow.localStorage) {
    broadcastLogoutAcrossTabs(address, safeWindow.localStorage);
  }
  try {
    logoutAction();

    if (
      options.hasConsentPopup &&
      provider.getType() === ProviderTypeEnum.crossWindow
    ) {
      (provider as unknown as CrossWindowProvider).setShouldShowConsentPopup(
        true
      );
    }

    // Clear all active subscriptions on logout
    subscriptions.forEach((unsubscribe) => unsubscribe());
    subscriptions.clear();
    websocketManager.closeConnectionRef?.();
    await provider.logout();
  } catch (err) {
    console.error('Logging out error:', err);
  }
}
