import { EmptyProvider } from 'providers/helpers/emptyProvider';

type SessionEventTypes = any;
type PairingTypes = any;
type EngineTypes = any;
const WalletConnectMethodsEnum = {};
const WalletConnectOptionalMethodsEnum = {};
const WalletConnectV2Provider = EmptyProvider;

export type { EngineTypes, PairingTypes, SessionEventTypes };
export {
  WalletConnectMethodsEnum,
  WalletConnectOptionalMethodsEnum,
  WalletConnectV2Provider
};
