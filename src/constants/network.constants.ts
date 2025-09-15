import { EnvironmentsEnum } from 'types/enums.types';
import { NetworkType } from 'types/network.types';

export const fallbackNetworkConfigurations: Record<
  keyof typeof EnvironmentsEnum,
  NetworkType
> = {
  devnet: {
    id: 'devnet',
    chainId: 'D',
    name: 'Devnet',
    egldLabel: 'xEGLD',
    decimals: '18',
    digits: '4',
    gasPerDataByte: '1500',
    walletAddress: 'https://devnet-wallet.multiversx.com',
    iframeWalletAddress: 'https://devnet-iframe-wallet.multiversx.com',
    xAliasAddress: 'https://devnet.xalias.com',
    apiAddress: 'https://devnet-api.multiversx.com',
    explorerAddress: 'http://devnet-explorer.multiversx.com',
    apiTimeout: '4000',
    roundDuration: 6000
  },
  testnet: {
    id: 'testnet',
    chainId: 'T',
    name: 'Testnet',
    egldLabel: 'xEGLD',
    decimals: '18',
    digits: '4',
    gasPerDataByte: '1500',
    walletAddress: 'https://testnet-wallet.multiversx.com',
    iframeWalletAddress: 'https://testnet-iframe-wallet.multiversx.com',
    xAliasAddress: 'https://testnet.xalias.com',
    apiAddress: 'https://testnet-api.multiversx.com',
    explorerAddress: 'http://testnet-explorer.multiversx.com',
    apiTimeout: '4000',
    roundDuration: 6000
  },
  mainnet: {
    id: 'mainnet',
    chainId: '1',
    name: 'Mainnet',
    egldLabel: 'EGLD',
    decimals: '18',
    digits: '4',
    gasPerDataByte: '1500',
    walletAddress: 'https://wallet.multiversx.com',
    iframeWalletAddress: 'https://iframe-wallet.multiversx.com',
    xAliasAddress: 'https://xalias.com',
    apiAddress: 'https://api.multiversx.com',
    explorerAddress: 'https://explorer.multiversx.com',
    apiTimeout: '4000',
    roundDuration: 6000
  }
};

const { chainId: DEVNET_CHAIN_ID, egldLabel: DEVNET_EGLD_LABEL } =
  fallbackNetworkConfigurations[EnvironmentsEnum.devnet];
const { chainId: TESTNET_CHAIN_ID, egldLabel: TESTNET_EGLD_LABEL } =
  fallbackNetworkConfigurations[EnvironmentsEnum.testnet];
const { chainId: MAINNET_CHAIN_ID, egldLabel: MAINNET_EGLD_LABEL } =
  fallbackNetworkConfigurations[EnvironmentsEnum.mainnet];

export {
  DEVNET_CHAIN_ID,
  DEVNET_EGLD_LABEL,
  MAINNET_CHAIN_ID,
  MAINNET_EGLD_LABEL,
  TESTNET_CHAIN_ID,
  TESTNET_EGLD_LABEL
};

export const chainIdByEnvironment: Record<EnvironmentsEnum, string> = {
  [EnvironmentsEnum.devnet]: DEVNET_CHAIN_ID,
  [EnvironmentsEnum.testnet]: TESTNET_CHAIN_ID,
  [EnvironmentsEnum.mainnet]: MAINNET_CHAIN_ID
};

export const chainIdToEnvironment: Record<string, EnvironmentsEnum> = {
  [DEVNET_CHAIN_ID]: EnvironmentsEnum.devnet,
  [TESTNET_CHAIN_ID]: EnvironmentsEnum.testnet,
  [MAINNET_CHAIN_ID]: EnvironmentsEnum.mainnet
};

export const MULTIVERSX_ORIGIN = 'multiversx://';
export const TIMEOUT = 6000;
