import { getAccount } from 'utils/account/getAccount';
import { getMultiSigLoginToken } from './getMultiSigLoginToken';

interface SetMultisigLoginToken<T> {
  loginToken?: string;
  multisig?: string;
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
  multisig,
  address,
  signature,
  loginService
}: SetMultisigLoginToken<T>) => {
  const loginToken = await getMultiSigLoginToken({
    loginToken: token,
    multisig
  });

  const accountAddress = loginToken != null ? multisig : address;

  if (loginToken != null) {
    loginService.setLoginToken(loginToken);
  }

  if (signature) {
    loginService.setTokenLoginInfo({ signature, address });
  }

  const account = await getAccount(accountAddress);

  return account;
};
