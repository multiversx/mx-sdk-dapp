import { Address, Message } from 'lib/sdkCore';
import { LogoutManager } from 'managers/LogoutManager/LogoutManager';
import { getAccount } from 'methods/account/getAccount';
import { nativeAuth } from 'services/nativeAuth';
import { getDefaultNativeAuthConfig } from 'services/nativeAuth/methods/getDefaultNativeAuthConfig';
import { NativeAuthConfigType } from 'services/nativeAuth/nativeAuth.types';
import { setTokenLogin } from 'store/actions/loginInfo/loginInfoActions';
import { nativeAuthConfigSelector } from 'store/selectors/configSelectors';
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

  const nativeAuthClient = nativeAuth(
    nativeAuthClientConfig ||
      nativeAuthConfigSelector(getState()) ||
      getDefaultNativeAuthConfig()
  );

  const loginToken = await nativeAuthClient.initialize({
    noCache: Boolean(nativeAuthClientConfig)
  });

  if (!loginToken) {
    return null;
  }

  const messageToSign = new Message({
    address: new Address(address),
    data: new Uint8Array(Buffer.from(`${address}${loginToken}`))
  });

  const signedMessage = await signMessageCallback(messageToSign, {});

  if (!signedMessage?.signature) {
    throw 'Message not signed';
  }

  const signature = Buffer.from(signedMessage.signature).toString('hex');

  const nativeAuthToken = nativeAuthClient.getToken({
    address,
    token: loginToken,
    signature
  });

  setTokenLogin({ loginToken, signature, nativeAuthToken });
  LogoutManager.getInstance().init();

  return nativeAuthToken;
};
