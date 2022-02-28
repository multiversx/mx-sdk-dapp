import { Address } from '@elrondnetwork/erdjs';
import { proxySelector } from 'redux/selectors';
import { store } from 'redux/store';

export function getAccount(address?: string) {
  const proxy = proxySelector(store.getState());
  return proxy.getAccount(new Address(address));
}

export default getAccount;
