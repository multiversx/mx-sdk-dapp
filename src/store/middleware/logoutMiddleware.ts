import { WritableDraft } from 'immer';
import { Address } from 'lib/sdkCore';
import { warnInsecureDefault } from 'methods/initApp/helpers/flagsConfig';
import { getFlagsConfig } from 'methods/initApp/helpers/getFlagsConfig';
import { ProviderTypeEnum } from 'providers/types/providerFactory.types';
import {
  addLoginExpiresAt,
  removeLoginExpiresAt
} from 'store/actions/loginInfo/loginInfoActions';
import {
  accountInfoSelector,
  isLoggedInSelector
} from 'store/selectors/accountSelectors';
import { loginExpiresAtSelector } from 'store/selectors/loginInfoSelectors';
import { initialState as initialAccountState } from 'store/slices/account/accountSlice';
import { initialState as initialCacheState } from 'store/slices/cache/cacheSlice';
import { initialState as initialLoginInfoState } from 'store/slices/loginInfo/loginInfoSlice';
import { initialState as initialToastState } from 'store/slices/toast/toastSlice';
import { initialState as initialTransactionsState } from 'store/slices/transactions/transactionsSlice';
import { getStore } from 'store/store';
import { StoreType } from 'store/store.types';

export const resetStore = (store: WritableDraft<StoreType>) => {
  store.account = initialAccountState;
  store.loginInfo = initialLoginInfoState;
  store.transactions = initialTransactionsState;
  store.toasts = initialToastState;
  store.cache = initialCacheState;
};

export function getNewLoginExpiresTimestamp() {
  return new Date().setHours(new Date().getHours() + 24);
}

export function setLoginExpiresAt(expiresAt: number | null) {
  if (expiresAt == null) {
    removeLoginExpiresAt();
    return;
  }
  addLoginExpiresAt(expiresAt);
}

const logoutExpiredProvider = () => {
  if (!getFlagsConfig().enforceSessionExpiry) {
    warnInsecureDefault(
      'enforceSessionExpiry',
      'A session expired and local state was cleared.'
    );
    return;
  }

  // Imported lazily: `accountProvider` reaches DappProvider -> LogoutManager ->
  // ToastManager -> store -> middleware, so a top-level import would close a
  // cycle back onto this module.
  import('providers/helpers/accountProvider')
    .then(({ getAccountProvider }) => {
      const provider = getAccountProvider();

      // the host app owns a webview session
      if (provider?.getType?.() === ProviderTypeEnum.webview) {
        return;
      }

      return provider?.logout({
        shouldBroadcastLogoutAcrossTabs: true,
        clearLocalSessionFirst: true
      });
    })
    .catch((error) =>
      console.error('Error logging out the expired provider:', error)
    );
};

let isExpiryCheckDeferred = false;

export const deferSessionExpiryCheck = () => {
  isExpiryCheckDeferred = true;
};

export const logoutMiddleware = (state: StoreType) => {
  const isLoggedIn = isLoggedInSelector(state);
  const loginTimestamp = loginExpiresAtSelector(state);
  const { address, publicKey } = accountInfoSelector(state);

  if (address && publicKey !== new Address(address).toHex()) {
    resetStore(state);
  }

  if (!isLoggedIn || isExpiryCheckDeferred) {
    return;
  }

  if (loginTimestamp == null) {
    setLoginExpiresAt(getNewLoginExpiresTimestamp());
    return;
  }

  const now = Date.now();
  const isExpired = loginTimestamp - now < 0;

  if (isExpired) {
    // logout
    setLoginExpiresAt(null);
    getStore().setState(resetStore, false, {
      type: 'logoutMiddleware',
      // @ts-ignore
      payload: {
        value: null
      }
    });

    logoutExpiredProvider();
  }
};

export const resumeSessionExpiryCheck = () => {
  if (!isExpiryCheckDeferred) {
    return;
  }

  isExpiryCheckDeferred = false;
  logoutMiddleware(getStore().getState());
};
