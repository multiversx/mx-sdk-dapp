import { NetworkType } from 'types';

export const DEFAULT_MIN_GAS_LIMIT = 50_000;

export const configEndpoint = 'https://api.elrond.com/dapp/config';

export const fallbackConfigurations: Record<string, NetworkType> = {
  devnet: {
    id: 'devnet',
    name: 'Devnet',
    EGLDLabel: 'xEGLD',
    EGLDdenomination: '18',
    decimals: '4',
    gasPerDataByte: '1500',
    walletConnectDeepLink:
      'https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://maiar.com/',
    walletConnectBridgeAddresses: 'https://bridge.walletconnect.org',
    walletAddress: 'https://devnet-wallet.elrond.com',
    apiAddress: 'https://devnet-api.elrond.com',
    explorerAddress: 'http://devnet-explorer.elrond.com',
    apiTimeout: 4000
  },
  testnet: {
    id: 'testnet',
    name: 'Testnet',
    EGLDLabel: 'xEGLD',
    EGLDdenomination: '18',
    decimals: '4',
    gasPerDataByte: '1500',
    walletConnectDeepLink:
      'https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://maiar.com/',
    walletConnectBridgeAddresses: 'https://bridge.walletconnect.org',
    walletAddress: 'https://testnet-wallet.elrond.com',
    apiAddress: 'https://testnet-api.elrond.com',
    explorerAddress: 'http://testnet-explorer.elrond.com',
    apiTimeout: 4000
  },
  mainnet: {
    id: 'mainnet',
    name: 'Mainnet',
    EGLDLabel: 'xEGLD',
    EGLDdenomination: '18',
    decimals: '4',
    gasPerDataByte: '1500',
    walletConnectDeepLink:
      'https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://maiar.com/',
    walletConnectBridgeAddresses: 'https://bridge.walletconnect.org',
    walletAddress: 'https://wallet.elrond.com',
    apiAddress: 'https://api.elrond.com',
    explorerAddress: 'https://explorer.elrond.com',
    apiTimeout: 4000
  }
};
