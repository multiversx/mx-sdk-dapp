import { useRef } from 'react';
import { Address, SignableMessage } from '@elrondnetwork/erdjs';
import { useGetAccount } from 'hooks/account';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import { networkSelector, tokenLoginSelector } from 'reduxStore/selectors';
import { setTokenLogin } from 'reduxStore/slices';
import { nativeAuth } from 'services/nativeAuth';
import { getNativeAuthConfig } from 'services/nativeAuth/methods';
import { OnProviderLoginType } from 'types';

const getApiAddress = (
  apiAddress: string,
  config?: OnProviderLoginType['nativeAuth']
) => {
  if (!config) {
    return null;
  }
  if (config === true) {
    return apiAddress;
  }
  return config.apiAddress ?? apiAddress;
};

export const useAuthService = (config?: OnProviderLoginType['nativeAuth']) => {
  const network = useSelector(networkSelector);
  const tokenLogin = useSelector(tokenLoginSelector);
  const tokenRef = useRef(tokenLogin?.loginToken);

  const apiAddress = getApiAddress(network.apiAddress, config);

  const configuration = getNativeAuthConfig({
    ...(config === true ? {} : config),
    ...(apiAddress ? { apiAddress } : {})
  });

  const hasNativeAuth = Boolean(config);

  const client = nativeAuth(configuration);
  const { address } = useGetAccount();
  const dispatch = useDispatch();

  const setLoginToken = (loginToken: string) => {
    tokenRef.current = loginToken;
    dispatch(
      setTokenLogin({
        loginToken,
        ...(apiAddress ? { nativeAuthConfig: configuration } : {})
      })
    );
  };

  const getLoginToken = async () => {
    const loginToken = await client.initialize();
    dispatch(
      setTokenLogin({
        nativeAuthConfig: configuration,
        loginToken
      })
    );
    tokenRef.current = loginToken;
    return loginToken;
  };

  const setTokenLoginInfo = ({
    address,
    signature
  }: {
    address: string;
    signature: string;
  }) => {
    const loginToken = tokenRef.current;

    if (!loginToken) {
      throw 'LoginToken not found';
    }

    if (!hasNativeAuth) {
      dispatch(
        setTokenLogin({
          loginToken,
          signature
        })
      );
      return;
    }

    const nativeAuthToken = client.getToken({
      address,
      token: loginToken,
      signature
    });

    dispatch(
      setTokenLogin({
        loginToken: loginToken,
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
    tokenRef.current = loginToken;
    const messageToSign = new SignableMessage({
      address: new Address(address),
      message: Buffer.from(loginToken)
    });
    const signature = await signMessageCallback(messageToSign, {});
    setTokenLoginInfo({
      address,
      signature: (signature.toJSON() as any).signature
    });
  };

  return {
    configuration,
    setLoginToken,
    getLoginToken,
    setTokenLoginInfo,
    refreshNativeAuthTokenLogin
  };
};
