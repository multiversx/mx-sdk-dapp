import { WebsocketConnectionStatusEnum } from 'constants/websocket.constants';
import { ConfigSliceType } from 'store/slices/config/config.types';

export const config: ConfigSliceType = {
  nativeAuthConfig: {
    origin: 'https://localhost:3000',
    apiAddress: 'https://devnet-api.multiversx.com',
    expirySeconds: 86400,
    tokenExpirationToastWarningSeconds: 300
  },
  walletConnectConfig: {
    walletConnectV2ProjectId: '9b1a9564f91cb659ffe21b73d5c4e2d8',
    walletConnectDeepLink:
      'https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/',
    walletConnectV2RelayAddress: 'wss://relay.walletconnect.com'
  },
  settings: null,
  websocketStatus: WebsocketConnectionStatusEnum.PENDING
};
