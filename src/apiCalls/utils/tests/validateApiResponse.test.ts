import { testToken } from '__mocks__/data/testToken';
import {
  getAccountSchema,
  tokenSchema,
  transactionSchema
} from '../apiResponseSchemas';
import {
  isNumeric,
  resetApiResponseWarnings,
  validateApiListResponse,
  validateApiResponse
} from '../validateApiResponse';

const address =
  'erd1dm9uxpf5awkn7uhju7zjn9lde0dhahy0qaxqqlu26xcuuw27qqrsqfmej3';

describe('validateApiResponse', () => {
  let warn: jest.SpyInstance;

  beforeEach(() => {
    resetApiResponseWarnings();
    warn = jest.spyOn(console, 'warn').mockImplementation(() => null);
  });

  afterEach(() => {
    warn.mockRestore();
  });

  it('accepts a well-formed token', () => {
    expect(
      validateApiResponse({
        data: testToken,
        schema: tokenSchema,
        source: 'tokens'
      })
    ).toBe(true);
    expect(warn).not.toHaveBeenCalled();
  });

  it('accepts an NFT, which carries no decimals', () => {
    const { decimals: _decimals, ...nft } = testToken;

    expect(
      validateApiResponse({ data: nft, schema: tokenSchema, source: 'nfts' })
    ).toBe(true);
  });

  it.each([
    ['negative', -1],
    ['fractional', 6.5],
    ['above 18', 19],
    ['a string', '18']
  ])('flags %s token decimals', (_, decimals) => {
    expect(
      validateApiResponse({
        data: { ...testToken, decimals },
        schema: tokenSchema,
        source: 'tokens'
      })
    ).toBe(false);
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('decimals'));
  });

  it('flags an account response for a different address', () => {
    expect(
      validateApiResponse({
        data: {
          address:
            'erd1qqqqqqqqqqqqqpgqp699jngundfqw07d8jzkepucvpzush6k3wvqyc44rx',
          balance: '0',
          nonce: 0
        },
        schema: getAccountSchema(address),
        source: 'accounts'
      })
    ).toBe(false);
  });

  it('flags a body that is not an object', () => {
    expect(
      validateApiResponse({
        data: 'not json',
        schema: tokenSchema,
        source: 'tokens'
      })
    ).toBe(false);
    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining('the response body')
    );
  });

  it('warns once per endpoint and set of fields', () => {
    const data = { ...testToken, decimals: -1 };

    validateApiResponse({ data, schema: tokenSchema, source: 'tokens' });
    validateApiResponse({ data, schema: tokenSchema, source: 'tokens' });

    expect(warn).toHaveBeenCalledTimes(1);
  });

  it('does not log the response values', () => {
    validateApiResponse({
      data: { ...testToken, name: 42 },
      schema: tokenSchema,
      source: 'tokens'
    });

    expect(warn.mock.calls[0][0]).not.toContain(testToken.identifier);
  });

  it('checks every item of a list response', () => {
    const transaction = {
      txHash: 'a'.repeat(64),
      sender: address,
      receiver: address,
      value: '1000000000000000000',
      status: 'success'
    };

    expect(
      validateApiListResponse({
        data: [transaction, transaction],
        schema: transactionSchema,
        source: 'transactions'
      })
    ).toBe(true);
    expect(
      validateApiListResponse({
        data: [transaction, { ...transaction, value: '-1' }],
        schema: transactionSchema,
        source: 'transactions'
      })
    ).toBe(false);
    expect(
      validateApiListResponse({
        data: { transactions: [] },
        schema: transactionSchema,
        source: 'transactions'
      })
    ).toBe(false);
  });
});

describe('isNumeric', () => {
  it.each([0, 18, '0', '1000000000000000000000'])('accepts %p', (value) => {
    expect(isNumeric(value)).toBe(true);
  });

  it.each([-1, 1.5, '', '-1', '1e18', '0x10', null, undefined])(
    'rejects %p',
    (value) => {
      expect(isNumeric(value)).toBe(false);
    }
  );
});
