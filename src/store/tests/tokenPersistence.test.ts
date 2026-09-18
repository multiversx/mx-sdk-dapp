import { setFlagsConfig } from 'store/actions/config/configActions';
import { setTokenLogin } from 'store/actions/loginInfo/loginInfoActions';
import { loginAction } from 'store/actions/sharedActions/sharedActions';
import { initStore } from 'store/store';

const STORE_KEY = 'sdk-dapp-store';
const ADDRESS =
  'erd1dm9uxpf5awkn7uhju7zjn9lde0dhahy0qaxqqlu26xcuuw27qqrsqfmej3';

const readPersisted = () => JSON.parse(localStorage.getItem(STORE_KEY) ?? '{}');

const login = () => {
  loginAction({ address: ADDRESS, providerType: 'extension' } as any);
  setTokenLogin({
    loginToken: 'a-login-token',
    signature: 'a-signature',
    nativeAuthToken: 'a-native-auth-token'
  });
};

describe('token persistence (F-004)', () => {
  beforeEach(() => {
    localStorage.clear();
    initStore(() => localStorage);
  });

  it('persists tokenLogin by default, preserving 5.x behaviour', () => {
    setFlagsConfig({ persistTokenLogin: true });
    login();

    const persisted = readPersisted();

    expect(persisted.state.loginInfo.tokenLogin).toEqual({
      loginToken: 'a-login-token',
      signature: 'a-signature',
      nativeAuthToken: 'a-native-auth-token'
    });
  });

  it('keeps no credential in storage when persistTokenLogin is off', () => {
    setFlagsConfig({ persistTokenLogin: false });
    login();

    const raw = localStorage.getItem(STORE_KEY) ?? '';

    expect(readPersisted().state.loginInfo.tokenLogin).toBeNull();
    expect(raw).not.toContain('a-native-auth-token');
    expect(raw).not.toContain('a-login-token');
    expect(raw).not.toContain('a-signature');
  });

  it('still exposes the token in memory when it is not persisted', async () => {
    setFlagsConfig({ persistTokenLogin: false });
    login();

    const { tokenLoginSelector } = await import(
      'store/selectors/loginInfoSelectors'
    );
    const { getState } = await import('store/store');

    expect(tokenLoginSelector(getState())?.nativeAuthToken).toEqual(
      'a-native-auth-token'
    );
  });

  it('keeps the rest of the persisted state intact', () => {
    setFlagsConfig({ persistTokenLogin: false });
    login();

    expect(readPersisted().state.account.address).toEqual(ADDRESS);
  });
});
