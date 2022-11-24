import { encodeValue, getLatestBlockHash } from './helpers';

export interface NativeAuthType {
  hostname?: string;
  apiUrl: string;
  expirySeconds?: number;
}

export const nativeAuth = ({
  hostname = typeof window !== 'undefined' ? window.location.hostname : '',
  apiUrl = 'https://api.elrond.com',
  expirySeconds = 60 * 60 * 24
}: NativeAuthType) => {
  const getToken = (
    address: string,
    token: string,
    signature: string
  ): string => {
    const encodedAddress = encodeValue(address);
    const encodedToken = encodeValue(token);

    const accessToken = `${encodedAddress}.${encodedToken}.${signature}`;
    return accessToken;
  };

  const initialize = async (extraInfo: any = {}): Promise<string> => {
    const blockHash = await getLatestBlockHash(apiUrl);
    const encodedExtraInfo = encodeValue(JSON.stringify(extraInfo));
    const host = encodeValue(hostname);

    return `${host}.${blockHash}.${expirySeconds}.${encodedExtraInfo}`;
  };

  return {
    initialize,
    getToken
  };
};
