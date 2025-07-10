import { WebsocketConnectionStatusEnum } from 'constants/websocket.constants';
import { WalletConnectConfig } from 'providers/strategies/WalletConnectProviderStrategy/types';
import { NativeAuthConfigType } from 'services/nativeAuth/nativeAuth.types';

export interface ConfigSliceType {
  nativeAuthConfig: NativeAuthConfigType | null;
  walletConnectConfig: WalletConnectConfig | null;
  websocketStatus: WebsocketConnectionStatusEnum;
}
