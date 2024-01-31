import { decodeLoginToken } from 'services/nativeAuth/helpers/decodeLoginToken';
import { LatestBlockHashType } from 'services/nativeAuth/helpers/getLatestBlockHash';
import { nativeAuth } from 'services/nativeAuth/nativeAuth';

export interface GetMultiSigLoginTokenType {
  loginToken?: string;
  multisig?: string;
}

export const getMultiSigLoginToken = async ({
  loginToken,
  multisig
}: GetMultiSigLoginTokenType) => {
  if (loginToken == null || multisig == null) {
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
    extraInfo: { ...rest, multisig },
    expirySeconds: data?.ttl,
    origin: data?.origin
  }).initialize({
    latestBlockInfo
  });

  return tokenLogin;
};
