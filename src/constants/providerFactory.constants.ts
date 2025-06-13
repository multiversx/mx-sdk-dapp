import {
  ProviderTypeEnum,
  ProviderType
} from 'providers/types/providerFactory.types';

export const providerLabels: Record<ProviderType, string> = {
  [ProviderTypeEnum.crossWindow]: 'MultiversX Web Wallet',
  [ProviderTypeEnum.extension]: 'MultiversX Wallet Extension',
  [ProviderTypeEnum.walletConnect]: 'xPortal App',
  [ProviderTypeEnum.ledger]: 'Ledger',
  [ProviderTypeEnum.metamask]: 'MetaMask Snap',
  [ProviderTypeEnum.passkey]: 'Passkey',
  [ProviderTypeEnum.webview]: 'Webview',
  [ProviderTypeEnum.none]: ''
};
