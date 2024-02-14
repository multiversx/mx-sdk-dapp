import { getAccount } from 'utils/account/getAccount';
import {
  getModifiedLoginToken,
  GetMultiSigLoginTokenType
} from './getModifiedLoginToken';

interface SetMultisigLoginToken<T> extends GetMultiSigLoginTokenType {
  signature?: string;
  address: string;
  loginService: T;
}

export const processMultisigAccount = async <
  T extends {
    setLoginToken: (loginToken: string) => void;
    setTokenLoginInfo: ({
      address,
      signature
    }: {
      address: string;
      signature: string;
    }) => string | undefined;
  }
>({
  loginToken: token,
  extraInfoData,
  address,
  signature,
  loginService
}: SetMultisigLoginToken<T>) => {
  const loginToken = await getModifiedLoginToken({
    loginToken: token,
    extraInfoData
  });

  let tokenAddress =
    extraInfoData.multisig || extraInfoData.impersonate || address;

  const accountAddress = loginToken != null ? tokenAddress : address;

  if (loginToken != null) {
    loginService.setLoginToken(loginToken);
  }

  if (signature) {
    loginService.setTokenLoginInfo({ signature, address });
  }

  const account = await getAccount(accountAddress);

  return account;
};
