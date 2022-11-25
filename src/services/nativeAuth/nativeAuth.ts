import { encodeValue, getLatestBlockHash } from './helpers';
import { NativeAuthType } from './nativeAuth.types';

export const defaultNativeAuthConfig = {
  hostname: typeof window !== 'undefined' ? window.location.hostname : '',
  apiAddress: 'https://api.elrond.com',
  expirySeconds: 60 * 60 * 24
};

export const nativeAuth = ({
  hostname = defaultNativeAuthConfig.hostname,
  apiAddress = defaultNativeAuthConfig.apiAddress,
  expirySeconds = defaultNativeAuthConfig.expirySeconds
}: NativeAuthType) => {
  const getToken = ({
    address,
    token,
    signature
  }: {
    address: string;
    token: string;
    signature: string;
  }): string => {
    const encodedAddress = encodeValue(address);
    const encodedToken = encodeValue(token);
    const accessToken = `${encodedAddress}.${encodedToken}.${signature}`;
    return accessToken;
  };

  const initialize = async (extraInfo: any = {}): Promise<string> => {
    const blockHash = await getLatestBlockHash(apiAddress);
    const encodedExtraInfo = encodeValue(JSON.stringify(extraInfo));
    const host = encodeValue(hostname);

    return `${host}.${blockHash}.${expirySeconds}.${encodedExtraInfo}`;
  };

  return {
    initialize,
    getToken
  };
};
