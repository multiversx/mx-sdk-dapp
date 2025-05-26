import { WebsocketConnectionStatusEnum } from 'constants/websocket.constants';
import { CrossWindowConfig } from 'providers/strategies/CrossWindowProviderStrategy/types';
import { WalletConnectConfig } from 'providers/strategies/WalletConnectProviderStrategy/types';
import { NativeAuthConfigType } from 'services/nativeAuth/nativeAuth.types';

export interface ConfigSliceType {
  nativeAuthConfig: NativeAuthConfigType | null;
  walletConnectConfig: WalletConnectConfig | null;
  crossWindowConfig: CrossWindowConfig | null;
  websocketStatus: WebsocketConnectionStatusEnum;
}
