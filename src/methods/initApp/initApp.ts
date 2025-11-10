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
import { initializeNetwork } from 'store/actions';
import {
  setNativeAuthConfig,
  setWalletConnectConfig
} from 'store/actions/config/configActions';
import { defaultStorageCallback } from 'store/storage';
import { initStore } from 'store/store';
import { ThemesEnum } from 'types';
import { refreshAccount } from 'utils';
import { switchTheme } from 'utils/visual/switchTheme';
import { InitAppType } from './initApp.types';
import { getIsLoggedIn } from '../account/getIsLoggedIn';
import { waitForStoreRehydration } from './helpers/waitForStoreRehydration';
import { registerWebsocketListener } from './websocket/registerWebsocket';
import { trackTransactions } from '../trackTransactions/trackTransactions';
import { setGasStationMetadata } from './gastStationMetadata/setGasStationMetadata';
import { getAccount } from '../account/getAccount';

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

  if (dAppConfig?.nativeAuth) {
    const nativeAuthConfig: NativeAuthConfigType =
      typeof dAppConfig.nativeAuth === 'boolean' &&
      dAppConfig.nativeAuth === true
        ? getDefaultNativeAuthConfig({ apiAddress })
        : getDefaultNativeAuthConfig(dAppConfig.nativeAuth);

    setNativeAuthConfig(nativeAuthConfig);
  }

  if (dAppConfig?.providers?.walletConnect) {
    setWalletConnectConfig(dAppConfig.providers.walletConnect);
  }

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

  if (account.shard != null) {
    await setGasStationMetadata({
      shard: Number(account.shard),
      apiAddress
    });
  }

  isAppInitialized = true;
  isInitializing = false;
}
