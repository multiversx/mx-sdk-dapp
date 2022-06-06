import { ProxyNetworkProvider } from '@elrondnetwork/erdjs-network-providers';
import { Address } from '@elrondnetwork/erdjs/out';
import { networkSelector } from 'redux/selectors';
import { store } from 'redux/store';
import { NetworkType } from 'types';

let proxyProvider: ProxyNetworkProvider | null = null;

export function initializeProxyProvider(networkConfig?: NetworkType) {
  const initializationNetworkConfig =
    networkConfig || networkSelector(store.getState());
  proxyProvider = new ProxyNetworkProvider(
    initializationNetworkConfig.apiAddress,
    {
      timeout: Number(initializationNetworkConfig.apiTimeout)
    }
  );
  return proxyProvider;
}

export function getProxyProvider(): ProxyNetworkProvider {
  if (proxyProvider == null) {
    return initializeProxyProvider();
  } else {
    return proxyProvider;
  }
}

export async function getAccountFromProxyProvider(address?: string) {
  try {
    const proxy = getProxyProvider();
    return await proxy.getAccount(new Address(address));
  } catch (err) {
    return null;
  }
}

export async function getNetworkConfigFromProxyProvider() {
  try {
    return await getProxyProvider().getNetworkConfig();
  } catch (err) {
    console.error('error fetching network config');
    return null;
  }
}
