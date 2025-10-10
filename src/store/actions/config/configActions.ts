import { fallbackWalletConnectConfigurations } from 'constants/walletConnect.constants';
import { WebsocketConnectionStatusEnum } from 'constants/websocket.constants';
import { WalletConnectConfig } from 'providers/strategies/WalletConnectProviderStrategy/types';
import { NativeAuthConfigType } from 'services/nativeAuth/nativeAuth.types';
import { getStore } from 'store/store';

export const setNativeAuthConfig = (config: NativeAuthConfigType) =>
  getStore().setState(
    ({ config: state }) => {
      state.nativeAuthConfig = config;
    },
    false,
    {
      type: 'setNativeAuthConfig',
      // @ts-ignore
      payload: {
        value: config
      }
    }
  );

export const setWebsocketStatus = (status: WebsocketConnectionStatusEnum) =>
  getStore().setState(
    ({ config: state }) => {
      state.websocketStatus = status;
    },
    false,
    {
      type: 'setWebsocketStatus',
      // @ts-ignore
      payload: {
        value: status
      }
    }
  );

export const setWalletConnectConfig = (config: WalletConnectConfig) =>
  getStore().setState(
    ({ config: state }) => {
      const walletConnectV2RelayAddress =
        config.walletConnectV2RelayAddress ||
        fallbackWalletConnectConfigurations.walletConnectV2RelayAddress;
      const walletConnectDeepLink =
        config.walletConnectDeepLink ||
        fallbackWalletConnectConfigurations.walletConnectDeepLink;

      state.walletConnectConfig = {
        ...config,
        walletConnectDeepLink,
        walletConnectV2RelayAddress
      };
    },
    false,
    {
      type: 'setWalletConnectConfig',
      // @ts-ignore
      payload: {
        value: config
      }
    }
  );
