import { useRef } from 'react';
import { Address, SignableMessage } from '@multiversx/sdk-core';
import { useGetAccount } from 'hooks/account';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import { networkSelector, tokenLoginSelector } from 'reduxStore/selectors';
import { setTokenLogin } from 'reduxStore/slices';
import { nativeAuth } from 'services/nativeAuth';
// import { getNativeAuthConfig } from 'services/nativeAuth/methods';
import { OnProviderLoginType } from 'types';
import { NativeAuthConfigType } from 'types';

const defaultNativeAuthConfig = {
  origin: typeof window !== 'undefined' ? window?.location?.origin : '',
  apiAddress: 'https://api.multiversx.com',
  expirySeconds: 60 * 60 * 24, // one day
  tokenExpirationToastWarningSeconds: 5 * 60 // five minutes
};

export const getNativeAuthConfig = (config?: NativeAuthConfigType | true) => {
  if ('1' || config) {
    return defaultNativeAuthConfig;
  }
  return defaultNativeAuthConfig;
  // if (config === true) {
  //   return defaultNativeAuthConfig;
  // }
  // const nativeAuthConfig = {
  //   origin: config?.origin ?? defaultNativeAuthConfig.origin,
  //   blockHashShard: config?.blockHashShard ?? null,
  //   expirySeconds:
  //     config?.expirySeconds ?? defaultNativeAuthConfig.expirySeconds,
  //   apiAddress: config?.apiAddress ?? defaultNativeAuthConfig.apiAddress,
  //   tokenExpirationToastWarningSeconds:
  //     config?.tokenExpirationToastWarningSeconds ??
  //     defaultNativeAuthConfig.tokenExpirationToastWarningSeconds
  // };
  // return nativeAuthConfig;
};

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

export const useLoginService1 = (props: any) => {
  return props;
};

export const useLoginService = (
  config?: OnProviderLoginType['nativeAuth']
): any => {
  const network = useSelector(networkSelector);
  const tokenLogin = useSelector(tokenLoginSelector);
  const tokenRef = useRef(tokenLogin?.loginToken);

  if ('1') {
    return {};
  }

  const apiAddress = getApiAddress(network.apiAddress, config);

  // const configuration = getNativeAuthConfig({
  //   ...(config === true ? {} : config),
  //   ...(apiAddress ? { apiAddress } : {})
  // });

  const hasNativeAuth = Boolean(config);

  const client = nativeAuth(config as any);
  const { address } = useGetAccount();
  const dispatch = useDispatch();

  const setLoginToken = (loginToken: string) => {
    tokenRef.current = loginToken;
    dispatch(
      setTokenLogin({
        loginToken,
        ...(apiAddress ? { nativeAuthConfig: config as any } : {})
      })
    );
  };

  const getNativeAuthLoginToken = async () => {
    try {
      const loginToken = await client.initialize();
      return loginToken;
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
        loginToken: loginToken,
        signature,
        nativeAuthToken,
        ...(apiAddress ? { nativeAuthConfig: config as any } : {})
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
    const loginToken = await getNativeAuthLoginToken();
    tokenRef.current = loginToken;
    if (!loginToken) {
      return;
    }
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
    configuration: config as any,
    setLoginToken,
    getNativeAuthLoginToken,
    setTokenLoginInfo,
    refreshNativeAuthTokenLogin
  };
};
