import {
  SessionEventTypes,
  PairingTypes,
  EngineTypes
} from '@multiversx/sdk-wallet-connect-provider';
import {
  Operation as WalletConnectMethodsEnum,
  OptionalOperation as WalletConnectOptionalMethodsEnum
} from '@multiversx/sdk-wallet-connect-provider/out/operation';
import { WalletConnectProvider } from '@multiversx/sdk-wallet-connect-provider/out/walletConnectProvider';
import { WalletConnectV2Provider } from '@multiversx/sdk-wallet-connect-provider/out/walletConnectV2Provider';

/**
 * These members are ingnored when compiling to commonJS
 */
export {
  EngineTypes,
  PairingTypes,
  SessionEventTypes,
  WalletConnectMethodsEnum,
  WalletConnectOptionalMethodsEnum,
  WalletConnectProvider,
  WalletConnectV2Provider
};
