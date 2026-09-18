import { fallbackWalletConnectConfigurations } from 'constants/walletConnect.constants';
import { WebsocketConnectionStatusEnum } from 'constants/websocket.constants';
import { resolveFlagsConfig } from 'methods/initApp/helpers/flagsConfig';
import { WalletConnectConfig } from 'providers/strategies/WalletConnectProviderStrategy/types';
import { NativeAuthConfigType } from 'services/nativeAuth/nativeAuth.types';
import {
  IFlagsConfig,
  IProviderSettings
} from 'store/slices/config/config.types';
import { getStore } from 'store/store';

export const setNativeAuthConfig = (config: NativeAuthConfigType | null) =>
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

export const setWalletConnectConfig = (config: WalletConnectConfig | null) =>
  getStore().setState(
    ({ config: state }) => {
      if (config) {
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
      } else {
        state.walletConnectConfig = null;
      }
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

export const setProviderSettings = (settings: IProviderSettings | null) =>
  getStore().setState(
    ({ config: state }) => {
      state.settings = settings;
    },
    false,
    {
      type: 'setProviderSettings',
      // @ts-ignore
      payload: {
        value: settings
      }
    }
  );

export const setIsSigningUiEnabled = (isEnabled: boolean) =>
  getStore().setState(
    ({ config: state }) => {
      if (!state.settings) {
        state.settings = {};
      }
      state.settings.isSigningUiEnabled = isEnabled;
    },
    false,
    {
      type: 'setIsSigningUiEnabled',
      // @ts-ignore
      payload: {
        value: isEnabled
      }
    }
  );

export const setFlagsConfig = (flags?: IFlagsConfig | null) =>
  getStore().setState(
    ({ config: state }) => {
      state.flags = resolveFlagsConfig(flags);
    },
    false,
    {
      type: 'setFlagsConfig',
      // @ts-ignore
      payload: {
        value: flags
      }
    }
  );
