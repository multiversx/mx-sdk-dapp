import { WritableDraft } from 'immer';
import { Address } from 'lib/sdkCore';
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
import { initialState as initialLoginInfoState } from 'store/slices/loginInfo/loginInfoSlice';
import { initialState as initialToastState } from 'store/slices/toast/toastSlice';
import { initialState as initialTransactionsState } from 'store/slices/transactions/transactionsSlice';
import { getStore } from 'store/store';
import { StoreType } from '../store.types';

export const resetStore = (store: WritableDraft<StoreType>) => {
  store.account = initialAccountState;
  store.loginInfo = initialLoginInfoState;
  store.transactions = initialTransactionsState;
  store.toasts = initialToastState;
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

export const logoutMiddleware = (state: StoreType) => {
  const isLoggedIn = isLoggedInSelector(state);
  const loginTimestamp = loginExpiresAtSelector(state);
  const { address, publicKey } = accountInfoSelector(state);

  if (address && publicKey !== new Address(address).toHex()) {
    resetStore(state);
  }

  if (!isLoggedIn) {
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
  }
};
