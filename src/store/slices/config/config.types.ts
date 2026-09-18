import { WebsocketConnectionStatusEnum } from 'constants/websocket.constants';
import { WalletConnectConfig } from 'providers/strategies/WalletConnectProviderStrategy/types';
import { NativeAuthConfigType } from 'services/nativeAuth/nativeAuth.types';

export interface IProviderSettings {
  /**
   * Enables or disables the signing UI for all providers
   * @default true
   */
  isSigningUiEnabled?: boolean;
}

/**
 * Opt-in hardening flags.
 *
 * Every flag defaults to the pre-5.8 behaviour so that existing dApps are not
 * broken by an upgrade; the unsafe path logs a one-time deprecation warning.
 * The defaults flip in v6, at which point these flags are removed.
 */
export interface IFlagsConfig {
  /**
   * Ignores providers registered through the `window.multiversx.providers`
   * global, accepting only the `customProviders` passed to `initApp`, and
   * rejects custom providers that collide with a built-in provider type.
   * @default false
   */
  strictProviderRegistration?: boolean;
  /**
   * Keeps `loginInfo.tokenLogin` (loginToken, signature, nativeAuthToken) out
   * of durable storage.
   * @default true
   */
  persistTokenLogin?: boolean;
  /**
   * Awaits `provider.logout()` before clearing local state, and surfaces the
   * error instead of leaving the UI and the provider out of sync.
   * @default false
   */
  strictLogout?: boolean;
  /**
   * Applies the session expiry to every login type, not only nativeAuth ones,
   * and logs the provider out rather than only resetting local state.
   * @default false
   */
  enforceSessionExpiry?: boolean;
  /**
   * Requires network urls to be https.
   * @default false
   */
  validateNetworkUrls?: boolean;
  /**
   * Allows `walletAddress` / `iframeWalletAddress` to point at a host that is
   * not a known MultiversX wallet.
   * @default false
   */
  unsafeAllowCustomWalletHosts?: boolean;
}

export type ResolvedFlagsConfig = Required<IFlagsConfig>;

export interface ConfigSliceType {
  nativeAuthConfig: NativeAuthConfigType | null;
  walletConnectConfig: WalletConnectConfig | null;
  settings: IProviderSettings | null;
  flags: ResolvedFlagsConfig;
  websocketStatus: WebsocketConnectionStatusEnum;
}
