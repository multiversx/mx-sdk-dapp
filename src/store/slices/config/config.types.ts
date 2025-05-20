import { WebsocketConnectionStatusEnum } from 'constants/websocket.constants';
import { CrossWindowConfig } from 'core/providers/strategies/CrossWindowProviderStrategy/types';
import { WalletConnectConfig } from 'core/providers/strategies/WalletConnectProviderStrategy/types';
import { NativeAuthConfigType } from 'services/nativeAuth/nativeAuth.types';

export interface ConfigSliceType {
  nativeAuthConfig: NativeAuthConfigType | null;
  walletConnectConfig: WalletConnectConfig | null;
  crossWindowConfig: CrossWindowConfig | null;
  websocketStatus: WebsocketConnectionStatusEnum;
}
