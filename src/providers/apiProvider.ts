import { ApiProvider } from '@elrondnetwork/erdjs';
import { networkConfigSelector } from 'redux/selectors';
import { store } from 'redux/store';
import { NetworkType } from 'types';

let apiProvider: ApiProvider | null = null;

export function initializeApiProvider(networkConfig?: NetworkType) {
  const initializationNetworkConfig =
    networkConfig || networkConfigSelector(store.getState());
  apiProvider = new ApiProvider(initializationNetworkConfig.apiAddress, {
    timeout: Number(initializationNetworkConfig.apiTimeout)
  });

  return apiProvider;
}

export function getApiProvider(): ApiProvider {
  if (apiProvider == null) {
    return initializeApiProvider();
  } else {
    return apiProvider;
  }
}
