import { safeWindow } from 'constants/window.constants';
import { defineCustomElements } from 'lib/sdkDappUi';
import { LogoutManager } from 'managers/LogoutManager/LogoutManager';
import { ToastManager } from 'managers/ToastManager';
import { registerCallbacks } from 'managers/TransactionManager/helpers/sessionCallbacks';
import { restoreProvider } from 'providers/helpers/restoreProvider';
import { ProviderFactory } from 'providers/ProviderFactory';
import { ICustomProvider } from 'providers/types/providerFactory.types';
import { getDefaultNativeAuthConfig } from 'services/nativeAuth/methods/getDefaultNativeAuthConfig';
import { NativeAuthConfigType } from 'services/nativeAuth/nativeAuth.types';
import {
  setNativeAuthConfig,
  setWalletConnectConfig,
  setProviderSettings
} from 'store/actions/config/configActions';
import { initializeNetwork } from 'store/actions/network/initializeNetwork';
import { defaultStorageCallback } from 'store/storage';
import { initStore } from 'store/store';
import { ThemesEnum } from 'types/theme.types';
import { refreshAccount } from 'utils/account/refreshAccount';
import { switchTheme } from 'utils/visual/switchTheme';
import { InitAppType } from './initApp.types';
import { getIsLoggedIn } from '../account/getIsLoggedIn';
import { setGasStationMetadata } from './gasStationMetadata/setGasStationMetadata';
import { waitForStoreRehydration } from './helpers/waitForStoreRehydration';
import { getAccount } from '../account/getAccount';
import { trackTransactions } from '../trackTransactions/trackTransactions';
import { registerWebsocketListener } from './websocket/registerWebsocket';

const defaultInitAppProps = {
  storage: {
    getStorageCallback: defaultStorageCallback
  }
};

/**
 * Flag indicating whether the app has already been initialized.
 *
 * Prevents repeated initialization steps such as provider restoration,
 * websocket listener registration, and transaction tracking setup.
 * This ensures that multiple calls to `initApp` do not cause duplicated
 * subscriptions or side effects.
 *
 * @internal
 */
let isAppInitialized = false;
let isInitializing = false;

/**
 * Reset the initialization state. Used primarily for testing.
 * @internal
 */
export function resetInitAppState() {
  isAppInitialized = false;
  isInitializing = false;
}

/**
 * Initializes the dApp with the given configuration.
 * @param props - The configuration for the dApp initialization.
 *
 * @example
 * ```ts
   initApp({
      nativeAuth: true,
      environment: EnvironmentsEnum.devnet
   });
 *  ```
 * */
export async function initApp({
  storage = defaultInitAppProps.storage,
  dAppConfig,
  customProviders
}: InitAppType) {
  if (isInitializing) {
    return;
  }

  isInitializing = true;

  const defaultTheme = dAppConfig?.theme ?? ThemesEnum.dark;
  await defineCustomElements();

  switchTheme(defaultTheme);

  const { getStorageCallback } = storage;

  const store = initStore(getStorageCallback);

  await waitForStoreRehydration({
    store,
    getStorageCallback
  });

  const { apiAddress } = await initializeNetwork({
    customNetworkConfig: dAppConfig.network,
    environment: dAppConfig.environment
  });

  let nativeAuthConfig: NativeAuthConfigType | null = null;

  if (dAppConfig?.nativeAuth) {
    nativeAuthConfig =
      typeof dAppConfig.nativeAuth === 'boolean' &&
      dAppConfig.nativeAuth === true
        ? getDefaultNativeAuthConfig({ apiAddress })
        : getDefaultNativeAuthConfig(dAppConfig.nativeAuth);
  }

  setNativeAuthConfig(nativeAuthConfig);
  setWalletConnectConfig(dAppConfig?.providers?.walletConnect ?? null);
  setProviderSettings(dAppConfig?.providers?.settings ?? null);

  const isLoggedIn = getIsLoggedIn();
  const account = getAccount();
  const toastManager = ToastManager.getInstance();
  await toastManager.init({
    successfulToastLifetime:
      dAppConfig.transactionTracking?.successfulToastLifetime
  });

  const usedProviders: ICustomProvider[] = [
    ...((safeWindow as any)?.multiversx?.providers ?? []),
    ...(customProviders || [])
  ];

  const uniqueProviders = usedProviders.filter(
    (provider, index, arr) =>
      index === arr.findIndex((item) => item.type === provider.type)
  );

  ProviderFactory.customProviders = uniqueProviders || [];

  if (!isAppInitialized) {
    await restoreProvider();

    if (isLoggedIn) {
      await refreshAccount();
      await registerWebsocketListener(account.address);
      trackTransactions();
      LogoutManager.getInstance().init();
      registerCallbacks({
        onSuccess: dAppConfig.transactionTracking?.onSuccess,
        onFail: dAppConfig.transactionTracking?.onFail
      });
    }
  }

  if (account?.shard != null) {
    await setGasStationMetadata({
      shard: Number(account.shard),
      apiAddress
    });
  }

  isAppInitialized = true;
  isInitializing = false;
}
