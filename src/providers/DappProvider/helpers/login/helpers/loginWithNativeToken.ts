import { getNetworkConfig } from 'methods/network/getNetworkConfig';
import { IProvider } from 'providers/types/providerFactory.types';
import { nativeAuth } from 'services/nativeAuth';
import { decodeNativeAuthToken } from 'services/nativeAuth/helpers/decodeNativeAuthToken';
import { NativeAuthConfigType } from 'services/nativeAuth/nativeAuth.types';
import { setTokenLogin } from 'store/actions/loginInfo/loginInfoActions';
import { accountLogin } from './accountLogin';
import { extractAddressFromToken } from './extractAddressFromToken';
import { getMultisigLoginToken } from './getMultisigLoginToken';

export async function loginWithNativeToken({
  provider,
  nativeAuthConfig,
  token
}: {
  provider: IProvider;
  nativeAuthConfig: NativeAuthConfigType;
  token?: string;
}) {
  const {
    network: { apiAddress }
  } = getNetworkConfig();

  const nativeAuthClient = nativeAuth(nativeAuthConfig);
  let loginToken = token;

  if (!loginToken) {
    loginToken = await nativeAuthClient.initialize({
      noCache: true
    });
  }

  const loginData = await provider.login({
    token: loginToken
  });

  const { address, signature, ...loginResult } = loginData;

  if (!address) {
    console.warn('Login cancelled.');
    return null;
  }

  if (!signature) {
    console.error('Failed to sign login token');
    return null;
  }

  // nativeAuthToken received from hub login
  const decodedToken = decodeNativeAuthToken(loginResult?.accessToken);

  const usedLoginToken = await getMultisigLoginToken({
    loginData,
    nativeAuthConfig,
    loginToken
  });

  const nativeAuthToken = decodedToken
    ? loginResult.accessToken
    : nativeAuthClient.getToken({
        address,
        token: usedLoginToken,
        signature
      });

  setTokenLogin({
    loginToken,
    signature,
    nativeAuthToken
  });

  const extractedAddress = await extractAddressFromToken({
    loginToken,
    extraInfoData: {
      multisig: loginResult?.multisig,
      impersonate: loginResult?.impersonate
    },
    address
  });

  await accountLogin({
    address: extractedAddress,
    provider,
    apiAddress
  });

  return {
    address: extractedAddress,
    signature
  };
}
