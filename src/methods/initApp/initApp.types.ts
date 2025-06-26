import { CrossWindowConfig } from 'providers/strategies/CrossWindowProviderStrategy/types/crossWindow.types';
import { WalletConnectConfig } from 'providers/strategies/WalletConnectProviderStrategy/types/walletConnect.types';
import { ICustomProvider } from 'providers/types/providerFactory.types';
import { NativeAuthConfigType } from 'services/nativeAuth/nativeAuth.types';
import { StorageCallback } from 'store/storage';
import { EnvironmentsEnum } from 'types/enums.types';
import { CustomNetworkType } from 'types/network.types';
import { ThemesEnum } from 'types/theme.types';

type BaseDappConfigType = {
  /**
   * The native auth configuration for the dApp.
   * If set to `true`, will fallback on default configuration.
   * If set to `false`, will disable native auth.
   * If set to `NativeAuthConfigType`, will set the native auth configuration.
   */
  nativeAuth?: boolean | NativeAuthConfigType;
  /**
   * Customize exising providers
   */
  providers?: {
    crossWindow?: CrossWindowConfig;
    walletConnect?: WalletConnectConfig;
  };
  /**
   * Customize the dApp theme.
   * @example
   * ```ts
   * import { ThemesEnum } from '@multiversx/sdk-dapp/out/types/theme.types';
   *
   *   theme: ThemesEnum.dark
   * ```
   */
  theme?: `${ThemesEnum}`;
};

export type TransactionTrackingConfigType = {
  successfulToastLifetime?: number;
  /**
   * The callback to run when the transaction session is successful.
   */
  onSuccess?: (sessionId: string) => Promise<void>;
  /**
   * The callback to run when the transaction session fails.
   */
  onFail?: (sessionId: string) => Promise<void>;
};

export type EnvironmentDappConfigType = BaseDappConfigType & {
  /**
   * If passed in, will automatically initialize the network with the given environment and skip fetching `/dapp/config` data from server.
   */
  environment: EnvironmentsEnum;
  network?: CustomNetworkType;
  transactionTracking?: TransactionTrackingConfigType;
};

export type CustomNetworkDappConfigType = BaseDappConfigType & {
  /**
   * Can override the network configuration, e.g. for sovereign shards.
   * Must include `apiAddress` if provided.
   */
  network: CustomNetworkType & { apiAddress: string };
  environment?: never;
  transactionTracking?: TransactionTrackingConfigType;
};

export type DappConfigType =
  | EnvironmentDappConfigType
  | CustomNetworkDappConfigType;

export type InitAppType = {
  /**
   * The storage configuration for the dApp.
   * @example
   * ```ts
   * {
   *   getStorageCallback: () => window.localStorage
   * }
   * ```
   */
  storage?: {
    /**
     * The callback to get the storage (custom storage).
     */
    getStorageCallback: StorageCallback;
  };
  /**
   * The dApp configuration.
   * @example
   * ```ts
   * {
      nativeAuth: true,
      environment: EnvironmentsEnum.devnet,
      theme: ThemesEnum.light,
      network: {
        walletAddress: 'https://wallet.multiversx.com'
        // ...other network properties to override
      },
      providers: {
        walletConnect: {
          walletConnectV2ProjectId
        }
      },
      transactionTracking: {
        successfulToastLifetime: DEFAULT_TOAST_LIEFTIME,
        onSuccess: async (sessionId) => {
          console.log('Transactions execution successful', sessionId);
        },
        onFail: async (sessionId) => {
          console.log('Transactions execution failed', sessionId);
        }
      }
    }
   * ```
   */
  dAppConfig: DappConfigType;
  /**
   * If you want to extend the default providers, you can pass in a list of custom providers.
   * @example
   * ```ts
   * [{
        name: 'Custom Provider',
        type: 'custom',
        iconUrl: `${window.location.origin}/multiversx-white.svg`,
        constructor: async (options) => new CustomProvider(options)
    * }]
   * ```
   */
  customProviders?: ICustomProvider[];
};
