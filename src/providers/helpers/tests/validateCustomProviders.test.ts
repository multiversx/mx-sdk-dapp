import { ICustomProvider } from 'providers/types/providerFactory.types';
import {
  isProviderShapeValid,
  validateCustomProviders
} from '../validateCustomProviders';

const makeProvider = (
  overrides: Record<string, unknown> = {}
): ICustomProvider =>
  ({
    name: 'My Wallet',
    type: 'my-wallet',
    constructor: async () => ({}) as any,
    ...overrides
  }) as ICustomProvider;

describe('validateCustomProviders', () => {
  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => null);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('keeps a well-formed custom provider', () => {
    const provider = makeProvider({ iconUrl: 'https://cdn.example/logo.png' });

    expect(validateCustomProviders([provider])).toEqual([provider]);
  });

  it('keeps a provider without an iconUrl', () => {
    const provider = makeProvider();

    expect(validateCustomProviders([provider])).toEqual([provider]);
  });

  it.each(['extension', 'crossWindow', 'ledger', 'walletConnect', 'webview'])(
    'rejects a provider shadowing the built-in type "%s"',
    (type) => {
      expect(validateCustomProviders([makeProvider({ type })])).toEqual([]);
    }
  );

  it.each([
    '/icons/wallet.svg',
    `${window.location.origin}/multiversx-white.svg`,
    'data:image/svg+xml;base64,PHN2Zz48L3N2Zz4='
  ])('keeps a provider whose iconUrl is %s', (iconUrl) => {
    const provider = makeProvider({ iconUrl });

    expect(validateCustomProviders([provider])).toEqual([provider]);
  });

  it.each([
    'http://cdn.example/logo.png',
    'javascript:alert(1)',
    'data:text/html,<p>wallet</p>'
  ])('rejects a provider whose iconUrl is %s', (iconUrl) => {
    expect(validateCustomProviders([makeProvider({ iconUrl })])).toEqual([]);
  });

  it('rejects a provider whose constructor is not a function', () => {
    expect(
      validateCustomProviders([makeProvider({ constructor: 'nope' })])
    ).toEqual([]);
  });

  it('rejects a provider without its own constructor', () => {
    const { constructor: _constructor, ...provider } = makeProvider();

    expect(
      validateCustomProviders([provider as unknown as ICustomProvider])
    ).toEqual([]);
  });

  it('rejects providers without a type or name', () => {
    expect(
      validateCustomProviders([
        makeProvider({ type: undefined }),
        makeProvider({ name: undefined })
      ])
    ).toEqual([]);
  });
});

describe('isProviderShapeValid', () => {
  const validProvider = {
    init: () => true,
    login: () => null,
    logout: () => true,
    signTransactions: () => [],
    signMessage: () => null,
    getType: () => 'my-wallet',
    getAddress: () => '',
    isInitialized: () => true,
    setAccount: () => null
  };

  it('accepts an object implementing every required method', () => {
    expect(isProviderShapeValid(validProvider)).toBe(true);
  });

  it('rejects an object missing a required method', () => {
    const { signTransactions: _omitted, ...incomplete } = validProvider;

    expect(isProviderShapeValid(incomplete)).toBe(false);
  });

  it.each([null, undefined, 'string', 42])('rejects %p', (candidate) => {
    expect(isProviderShapeValid(candidate)).toBe(false);
  });
});
