import { decodeLoginToken } from 'services/nativeAuth/helpers/decodeLoginToken';
import { LatestBlockHashType } from 'services/nativeAuth/helpers/getLatestBlockHash';
import { nativeAuth } from 'services/nativeAuth/nativeAuth';

export interface GetMultiSigLoginTokenType {
  loginToken?: string;
  extraInfoData: {
    multisig?: string;
    impersonate?: string;
  };
}

export async function getModifiedLoginToken({
  loginToken,
  extraInfoData
}: GetMultiSigLoginTokenType) {
  if (loginToken == null || Object.keys(extraInfoData).length === 0) {
    return null;
  }

  const data = decodeLoginToken(String(loginToken));
  const { timestamp, ...rest } = data?.extraInfo || {};

  const isValidData = data && timestamp != null;

  if (!isValidData) {
    return null;
  }
  const latestBlockInfo: LatestBlockHashType = {
    hash: String(data?.blockHash),
    timestamp: Number(timestamp)
  };

  const tokenLogin = await nativeAuth({
    extraInfo: { ...rest, ...extraInfoData },
    expirySeconds: data?.ttl,
    origin: data?.origin
  }).initialize({
    latestBlockInfo
  });

  return tokenLogin;
}
