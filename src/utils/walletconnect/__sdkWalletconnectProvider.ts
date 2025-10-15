import {
  SessionEventTypes,
  PairingTypes,
  EngineTypes
} from '@multiversx/sdk-wallet-connect-provider';
import {
  Operation as WalletConnectMethodsEnum,
  OptionalOperation as WalletConnectOptionalMethodsEnum
} from '@multiversx/sdk-wallet-connect-provider/out/operation';
import { WalletConnectV2Provider } from '@multiversx/sdk-wallet-connect-provider/out/walletConnectV2Provider';

/**
 * These members are ignored when compiling to commonJS
 */
export type { EngineTypes, PairingTypes, SessionEventTypes };
export {
  WalletConnectMethodsEnum,
  WalletConnectOptionalMethodsEnum,
  WalletConnectV2Provider
};
