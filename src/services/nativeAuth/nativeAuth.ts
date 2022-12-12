import { NativeAuthConfigType } from 'types';
import { encodeValue, getLatestBlockHash } from './helpers';
import { getToken, getIsTokenExpired, getNativeAuthConfig } from './methods';

export const nativeAuth = (config?: NativeAuthConfigType) => {
  const { hostname, apiAddress, expirySeconds } = getNativeAuthConfig(config);

  const initialize = async (extraInfo: any = {}): Promise<string> => {
    const { hash, timestamp } = await getLatestBlockHash(apiAddress);
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
    getIsTokenExpired
  };
};
