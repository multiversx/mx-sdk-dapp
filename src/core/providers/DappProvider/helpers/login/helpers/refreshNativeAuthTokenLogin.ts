import { Address, Message } from 'lib/sdkCore';
import { getAccount } from 'methods/account/getAccount';
import { nativeAuth } from 'services/nativeAuth';
import { getDefaultNativeAuthConfig } from 'services/nativeAuth/methods/getDefaultNativeAuthConfig';
import { NativeAuthConfigType } from 'services/nativeAuth/nativeAuth.types';
import { setTokenLogin } from 'store/actions/loginInfo/loginInfoActions';
import { networkSelector } from 'store/selectors/networkSelectors';
import { getState } from 'store/store';

/**
 * Use this function if you support multiple networks with network switching
 * @returns The native auth token
 */
export const refreshNativeAuthTokenLogin = async ({
  signMessageCallback,
  nativeAuthClientConfig
}: {
  signMessageCallback: (
    messageToSign: Message,
    options: Record<any, any>
  ) => Promise<Message>;
  nativeAuthClientConfig?: NativeAuthConfigType;
}): Promise<string | null> => {
  const { address } = getAccount();
  const network = networkSelector(getState());
  const defaultNativeAuthConfig = getDefaultNativeAuthConfig(
    network.apiAddress
  );

  const nativeAuthClient = nativeAuth(
    nativeAuthClientConfig || defaultNativeAuthConfig
  );

  const loginToken = await nativeAuthClient.initialize({
    noCache: Boolean(nativeAuthClientConfig)
  });

  if (!loginToken) {
    return null;
  }

  const messageToSign = new Message({
    address: new Address(address),
    data: Buffer.from(`${address}${loginToken}`)
  });

  const signedMessage = await signMessageCallback(messageToSign, {});

  if (!signedMessage?.signature) {
    throw 'Message not signed';
  }

  setTokenLogin({
    loginToken,
    signature: Buffer.from(signedMessage.signature).toString('hex')
  });

  return nativeAuthClient.getToken({
    address,
    token: loginToken,
    signature: Buffer.from(signedMessage.signature).toString('hex')
  });
};
