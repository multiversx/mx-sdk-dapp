import {
  ExtensionProvider,
  HWProvider,
  IDappProvider,
  WalletConnectProvider,
  WalletProvider
} from '@elrondnetwork/erdjs';
import { loginMethodsEnum } from 'types/enums';

const getProviderType = (
  provider: IDappProvider | undefined
): loginMethodsEnum => {
  let providerType: loginMethodsEnum = loginMethodsEnum.none;

  providerType =
    provider?.constructor === WalletProvider
      ? loginMethodsEnum.wallet
      : providerType;

  providerType =
    provider?.constructor === WalletConnectProvider
      ? loginMethodsEnum.walletconnect
      : providerType;

  providerType =
    provider?.constructor === ExtensionProvider
      ? loginMethodsEnum.extension
      : providerType;

  providerType =
    provider?.constructor === HWProvider
      ? loginMethodsEnum.ledger
      : providerType;

  return providerType;
};

export default getProviderType;
