import { NativeAuthConfigType } from 'types';
import { encodeValue } from './helpers/encodeValue';
import {
  getLatestBlockHash,
  LatestBlockHashType
} from './helpers/getLatestBlockHash';

import { getNativeAuthConfig, getToken, getTokenExpiration } from './methods';

export const nativeAuth = (config?: NativeAuthConfigType) => {
  const { origin, apiAddress, expirySeconds, blockHashShard, extraInfo: extraInfoFromConfig } =
    getNativeAuthConfig(config) as NativeAuthConfigType;

  const initialize = async (
    extraInfo?: {[key: string]: string},
    latestBlockInfo?: LatestBlockHashType
  ): Promise<string> => {
    if (!apiAddress || !origin) {
      return '';
    }

    const response =
      latestBlockInfo ?? (await getLatestBlockHash(apiAddress, blockHashShard));
    const { hash, timestamp } = response;
    const encodedExtraInfo = encodeValue(
      JSON.stringify({ ...(extraInfo ?? extraInfoFromConfig), ...(timestamp ? { timestamp } : {}) })
    );
    const encodedOrigin = encodeValue(origin);

    return `${encodedOrigin}.${hash}.${expirySeconds}.${encodedExtraInfo}`;
  };

  return {
    getNativeAuthConfig,
    initialize,
    getToken,
    getTokenExpiration
  };
};
