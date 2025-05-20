import { decodeBase64 } from 'utils/decoders/base64Utils';
import { DecodedLoginTokenType, decodeLoginToken } from './decodeLoginToken';

function isString(x: any) {
  return Object.prototype.toString.call(x) === '[object String]';
}

interface DecodedNativeAuthTokenType extends DecodedLoginTokenType {
  address: string;
  body: string;
  signature: string;
}

export const decodeNativeAuthToken = (
  accessToken?: string
): DecodedNativeAuthTokenType | null => {
  if (!accessToken || !isString(accessToken)) {
    return null;
  }

  const parts = accessToken.split('.');

  if (parts.length !== 3) {
    console.error(
      'Invalid nativeAuthToken. You may be trying to decode a loginToken. Try using decodeLoginToken method instead'
    );
    return null;
  }

  try {
    const [address, body, signature] = parts;
    const parsedAddress = decodeBase64(address);
    const parsedBody = decodeBase64(body);
    const parsedInitToken = decodeLoginToken(parsedBody);

    if (!parsedInitToken) {
      return {
        address: parsedAddress,
        body: parsedBody,
        signature,
        blockHash: '',
        origin: '',
        ttl: 0
      };
    }

    const result = {
      ...parsedInitToken,
      address: parsedAddress,
      body: parsedBody,
      signature
    };

    // if empty object, delete extraInfo
    if (!parsedInitToken.extraInfo?.timestamp) {
      delete result.extraInfo;
    }

    return result;
  } catch (_err) {
    return null;
  }
};
