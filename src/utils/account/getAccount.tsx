import { getAccountFromProxyProvider } from 'providers/proxyProvider';

export function getAccount(address?: string) {
  return getAccountFromProxyProvider(address);
}

export default getAccount;
