import { useRef } from 'react';
import { Address, SignableMessage } from '@elrondnetwork/erdjs';
import { useGetAccount } from 'hooks/account';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import { networkSelector } from 'reduxStore/selectors';
import { setTokenLogin } from 'reduxStore/slices';
import { defaultNativeAuthConfig, nativeAuth } from 'services/nativeAuth';
import { OnProviderLoginType, NativeAuthConfigType } from 'types';

export const useNativeAuthService = (
  config?: OnProviderLoginType['nativeAuth']
) => {
  const network = useSelector(networkSelector);
  const nativeAuthConfig = config === true ? defaultNativeAuthConfig : config;
  const configuration: NativeAuthConfigType = {
    hostname: nativeAuthConfig?.hostname ?? defaultNativeAuthConfig.hostname,
    expirySeconds:
      nativeAuthConfig?.expirySeconds ?? defaultNativeAuthConfig.expirySeconds,
    apiAddress: nativeAuthConfig?.apiAddress ?? network.apiAddress
  };
  const client = nativeAuth(configuration);
  const { address } = useGetAccount();
  const loginTokenRef = useRef('');
  const dispatch = useDispatch();

  const getLoginToken = async () => {
    const token = await client.initialize();
    loginTokenRef.current = token;
    return token;
  };

  const setNativeAuthTokenLogin = ({
    address,
    signature
  }: {
    address: string;
    signature: string;
  }) => {
    if (!loginTokenRef.current) {
      throw 'Must call getLoginToken first';
    }

    const nativeAuthToken = client.getToken({
      address,
      token: loginTokenRef.current,
      signature
    });

    dispatch(
      setTokenLogin({
        loginToken: loginTokenRef.current,
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
      signature: (signature.toJSON() as any).signature
    });
  };

  return {
    getLoginToken,
    setNativeAuthTokenLogin,
    refreshNativeAuthTokenLogin
  };
};
