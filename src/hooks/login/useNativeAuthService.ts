import { Address, SignableMessage } from '@elrondnetwork/erdjs';
import { useGetAccount } from 'hooks/account';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import { networkSelector } from 'reduxStore/selectors';
import { setTokenLogin } from 'reduxStore/slices';
import { nativeAuth } from 'services/nativeAuth';
import { getNativeAuthConfig } from 'services/nativeAuth/methods';
import { OnProviderLoginType } from 'types';

export const useNativeAuthService = (
  config?: OnProviderLoginType['nativeAuth']
) => {
  const network = useSelector(networkSelector);

  const apiAddress =
    config === true
      ? network.apiAddress
      : config?.apiAddress ?? network.apiAddress;

  const configuration = getNativeAuthConfig({
    ...(config === true ? {} : config),
    apiAddress
  });

  const client = nativeAuth(configuration);
  const { address } = useGetAccount();
  const dispatch = useDispatch();

  const getLoginToken = async () => {
    const loginToken = await client.initialize();
    dispatch(
      setTokenLogin({
        nativeAuthConfig: configuration,
        loginToken
      })
    );
    return loginToken;
  };

  const setNativeAuthTokenLogin = ({
    address,
    token,
    signature
  }: {
    address: string;
    token: string;
    signature: string;
  }) => {
    const nativeAuthToken = client.getToken({
      address,
      token,
      signature
    });

    dispatch(
      setTokenLogin({
        loginToken: token,
        signature,
        nativeAuthToken
      })
    );
  };

  // TODO: @StanislavSava verify and maybe refactor to separate function
  const refreshNativeAuthTokenLogin = async ({
    signMessageCallback
  }: {
    signMessageCallback: (
      messageToSign: SignableMessage,
      options: Record<any, any>
    ) => Promise<SignableMessage>;
  }) => {
    const loginToken = await getLoginToken();
    const messageToSign = new SignableMessage({
      address: new Address(address),
      message: Buffer.from(loginToken)
    });
    const signature = await signMessageCallback(messageToSign, {});
    setNativeAuthTokenLogin({
      address,
      token: loginToken,
      signature: (signature.toJSON() as any).signature
    });
  };

  return {
    configuration,
    getLoginToken,
    setNativeAuthTokenLogin,
    refreshNativeAuthTokenLogin
  };
};
