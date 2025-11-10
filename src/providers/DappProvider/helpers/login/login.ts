import { registerWebsocketListener } from 'methods/initApp/helpers/registerWebsocket';
import { trackTransactions } from 'methods/trackTransactions/trackTransactions';
import { IProvider } from 'providers/types/providerFactory.types';
import { nativeAuthConfigSelector } from 'store/selectors';
import { getState } from 'store/store';
import { loginWithNativeToken } from './helpers/loginWithNativeToken';
import { loginWithoutNativeToken } from './helpers/loginWithoutNativeToken';

export async function login(
  provider: IProvider,
  options?: { token?: string }
): Promise<{
  address: string;
  signature: string;
} | null> {
  const nativeAuthConfig = nativeAuthConfigSelector(getState());

  if (nativeAuthConfig) {
    const data = await loginWithNativeToken({
      provider,
      nativeAuthConfig,
      token: options?.token
    });
    return data;
  }

  const { address } = await loginWithoutNativeToken(provider);

  await registerWebsocketListener(address);
  trackTransactions();

  return { address, signature: '' };
}
