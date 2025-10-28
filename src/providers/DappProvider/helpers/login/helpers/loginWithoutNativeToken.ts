import { getNetworkConfig } from 'methods/network/getNetworkConfig';
import { IProvider } from 'providers/types/providerFactory.types';
import { accountLogin } from './accountLogin';

export async function loginWithoutNativeToken(provider: IProvider) {
  const {
    network: { apiAddress }
  } = getNetworkConfig();

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
