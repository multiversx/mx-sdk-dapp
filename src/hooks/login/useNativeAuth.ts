import { useRef } from 'react';
import { Address, SignableMessage } from '@elrondnetwork/erdjs';
import { useGetAccount, useGetAccountProvider } from 'hooks/account';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import { networkSelector } from 'reduxStore/selectors';
import { setTokenLogin } from 'reduxStore/slices';
import {
  defaultNativeAuthConfig,
  nativeAuth,
  NativeAuthType
} from 'services/nativeAuth';

export const useNativeAuth = (config?: NativeAuthType) => {
  const network = useSelector(networkSelector);
  const configuration: NativeAuthType = {
    hostname: config?.hostname ?? defaultNativeAuthConfig.hostname,
    expirySeconds:
      config?.expirySeconds ?? defaultNativeAuthConfig.expirySeconds,
    apiAddress: config?.apiAddress ?? network.apiAddress
  };
  const client = nativeAuth(configuration);
  const { address } = useGetAccount();
  const loginTokenRef = useRef('');
  const dispatch = useDispatch();
  const { provider } = useGetAccountProvider();

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
  const refreshNativeAuthTokenLogin = async () => {
    const loginToken = await getLoginToken();
    const messageToSign = new SignableMessage({
      address: new Address(address),
      message: Buffer.from(loginToken)
    });
    const signature = await provider.signMessage(messageToSign, {});
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
