import { setLoginToken } from 'store/actions/loginInfo/loginInfoActions';
import { getAccountFromToken } from './getAccountFromToken';

interface IExtractAccountFromTokenProps {
  loginToken: string;
  extraInfoData: {
    multisig?: string;
    impersonate?: string;
  };
  address: string;
}

export async function extractAddressFromToken({
  loginToken,
  extraInfoData,
  address
}: IExtractAccountFromTokenProps): Promise<string> {
  const accountDetails = await getAccountFromToken({
    originalLoginToken: loginToken,
    extraInfoData,
    address
  });

  if (accountDetails.modifiedLoginToken) {
    setLoginToken(accountDetails.modifiedLoginToken);
  }

  return accountDetails.address;
}
