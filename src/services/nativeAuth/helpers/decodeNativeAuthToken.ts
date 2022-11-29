import { decodeBase64 } from 'utils/decoders';

function isString(x: any) {
  return Object.prototype.toString.call(x) === '[object String]';
}

export const decodeNativeAuthToken = (accessToken?: string) => {
  if (!accessToken || !isString(accessToken)) {
    return null;
  }

  try {
    const [address, body, signature] = accessToken.split('.');
    const parsedAddress = decodeBase64(address);
    const parsedBody = decodeBase64(body);
    const [host, blockHash, ttl, extraInfo] = parsedBody.split('.');
    const parsedExtraInfo = JSON.parse(decodeBase64(extraInfo));
    const parsedHost = decodeBase64(host);

    const result = {
      ttl: Number(ttl),
      address: parsedAddress,
      extraInfo: parsedExtraInfo,
      host: parsedHost,
      signature,
      blockHash,
      body: parsedBody
    };

    // if empty object, delete extraInfo (e30 = encoded '{}')
    if (extraInfo === 'e30') {
      delete result.extraInfo;
    }

    return result;
  } catch (err) {
    return null;
  }
};
