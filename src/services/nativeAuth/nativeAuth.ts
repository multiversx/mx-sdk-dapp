import { NativeAuthConfigType } from 'types';
import { encodeValue, getLatestBlockHash } from './helpers';
import { getNativeAuthConfig, getToken, getTokenExpiration } from './methods';

export const nativeAuth = (config?: NativeAuthConfigType) => {
  const { hostname, apiAddress, expirySeconds, blockHashShard } =
    getNativeAuthConfig(config) as NativeAuthConfigType;

  const initialize = async (extraInfo: any = {}): Promise<string> => {
    if (!apiAddress || !hostname) {
      return '';
    }

    const { hash, timestamp } = await getLatestBlockHash(
      apiAddress,
      blockHashShard
    );
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
