import { registerWebsocketListener } from 'methods/initApp/websocket/registerWebsocket';
import { getNetworkConfig } from 'methods/network/getNetworkConfig';
import { trackTransactions } from 'methods/trackTransactions/trackTransactions';
import { IProvider } from 'providers/types/providerFactory.types';
import { nativeAuth } from 'services/nativeAuth';
import { NativeAuthConfigType } from 'services/nativeAuth/nativeAuth.types';
import { setTokenLogin } from 'store/actions/loginInfo/loginInfoActions';
import { nativeAuthConfigSelector } from 'store/selectors';
import { getState } from 'store/store';
import { accountLogin } from './helpers/accountLogin';
import { extractAddressFromToken } from './helpers/extractAddressFromToken';

async function loginWithoutNativeToken(provider: IProvider) {
  const { apiAddress } = getNetworkConfig();

  await provider.login();

  const address = await provider.getAddress();

  if (!address) {
    throw new Error('Address not found');
  }

  await accountLogin({ address, provider, apiAddress });

  return {
    address
  };
}

async function loginWithNativeToken(
  provider: IProvider,
  nativeAuthConfig: NativeAuthConfigType
) {
  const { apiAddress } = getNetworkConfig();

  const nativeAuthClient = nativeAuth(nativeAuthConfig);

  const loginToken = await nativeAuthClient.initialize({
    noCache: true
  });

  const { address, signature, ...loginResult } = await provider.login({
    token: loginToken
  });

  if (!address) {
    console.warn('Login cancelled.');
    return null;
  }

  if (!signature) {
    console.error('Failed to sign login token');
    return null;
  }

  const nativeAuthToken = nativeAuthClient.getToken({
    address,
    token: loginToken,
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

export async function login(provider: IProvider) {
  const nativeAuthConfig = nativeAuthConfigSelector(getState());

  if (nativeAuthConfig) {
    return await loginWithNativeToken(provider, nativeAuthConfig);
  }

  const { address } = await loginWithoutNativeToken(provider);

  await registerWebsocketListener(address);
  trackTransactions();

  return { address };
}
