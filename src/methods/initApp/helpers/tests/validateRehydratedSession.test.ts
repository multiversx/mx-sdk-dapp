import { setFlagsConfig } from 'store/actions/config/configActions';
import { setTokenLogin } from 'store/actions/loginInfo/loginInfoActions';
import { loginAction } from 'store/actions/sharedActions/sharedActions';
import { addressSelector } from 'store/selectors/accountSelectors';
import { getState, initStore } from 'store/store';
import { validateRehydratedSession } from '../validateRehydratedSession';

const ADDRESS =
  'erd1dm9uxpf5awkn7uhju7zjn9lde0dhahy0qaxqqlu26xcuuw27qqrsqfmej3';
const ORIGIN = 'https://dapp.example';

const encodeBase64Url = (value: string) =>
  Buffer.from(value, 'utf8')
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

const BLOCK_HASH =
  'f2d0897d0ca185a884349b10842a9fe4c749472d75cee30e311a82de29acd52b';

const makeToken = (origin: string) => {
  const body = `${encodeBase64Url(origin)}.${BLOCK_HASH}.86400.${encodeBase64Url(
    JSON.stringify({ timestamp: 1677588786 })
  )}`;

  return `${encodeBase64Url(ADDRESS)}.${encodeBase64Url(body)}.a-signature`;
};

const nativeAuthConfig = {
  origin: ORIGIN,
  apiAddress: 'https://api.multiversx.com',
  expirySeconds: 86400,
  tokenExpirationToastWarningSeconds: 300
};

describe('validateRehydratedSession', () => {
  beforeEach(() => {
    localStorage.clear();
    initStore(() => localStorage);
    jest.spyOn(console, 'warn').mockImplementation(() => null);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('does nothing when nativeAuth is not configured', () => {
    loginAction({ address: ADDRESS, providerType: 'extension' } as any);

    expect(validateRehydratedSession({ nativeAuthConfig: null })).toBe(false);
    expect(addressSelector(getState())).toEqual(ADDRESS);
  });

  it('does nothing when there is no restored session', () => {
    expect(validateRehydratedSession({ nativeAuthConfig })).toBe(false);
  });

  it('keeps a session whose token was issued for this origin', () => {
    loginAction({ address: ADDRESS, providerType: 'extension' } as any);
    setTokenLogin({
      loginToken: 'a-login-token',
      nativeAuthToken: makeToken(ORIGIN)
    });

    expect(validateRehydratedSession({ nativeAuthConfig })).toBe(false);
    expect(addressSelector(getState())).toEqual(ADDRESS);
  });

  it('keeps a session restored without a nativeAuth token by default', () => {
    loginAction({ address: ADDRESS, providerType: 'extension' } as any);

    expect(validateRehydratedSession({ nativeAuthConfig })).toBe(false);
    expect(addressSelector(getState())).toEqual(ADDRESS);
    expect(console.warn).toHaveBeenCalled();
  });

  it('clears a session restored without a nativeAuth token when the token is not persisted', () => {
    setFlagsConfig({ persistTokenLogin: false });
    loginAction({ address: ADDRESS, providerType: 'extension' } as any);

    expect(validateRehydratedSession({ nativeAuthConfig })).toBe(true);
    expect(addressSelector(getState())).toBeFalsy();
  });

  it('clears a session whose token was issued for another origin', () => {
    loginAction({ address: ADDRESS, providerType: 'extension' } as any);
    setTokenLogin({
      loginToken: 'a-login-token',
      nativeAuthToken: makeToken('https://attacker.example')
    });

    expect(validateRehydratedSession({ nativeAuthConfig })).toBe(true);
    expect(addressSelector(getState())).toBeFalsy();
  });
});
