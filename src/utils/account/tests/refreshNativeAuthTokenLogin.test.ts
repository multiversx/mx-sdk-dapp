import { LogoutManager } from 'managers/LogoutManager/LogoutManager';
import { getAccount } from 'methods/account/getAccount';
import { getSignerAddress } from 'methods/account/getSignerAddress';
import { nativeAuth } from 'services/nativeAuth';
import { decodeLoginToken } from 'services/nativeAuth/helpers/decodeLoginToken';
import { decodeNativeAuthToken } from 'services/nativeAuth/helpers/decodeNativeAuthToken';
import { setTokenLogin } from 'store/actions/loginInfo/loginInfoActions';
import { refreshNativeAuthTokenLogin } from '../refreshNativeAuthTokenLogin';

jest.mock('methods/account/getAccount');
jest.mock('methods/account/getSignerAddress');
jest.mock('services/nativeAuth/helpers/decodeNativeAuthToken');
jest.mock('services/nativeAuth/helpers/decodeLoginToken');
jest.mock('store/selectors/loginInfoSelectors', () => ({
  tokenLoginSelector: () => ({ nativeAuthToken: 'current-token' })
}));
jest.mock('services/nativeAuth');
jest.mock('store/actions/loginInfo/loginInfoActions');
jest.mock('store/selectors/configSelectors', () => ({
  nativeAuthConfigSelector: () => ({ origin: 'https://dapp' })
}));
jest.mock('store/store', () => ({ getState: () => ({}) }));
jest.mock('managers/LogoutManager/LogoutManager', () => {
  const init = jest.fn();
  return { LogoutManager: { getInstance: () => ({ init }) } };
});

const address =
  'erd1spyavw0956vq68xj8y4tenjpq2wd5a9p2c6j8gsz7ztyrnpxrruqzu66jx';
const multisigAddress =
  'erd1qqqqqqqqqqqqqpgqak8zt22wl2ph4tswtyc39namqx6ysa2sd8ss4xmlj3';

const signMessageCallback = async (message: any) => {
  message.signature = new Uint8Array([1]);
  return message;
};

describe('refreshNativeAuthTokenLogin', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (getAccount as jest.Mock).mockReturnValue({ address });
    (getSignerAddress as jest.Mock).mockReturnValue(address);
    (nativeAuth as jest.Mock).mockReturnValue({
      initialize: jest.fn().mockResolvedValue('login-token'),
      getToken: jest.fn().mockReturnValue('native-auth-token')
    });
  });

  it('stores the new token and reschedules the session expiry', async () => {
    const result = await refreshNativeAuthTokenLogin({
      signMessageCallback: async (message) => {
        message.signature = new Uint8Array([1, 2]);
        return message;
      }
    });

    expect(result).toBe('native-auth-token');
    expect(setTokenLogin).toHaveBeenCalledWith({
      loginToken: 'login-token',
      signature: '0102',
      nativeAuthToken: 'native-auth-token'
    });
    expect(LogoutManager.getInstance().init).toHaveBeenCalled();
  });

  it('uses the configured native auth settings by default', async () => {
    await refreshNativeAuthTokenLogin({
      signMessageCallback: async (message) => {
        message.signature = new Uint8Array([1]);
        return message;
      }
    });

    expect(nativeAuth).toHaveBeenCalledWith({ origin: 'https://dapp' });
  });

  const mockCurrentToken = (extraInfo: Record<string, unknown>) => {
    (decodeNativeAuthToken as jest.Mock).mockReturnValue({
      address,
      body: 'login-token-body'
    });
    (decodeLoginToken as jest.Mock).mockReturnValue({ extraInfo });
  };

  it('signs as the signer and keeps the multisig address for a multisig session', async () => {
    (getAccount as jest.Mock).mockReturnValue({ address: multisigAddress });
    mockCurrentToken({ multisig: multisigAddress });
    const signedMessages: any[] = [];

    await refreshNativeAuthTokenLogin({
      signMessageCallback: async (message) => {
        signedMessages.push(message);
        return signMessageCallback(message);
      }
    });

    const client = (nativeAuth as jest.Mock).mock.results[0].value;

    expect(client.initialize).toHaveBeenCalledWith(
      expect.objectContaining({ extraInfo: { multisig: multisigAddress } })
    );
    expect(signedMessages[0].address.toBech32()).toBe(address);
    expect(client.getToken).toHaveBeenCalledWith(
      expect.objectContaining({ address })
    );
  });

  it('takes the signer from the current token for a session from an older version', async () => {
    (getAccount as jest.Mock).mockReturnValue({ address: multisigAddress });
    (getSignerAddress as jest.Mock).mockReturnValue('');
    mockCurrentToken({ timestamp: 1, multisig: multisigAddress });

    await refreshNativeAuthTokenLogin({ signMessageCallback });

    const client = (nativeAuth as jest.Mock).mock.results[0].value;

    expect(client.getToken).toHaveBeenCalledWith(
      expect.objectContaining({ address })
    );
    expect(client.initialize).toHaveBeenCalledWith(
      expect.objectContaining({ extraInfo: { multisig: multisigAddress } })
    );
  });

  it('matches a multisig address the token holds in uppercase', async () => {
    (getAccount as jest.Mock).mockReturnValue({ address: multisigAddress });
    mockCurrentToken({ multisig: multisigAddress.toUpperCase() });

    await refreshNativeAuthTokenLogin({ signMessageCallback });

    const client = (nativeAuth as jest.Mock).mock.results[0].value;

    expect(client.initialize).toHaveBeenCalledWith(
      expect.objectContaining({ extraInfo: { multisig: multisigAddress } })
    );
  });

  it('does not refresh a session whose account cannot be matched to the token', async () => {
    (getAccount as jest.Mock).mockReturnValue({ address: multisigAddress });
    (decodeNativeAuthToken as jest.Mock).mockReturnValue(null);

    await expect(
      refreshNativeAuthTokenLogin({ signMessageCallback })
    ).rejects.toThrow('cannot be refreshed');
    expect(setTokenLogin).not.toHaveBeenCalled();
  });
});
