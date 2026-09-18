import { decodeNativeAuthToken } from 'services/nativeAuth/helpers/decodeNativeAuthToken';
import { NativeAuthConfigType } from 'services/nativeAuth/nativeAuth.types';
import { resetStore } from 'store/middleware/logoutMiddleware';
import { addressSelector } from 'store/selectors/accountSelectors';
import { tokenLoginSelector } from 'store/selectors/loginInfoSelectors';
import { getState, getStore } from 'store/store';

export const validateRehydratedSession = ({
  nativeAuthConfig
}: {
  nativeAuthConfig: NativeAuthConfigType | null;
}): boolean => {
  if (!nativeAuthConfig) {
    return false;
  }

  let address: string | undefined;
  let nativeAuthToken: string | undefined;

  try {
    const state = getState();
    address = addressSelector(state);
    nativeAuthToken = tokenLoginSelector(state)?.nativeAuthToken;
  } catch {
    // runs during bootstrap, before the store is guaranteed to be populated
    return false;
  }

  if (!address) {
    return false;
  }

  const reason = !nativeAuthToken
    ? 'the restored session has no nativeAuth token'
    : decodeNativeAuthToken(nativeAuthToken)?.origin !== nativeAuthConfig.origin
      ? 'the restored nativeAuth token was issued for a different origin'
      : null;

  if (!reason) {
    return false;
  }

  console.warn(`[sdk-dapp] Clearing the restored session: ${reason}.`);

  getStore().setState(resetStore, false, {
    type: 'validateRehydratedSession',
    // @ts-ignore
    payload: { value: null }
  });

  return true;
};
