import { getAuthTokenText } from '../getAuthTokenText';

jest.mock('../getLedgerVersionOptions', () => ({
  __esModule: true,
  default: jest.fn(() => ({ ledgerWithUsernames: true }))
}));

jest.mock('services/nativeAuth/helpers/decodeLoginToken', () => ({
  decodeLoginToken: jest.fn(() => ({ ttl: 120, origin: 'https://example.com' }))
}));

describe('getAuthTokenText', () => {
  it('returns formatted text when ledgerWithUsernames is true', () => {
    const result = getAuthTokenText({
      loginToken: 'token123',
      version: 'v1.0.0'
    });

    expect(result).toEqual({
      data: 'https://example.com for 2min.',
      confirmAddressText: 'Confirm Ledger Address',
      authText: 'Authorise Authentication Token'
    });
  });
});
