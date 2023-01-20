import { NativeAuthConfigType } from 'types';
import { getNativeAuthConfig } from './methods/getNativeAuthConfig';
import { encodeValue } from './helpers/encodeValue';
import { getLatestBlockHash } from './helpers/getLatestBlockHash';
import { getToken } from './methods/getToken';
import { getTokenExpiration } from './methods/getTokenExpiration';

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
    getTokenExpiration
  };
};
