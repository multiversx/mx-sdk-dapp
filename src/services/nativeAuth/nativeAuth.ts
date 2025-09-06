import { NativeAuthClient } from '@multiversx/sdk-native-auth-client';
import { NativeAuthConfigType } from 'types';
import {
  getLatestBlockHash,
  LatestBlockHashType
} from './helpers/getLatestBlockHash';

import { getNativeAuthConfig, getTokenExpiration } from './methods';

interface NativeAuthInitType {
  extraInfo?: { [key: string]: string };
  latestBlockInfo?: LatestBlockHashType;
  noCache?: boolean;
}

export const nativeAuth = (config?: NativeAuthConfigType) => {
  const {
    origin,
    apiAddress,
    expirySeconds,
    blockHashShard,
    extraInfo: extraInfoFromConfig,
    gatewayUrl,
    extraRequestHeaders
  } = getNativeAuthConfig(config) as NativeAuthConfigType;

  const nativeAuthClient = new NativeAuthClient({
    origin,
    apiUrl: apiAddress,
    expirySeconds,
    blockHashShard,
    gatewayUrl,
    extraRequestHeaders
  });

  const initialize = async (
    initProps?: NativeAuthInitType
  ): Promise<string> => {
    if (!apiAddress) {
      throw new Error(
        'Native auth configuration error: apiAddress is required'
      );
    }

    if (!origin) {
      throw new Error('Native auth configuration error: origin is required');
    }

    const getBlockHash = (): Promise<string> =>
      nativeAuthClient.getCurrentBlockHash();

    try {
      const response =
        initProps?.latestBlockInfo ??
        (await getLatestBlockHash(
          apiAddress,
          blockHashShard,
          getBlockHash,
          initProps?.noCache
        ));

      if (!response) {
        return '';
      }

      const { hash, timestamp } = response;
      const encodedExtraInfo = nativeAuthClient.encodeValue(
        JSON.stringify({
          ...(initProps?.extraInfo ?? extraInfoFromConfig),
          ...(timestamp ? { timestamp } : {})
        })
      );

      const encodedOrigin = nativeAuthClient.encodeValue(origin);

      return `${encodedOrigin}.${hash}.${expirySeconds}.${encodedExtraInfo}`;
    } catch (err: any) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      console.error('Native auth token creation failed:', errorMessage);
      throw new Error(`Native auth token creation failed: ${errorMessage}`);
    }
  };

  const getToken = ({
    address,
    token,
    signature
  }: {
    address: string;
    token: string;
    signature: string;
  }): string => nativeAuthClient.getToken(address, token, signature);

  return {
    getNativeAuthConfig,
    initialize,
    getToken,
    getTokenExpiration
  };
};
