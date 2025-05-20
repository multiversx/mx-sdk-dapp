import { getModifiedLoginToken } from './getModifiedLoginToken';

interface GetAccountFromTokenType {
  address: string;
  originalLoginToken?: string;
  extraInfoData: {
    multisig?: string;
    impersonate?: string;
  };
}

export async function getAccountFromToken({
  originalLoginToken,
  extraInfoData,
  address
}: GetAccountFromTokenType) {
  const modifiedLoginToken = await getModifiedLoginToken({
    loginToken: originalLoginToken,
    extraInfoData
  });

  const tokenAddress =
    extraInfoData.multisig || extraInfoData.impersonate || address;

  const accountAddress = modifiedLoginToken != null ? tokenAddress : address;

  return {
    address: accountAddress,
    modifiedLoginToken
  };
}
