import { NativeAuthClient } from '@multiversx/sdk-native-auth-client';

import {
  getLatestBlockHash,
  LatestBlockHashType
} from './helpers/getLatestBlockHash';

import { buildNativeAuthConfig } from './methods/buildNativeAuthConfig';
import { getTokenExpiration } from './methods/getTokenExpiration';
import { NativeAuthConfigType } from './nativeAuth.types';

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
  } = buildNativeAuthConfig(config);

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
    if (!apiAddress || !origin) {
      return '';
    }

    const getBlockHash = (): Promise<string> =>
      nativeAuthClient.getCurrentBlockHash();

    let latestBlockInfo = initProps?.latestBlockInfo;

    latestBlockInfo ??= await getLatestBlockHash({
      apiAddress,
      blockHashShard,
      getBlockHash,
      noCache: initProps?.noCache
    });

    const { hash, timestamp } = latestBlockInfo;
    const encodedExtraInfo = nativeAuthClient.encodeValue(
      JSON.stringify({
        ...(initProps?.extraInfo ?? extraInfoFromConfig),
        ...(timestamp ? { timestamp } : {})
      })
    );
    const encodedOrigin = nativeAuthClient.encodeValue(origin);

    return `${encodedOrigin}.${hash}.${expirySeconds}.${encodedExtraInfo}`;
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
    initialize,
    getToken,
    getTokenExpiration
  };
};
