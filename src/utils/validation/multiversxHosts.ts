import { MULTIVERSX_WALLET_ORIGIN } from 'constants/mvx.constants';

const MULTIVERSX_DOMAIN = 'multiversx.com';

const isOnDomain = (host: string, domain: string) =>
  host === domain || host.endsWith(`.${domain}`);

export const isMultiversxHost = (hostname: string) =>
  isOnDomain(hostname.toLowerCase(), MULTIVERSX_DOMAIN);

// wallet.multiversx.com, <network>-wallet.multiversx.com and their subdomains
export const isMultiversxWalletHost = (hostname: string) => {
  const host = hostname.toLowerCase();

  return (
    isOnDomain(host, MULTIVERSX_WALLET_ORIGIN) ||
    host.endsWith(`-${MULTIVERSX_WALLET_ORIGIN}`)
  );
};
