import { NativeAuthConfigType } from 'types';
import { encodeValue } from './helpers/encodeValue';
import { getLatestBlockHash } from './helpers/getLatestBlockHash';
import { getNativeAuthConfig } from './methods/getNativeAuthConfig';
import { getToken } from './methods/getToken';
import { getTokenExpiration } from './methods/getTokenExpiration';

export const nativeAuth = (config?: NativeAuthConfigType) => {
  const { hostname, apiAddress, expirySeconds, blockHashShard } =
    getNativeAuthConfig(config) as NativeAuthConfigType;
  const initialize = async (extraInfo: any = {}): Promise<string> => {
    const { hash, timestamp } = await getLatestBlockHash(
      apiAddress!,
      blockHashShard
    );
    const encodedExtraInfo = encodeValue(
      JSON.stringify({ ...extraInfo, ...(timestamp ? { timestamp } : {}) })
    );
    const host = encodeValue(hostname!);

    return `${host}.${hash}.${expirySeconds}.${encodedExtraInfo}`;
  };

  return {
    getNativeAuthConfig,
    initialize,
    getToken,
    getTokenExpiration
  };
};
