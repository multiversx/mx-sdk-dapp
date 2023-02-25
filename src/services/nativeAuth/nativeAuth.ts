import { NativeAuthConfigType } from 'types';
import {
  encodeValue,
  getLatestBlockHash,
  LatestBlockHashType
} from './helpers';
import { getNativeAuthConfig, getToken, getTokenExpiration } from './methods';

export const nativeAuth = (config?: NativeAuthConfigType) => {
  const { hostname, apiAddress, expirySeconds, blockHashShard } =
    getNativeAuthConfig(config) as NativeAuthConfigType;

  const initialize = async (
    extraInfo: any = {},
    latestBlockInfo?: LatestBlockHashType
  ): Promise<string> => {
    if (!apiAddress || !hostname) {
      return '';
    }

    const response =
      latestBlockInfo ?? (await getLatestBlockHash(apiAddress, blockHashShard));
    const { hash, timestamp } = response;
    const encodedExtraInfo = encodeValue(
      JSON.stringify({ ...extraInfo, ...(timestamp ? { timestamp } : {}) })
    );
    const host = encodeValue(hostname);

    return `${host}.${hash}.${expirySeconds}.${encodedExtraInfo}`;
  };

  return {
    getNativeAuthConfig,
    initialize,
    getToken,
    getTokenExpiration
  };
};
