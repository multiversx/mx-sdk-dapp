import { warnInsecureDefault } from 'methods/initApp/helpers/flagsConfig';
import { getFlagsConfig } from 'methods/initApp/helpers/getFlagsConfig';
import { decodeNativeAuthToken } from 'services/nativeAuth/helpers/decodeNativeAuthToken';
import { NativeAuthConfigType } from 'services/nativeAuth/nativeAuth.types';
import { logoutAction } from 'store/actions/sharedActions/sharedActions';
import { addressSelector } from 'store/selectors/accountSelectors';
import { tokenLoginSelector } from 'store/selectors/loginInfoSelectors';
import { getState } from 'store/store';

const getMismatchReason = ({
  nativeAuthToken,
  origin
}: {
  nativeAuthToken?: string;
  origin?: string;
}) => {
  if (!nativeAuthToken) {
    return 'the restored session has no nativeAuth token';
  }

  if (decodeNativeAuthToken(nativeAuthToken)?.origin !== origin) {
    return 'the restored nativeAuth token was issued for a different origin';
  }

  return null;
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

  const reason = getMismatchReason({
    nativeAuthToken,
    origin: nativeAuthConfig.origin
  });

  if (!reason) {
    return false;
  }

  if (getFlagsConfig().persistTokenLogin !== false) {
    warnInsecureDefault(
      'persistTokenLogin',
      `A restored session was kept as it is: ${reason}.`
    );
    return false;
  }

  console.warn(`[sdk-dapp] Clearing the restored session: ${reason}.`);
  logoutAction();

  return true;
};
