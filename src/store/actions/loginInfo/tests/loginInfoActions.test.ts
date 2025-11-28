import { ProviderTypeEnum } from 'providers/types/providerFactory.types';
import type {
  LedgerLoginType,
  WalletConnectLoginType
} from 'store/slices/loginInfo/loginInfo.types';
import type { TokenLoginType } from 'types/login.types';
import {
  addLoginExpiresAt,
  removeLoginExpiresAt,
  setIsWalletConnectV2Initialized,
  setLedgerLogin,
  setLoginToken,
  setProviderType,
  setTokenLogin,
  setTokenLoginSignature,
  setWalletConnectLogin
} from '../loginInfoActions';

const mockSetState = jest.fn();

jest.mock('store/store', () => ({
  getStore: () => ({
    setState: mockSetState
  })
}));

const createRootState = () =>
  ({
    loginInfo: {
      providerType: ProviderTypeEnum.none,
      tokenLogin: null,
      walletConnectLogin: null,
      ledgerLogin: null,
      isWalletConnectV2Initialized: false,
      loginExpiresAt: null
    }
  }) as any;

describe('loginInfoActions', () => {
  let rootState: ReturnType<typeof createRootState>;

  beforeEach(() => {
    rootState = createRootState();
    mockSetState.mockImplementation(
      (updater: (state: typeof rootState) => void) => updater(rootState)
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('sets provider type and token login data', () => {
    setProviderType(ProviderTypeEnum.crossWindow);
    expect(rootState.loginInfo.providerType).toBe(ProviderTypeEnum.crossWindow);

    const tokenLogin = {
      loginToken: 'token',
      signature: 'signature'
    } as TokenLoginType;

    setTokenLogin(tokenLogin);
    expect(rootState.loginInfo.tokenLogin).toBe(tokenLogin);
  });

  it('updates login token and signature even without existing token', () => {
    setLoginToken('token123');
    expect(rootState.loginInfo.tokenLogin).toEqual({ loginToken: 'token123' });

    setTokenLoginSignature('sig456');
    expect(rootState.loginInfo.tokenLogin?.signature).toBe('sig456');
  });

  it('updates wallet connect, ledger and wc v2 flags', () => {
    const walletConnectLogin = {
      topic: 'topic',
      loginType: 'walletconnect',
      callbackRoute: '/callback',
      logoutRoute: '/logout'
    } as unknown as WalletConnectLoginType;
    const ledgerLogin = { index: 0 } as LedgerLoginType;

    setWalletConnectLogin(walletConnectLogin);
    expect(rootState.loginInfo.walletConnectLogin).toBe(walletConnectLogin);

    setLedgerLogin(ledgerLogin);
    expect(rootState.loginInfo.ledgerLogin).toBe(ledgerLogin);

    setIsWalletConnectV2Initialized(true);
    expect(rootState.loginInfo.isWalletConnectV2Initialized).toBe(true);
  });

  it('handles login expiration timestamps', () => {
    addLoginExpiresAt(123);
    expect(rootState.loginInfo.loginExpiresAt).toBe(123);

    removeLoginExpiresAt();
    expect(rootState.loginInfo.loginExpiresAt).toBeNull();
  });
});
