import {
  ExtensionProvider,
  HWProvider,
  IDappProvider,
  WalletConnectProvider,
  WalletProvider
} from '@elrondnetwork/erdjs';
import { LoginMethodsEnum } from 'types/enums';

const getProviderType = (
  provider: IDappProvider | undefined
): LoginMethodsEnum => {
  let providerType: LoginMethodsEnum = LoginMethodsEnum.none;

  providerType =
    provider?.constructor === WalletProvider
      ? LoginMethodsEnum.wallet
      : providerType;

  providerType =
    provider?.constructor === WalletConnectProvider
      ? LoginMethodsEnum.walletconnect
      : providerType;

  providerType =
    provider?.constructor === ExtensionProvider
      ? LoginMethodsEnum.extension
      : providerType;

  providerType =
    provider?.constructor === HWProvider
      ? LoginMethodsEnum.ledger
      : providerType;

  return providerType;
};

export default getProviderType;
