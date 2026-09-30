import { Address, Message } from 'lib/sdkCore';
import { LogoutManager } from 'managers/LogoutManager/LogoutManager';
import { getAccount } from 'methods/account/getAccount';
import { getSignerAddress } from 'methods/account/getSignerAddress';
import { nativeAuth } from 'services/nativeAuth';
import { decodeLoginToken } from 'services/nativeAuth/helpers/decodeLoginToken';
import { decodeNativeAuthToken } from 'services/nativeAuth/helpers/decodeNativeAuthToken';
import { getDefaultNativeAuthConfig } from 'services/nativeAuth/methods/getDefaultNativeAuthConfig';
import { NativeAuthConfigType } from 'services/nativeAuth/nativeAuth.types';
import { setTokenLogin } from 'store/actions/loginInfo/loginInfoActions';
import { nativeAuthConfigSelector } from 'store/selectors/configSelectors';
import { tokenLoginSelector } from 'store/selectors/loginInfoSelectors';
import { getState } from 'store/store';

const getCurrentToken = () => {
  const nativeAuthToken = tokenLoginSelector(getState())?.nativeAuthToken;
  const decodedToken = decodeNativeAuthToken(nativeAuthToken);

  const extraInfo: Record<string, unknown> =
    (decodedToken && decodeLoginToken(decodedToken.body)?.extraInfo) || {};

  return { signerAddress: decodedToken?.address, extraInfo };
};

const getOnBehalfExtraInfo = (
  address: string,
  extraInfo: Record<string, unknown>
) => {
  const key = ['multisig', 'impersonate'].find(
    (field) => String(extraInfo[field]).toLowerCase() === address.toLowerCase()
  );

  return key ? { [key]: address } : null;
};

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
  const currentToken = getCurrentToken();
  // sessions from older versions have no signerAddress; their token has it
  const signerAddress =
    getSignerAddress() || currentToken.signerAddress || address;

  const config =
    nativeAuthClientConfig ||
    nativeAuthConfigSelector(getState()) ||
    getDefaultNativeAuthConfig();

  const nativeAuthClient = nativeAuth(config);

  let extraInfo: Record<string, string> | undefined;

  if (signerAddress !== address) {
    const onBehalfExtraInfo = getOnBehalfExtraInfo(
      address,
      currentToken.extraInfo
    );

    if (!onBehalfExtraInfo) {
      throw new Error(
        'The nativeAuth token of this session cannot be refreshed: its account is not the signer.'
      );
    }

    extraInfo = { ...config.extraInfo, ...onBehalfExtraInfo };
  }

  const loginToken = await nativeAuthClient.initialize({
    noCache: Boolean(nativeAuthClientConfig),
    extraInfo
  });

  if (!loginToken) {
    return null;
  }

  const messageToSign = new Message({
    address: new Address(signerAddress),
    data: new Uint8Array(Buffer.from(`${signerAddress}${loginToken}`))
  });

  const signedMessage = await signMessageCallback(messageToSign, {});

  if (!signedMessage?.signature) {
    throw 'Message not signed';
  }

  const signature = Buffer.from(signedMessage.signature).toString('hex');

  const nativeAuthToken = nativeAuthClient.getToken({
    address: signerAddress,
    token: loginToken,
    signature
  });

  setTokenLogin({ loginToken, signature, nativeAuthToken });
  LogoutManager.getInstance().init();

  return nativeAuthToken;
};
