import { ProxyNetworkProvider } from '@elrondnetwork/erdjs-network-providers';
import { INetworkProvider } from '@elrondnetwork/erdjs-network-providers/out/interface';
import { networkSelector } from 'redux/selectors';
import { store } from 'redux/store';
import { NetworkType } from 'types';

let apiProvider: INetworkProvider | null = null;

export function initializeApiProvider(networkConfig?: NetworkType) {
  const initializationNetworkConfig =
    networkConfig || networkSelector(store.getState());
  apiProvider = new ProxyNetworkProvider(
    initializationNetworkConfig.apiAddress,
    {
      timeout: Number(initializationNetworkConfig.apiTimeout)
    }
  );

  return apiProvider;
}

export function getApiProvider(): INetworkProvider {
  if (apiProvider == null) {
    return initializeApiProvider();
  } else {
    return apiProvider;
  }
}
