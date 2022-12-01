import { NativeAuthConfigType } from 'types';
import { encodeValue, getLatestBlockHash } from './helpers';
import { getToken, getIsTokenExpired } from './methods';

export const defaultNativeAuthConfig = {
  hostname: typeof window !== 'undefined' ? window.location.hostname : '',
  apiAddress: 'https://api.elrond.com',
  expirySeconds: 60 * 60 * 24 // one day
};

export const nativeAuth = ({
  hostname = defaultNativeAuthConfig.hostname,
  apiAddress = defaultNativeAuthConfig.apiAddress,
  expirySeconds = defaultNativeAuthConfig.expirySeconds
}: NativeAuthConfigType) => {
  const initialize = async (extraInfo: any = {}): Promise<string> => {
    const { hash, timestamp } = await getLatestBlockHash(apiAddress);
    const encodedExtraInfo = encodeValue(
      JSON.stringify({ ...extraInfo, ...(timestamp ? { timestamp } : {}) })
    );
    const host = encodeValue(hostname);

    return `${host}.${hash}.${expirySeconds}.${encodedExtraInfo}`;
  };

  return {
    initialize,
    getToken,
    getIsTokenExpired
  };
};
