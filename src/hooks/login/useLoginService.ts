import { useRef } from 'react';
import { Address, SignableMessage } from '@multiversx/sdk-core';
import { useGetAccount } from 'hooks/account';
import { useNetwork } from 'hooks/store/useNetworkStore';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import { tokenLoginSelector } from 'reduxStore/selectors';
import { setTokenLogin } from 'reduxStore/slices';
import { nativeAuth } from 'services/nativeAuth';
import { getNativeAuthConfig } from 'services/nativeAuth/methods';
import { NativeAuthConfigType, OnProviderLoginType } from 'types';

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

export const useLoginService = (config?: OnProviderLoginType['nativeAuth']) => {
  const network = useNetwork();
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
        ...tokenLogin,
        loginToken,
        ...(apiAddress ? { nativeAuthConfig: configuration } : {})
      })
    );
  };

  const getNativeAuthLoginToken = () => {
    try {
      return client.initialize();
    } catch (error) {
      console.error('Unable to get block. Login failed.', error);
      return;
    }
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
      throw 'Token not found. Call `setLoginToken` first.';
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
        loginToken,
        signature,
        nativeAuthToken,
        ...(apiAddress ? { nativeAuthConfig: configuration } : {})
      })
    );
    return nativeAuthToken;
  };

  // TODO: @StanislavSava verify and maybe refactor to separate function
  const refreshNativeAuthTokenLogin = async ({
    signMessageCallback,
    nativeAuthClientConfig
  }: {
    signMessageCallback: (
      messageToSign: SignableMessage,
      options: Record<any, any>
    ) => Promise<SignableMessage>;
    nativeAuthClientConfig?: NativeAuthConfigType;
  }) => {
    const nativeAuthClient = nativeAuth(
      nativeAuthClientConfig || configuration
    );

    const loginToken = await nativeAuthClient.initialize({
      noCache: Boolean(nativeAuthClientConfig)
    });

    tokenRef.current = loginToken;
    if (!loginToken) {
      return;
    }
    const messageToSign = new SignableMessage({
      address: new Address(address),
      message: Buffer.from(`${address}${loginToken}`)
    });
    const signedMessage = await signMessageCallback(messageToSign, {});
    const nativeAuthToken = setTokenLoginInfo({
      address,
      signature: signedMessage.getSignature().toString('hex')
    });

    return nativeAuthToken;
  };

  return {
    configuration,
    setLoginToken,
    getNativeAuthLoginToken,
    setTokenLoginInfo,
    refreshNativeAuthTokenLogin
  };
};
