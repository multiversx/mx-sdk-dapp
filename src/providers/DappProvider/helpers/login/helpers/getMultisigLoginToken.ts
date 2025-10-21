import isEqual from 'lodash.isequal';
import { IProvider } from 'providers/types/providerFactory.types';
import { decodeLoginToken } from 'services/nativeAuth/helpers/decodeLoginToken';
import { nativeAuth } from 'services/nativeAuth/nativeAuth';
import { NativeAuthConfigType } from 'services/nativeAuth/nativeAuth.types';

export async function getMultisigLoginToken({
  loginData,
  nativeAuthConfig,
  loginToken
}: {
  loginData: Awaited<ReturnType<IProvider['login']>>;
  nativeAuthConfig: NativeAuthConfigType;
  loginToken: string;
}): Promise<string> {
  const {
    address: _address,
    signature: _signature,
    ...loginResult
  } = loginData;

  const extraInfo = Object.keys(loginResult).reduce(
    (acc, key) => {
      const value = loginResult[key];
      if (value != null) {
        acc[key] = value.toString();
      }
      return acc;
    },
    {} as { [key: string]: string }
  );

  const modifiedNativeAuthConfig: NativeAuthConfigType = {
    ...nativeAuthConfig
  };

  if (Object.keys(extraInfo).length > 0) {
    modifiedNativeAuthConfig.extraInfo = extraInfo;
  }

  const isSameConfig = isEqual(nativeAuthConfig, modifiedNativeAuthConfig);

  if (!isSameConfig) {
    const existingLoginToken = decodeLoginToken(loginToken);
    const nativeAuthClient = nativeAuth(modifiedNativeAuthConfig);
    const modifiedLoginToken = await nativeAuthClient.initialize({
      noCache: true,
      latestBlockInfo: {
        hash: existingLoginToken?.blockHash ?? '',
        timestamp: existingLoginToken?.extraInfo?.timestamp ?? 0
      }
    });
    return modifiedLoginToken;
  }

  return loginToken;
}
