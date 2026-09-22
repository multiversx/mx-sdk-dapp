import { warnInsecureDefault } from 'methods/initApp/helpers/flagsConfig';
import { getFlagsConfig } from 'methods/initApp/helpers/getFlagsConfig';
import { decodeNativeAuthToken } from 'services/nativeAuth/helpers/decodeNativeAuthToken';
import { NativeAuthConfigType } from 'services/nativeAuth/nativeAuth.types';
import { logoutAction } from 'store/actions/sharedActions/sharedActions';
import { addressSelector } from 'store/selectors/accountSelectors';
import { tokenLoginSelector } from 'store/selectors/loginInfoSelectors';
import { getState } from 'store/store';

const clearSession = (reason: string) => {
  console.warn(`[sdk-dapp] Clearing the restored session: ${reason}.`);

  logoutAction();

  return true;
};

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

  if (!nativeAuthToken) {
    if (getFlagsConfig().persistTokenLogin !== false) {
      warnInsecureDefault(
        'persistTokenLogin',
        'A restored session has no nativeAuth token, so it cannot be checked ' +
          'against this origin. It is kept as it is.'
      );
      return false;
    }

    return clearSession('the restored session has no nativeAuth token');
  }

  if (
    decodeNativeAuthToken(nativeAuthToken)?.origin !== nativeAuthConfig.origin
  ) {
    return clearSession(
      'the restored nativeAuth token was issued for a different origin'
    );
  }

  return false;
};
