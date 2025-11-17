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

export interface ConfigSliceType {
  nativeAuthConfig: NativeAuthConfigType | null;
  walletConnectConfig: WalletConnectConfig | null;
  settings: IProviderSettings | null;
  websocketStatus: WebsocketConnectionStatusEnum;
}
