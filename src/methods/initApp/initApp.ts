import { safeWindow } from 'constants/window.constants';
import { ToastManager } from 'managers/internal/ToastManager/ToastManager';
import { LogoutManager } from 'managers/LogoutManager/LogoutManager';
import { registerSessionCallbacks } from 'managers/TransactionManager/helpers/sessionCallbacks';
import { restoreProvider } from 'providers/helpers/restoreProvider';
import { ProviderFactory } from 'providers/ProviderFactory';
import { ICustomProvider } from 'providers/types/providerFactory.types';
import { getDefaultNativeAuthConfig } from 'services/nativeAuth/methods/getDefaultNativeAuthConfig';
import { NativeAuthConfigType } from 'services/nativeAuth/nativeAuth.types';
import { initializeNetwork } from 'store/actions';
import {
  setCrossWindowConfig,
  setNativeAuthConfig,
  setWalletConnectConfig
} from 'store/actions/config/configActions';
import { defaultStorageCallback } from 'store/storage';
import { initStore } from 'store/store';
import { ThemesEnum } from 'types';
import { switchTheme } from 'utils/visual/switchTheme';
import { InitAppType } from './initApp.types';
import { getIsLoggedIn } from '../account/getIsLoggedIn';
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
  const defaultTheme = dAppConfig?.theme ?? ThemesEnum.dark;

  switchTheme(defaultTheme);

  initStore(storage.getStorageCallback);

  const { apiAddress } = await initializeNetwork({
    customNetworkConfig: dAppConfig.network,
    environment: dAppConfig.environment
  });

  if (dAppConfig?.nativeAuth) {
    const nativeAuthConfig: NativeAuthConfigType =
      typeof dAppConfig.nativeAuth === 'boolean' &&
      dAppConfig.nativeAuth === true
        ? getDefaultNativeAuthConfig(apiAddress)
        : dAppConfig.nativeAuth;

    setNativeAuthConfig(nativeAuthConfig);
  }

  if (dAppConfig?.providers?.walletConnect) {
    setWalletConnectConfig(dAppConfig.providers.walletConnect);
  }

  if (dAppConfig?.providers?.crossWindow) {
    setCrossWindowConfig(dAppConfig.providers.crossWindow);
  }

  const isLoggedIn = getIsLoggedIn();
  const account = getAccount();
  const toastManager = ToastManager.getInstance();
  console.log(1);
  await toastManager.init({
    successfulToastLifetime:
      dAppConfig.transactionTracking?.successfulToastLifetime
  });
  console.log(2);

  const usedProviders: ICustomProvider[] = [
    ...((safeWindow as any)?.multiversx?.providers ?? []),
    ...(customProviders || [])
  ];
  console.log(3);

  const uniqueProviders = usedProviders.filter(
    (provider, index, arr) =>
      index === arr.findIndex((item) => item.type === provider.type)
  );
  console.log(4);

  ProviderFactory.customProviders = uniqueProviders || [];
  console.log(5);

  if (!isAppInitialized) {
    await restoreProvider();
    console.log(6);

    if (isLoggedIn) {
      await registerWebsocketListener(account.address);
      trackTransactions();
      LogoutManager.getInstance().init();
      registerSessionCallbacks({
        onSuccess: dAppConfig.transactionTracking?.onSuccess,
        onFail: dAppConfig.transactionTracking?.onFail
      });
    }
  }
  console.log(7);

  if (account.shard != null) {
    await setGasStationMetadata({
      shard: Number(account.shard),
      apiAddress
    });
  }
  console.log(8);

  isAppInitialized = true;
}
