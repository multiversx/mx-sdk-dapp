import { getNetworkConfigFromApi } from 'apiCalls/configuration/getNetworkConfigFromApi';
import { getServerConfiguration } from 'apiCalls/configuration/getServerConfiguration';
import { fallbackNetworkConfigurations } from 'constants/network.constants';
import { warnInsecureDefault } from 'methods/initApp/helpers/flagsConfig';
import { getFlagsConfig } from 'methods/initApp/helpers/getFlagsConfig';
import { emptyNetwork } from 'store/slices/network/emptyNetwork';
import { EnvironmentsEnum } from 'types/enums.types';
import { NetworkType, CustomNetworkType } from 'types/network.types';
import { validateNetworkUrls } from './helpers/validateNetworkUrls';
import { initializeNetworkConfig } from './networkActions';

export type InitializeNetworkPropsType = {
  customNetworkConfig?: CustomNetworkType;
  environment?: EnvironmentsEnum;
};

const hasCustomUrl = (config: CustomNetworkType) =>
  Boolean(
    config?.apiAddress ||
      config?.walletAddress ||
      config?.iframeWalletAddress ||
      config?.explorerAddress
  );

export const initializeNetwork = async ({
  customNetworkConfig = {},
  environment
}: InitializeNetworkPropsType) => {
  const { validateNetworkUrls: shouldValidate, unsafeAllowCustomWalletHosts } =
    getFlagsConfig();

  if (shouldValidate) {
    validateNetworkUrls({
      config: customNetworkConfig,
      unsafeAllowCustomWalletHosts
    });
  } else if (hasCustomUrl(customNetworkConfig)) {
    warnInsecureDefault(
      'validateNetworkUrls',
      'A custom network config was supplied without url validation.'
    );
  }

  const fetchConfigFromServer = !customNetworkConfig?.skipFetchFromServer;
  const customNetworkApiAddress = customNetworkConfig?.apiAddress;

  const isFoundEnv =
    environment && environment in fallbackNetworkConfigurations;

  const fallbackConfig: NetworkType | Record<string, string> = isFoundEnv
    ? fallbackNetworkConfigurations[environment as EnvironmentsEnum]
    : {};

  const baseConfig = {
    ...emptyNetwork,
    ...fallbackConfig,
    ...customNetworkConfig
  };

  const localConfig: NetworkType = {
    ...baseConfig,
    apiTimeout: String(baseConfig.apiTimeout)
  };

  const fallbackApiAddress = fallbackConfig?.apiAddress;

  if (!isFoundEnv && fetchConfigFromServer) {
    const apiAddress = customNetworkApiAddress || fallbackApiAddress;
    const dappConfig = await getServerConfiguration(apiAddress);

    const networkConfig = !localConfig.roundDuration
      ? await getNetworkConfigFromApi(apiAddress)
      : null;

    if (networkConfig != null) {
      localConfig.roundDuration = networkConfig.erd_round_duration;
    }

    if (dappConfig != null) {
      const apiConfig: NetworkType = {
        ...localConfig,
        ...dappConfig,
        ...customNetworkConfig
      };

      // The server response can carry its own `walletAddress`, so the merged
      // result is validated too, not just what the consumer passed in.
      if (shouldValidate) {
        validateNetworkUrls({
          config: apiConfig,
          unsafeAllowCustomWalletHosts
        });
      }

      initializeNetworkConfig(apiConfig);
      return apiConfig;
    }
  }

  initializeNetworkConfig(localConfig);
  return localConfig;
};
