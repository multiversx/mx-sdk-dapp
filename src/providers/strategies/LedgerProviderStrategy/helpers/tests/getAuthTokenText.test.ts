import { getAuthTokenText } from '../getAuthTokenText';
import getLedgerVersionOptions from '../getLedgerVersionOptions';

jest.mock('../getLedgerVersionOptions', () => ({
  __esModule: true,
  default: jest.fn()
}));

jest.mock('services/nativeAuth/helpers/decodeLoginToken', () => ({
  decodeLoginToken: jest.fn(() => ({ ttl: 120, origin: 'https://example.com' }))
}));

const mockGetLedgerVersionOptions =
  getLedgerVersionOptions as jest.MockedFunction<
    typeof getLedgerVersionOptions
  >;

describe('getAuthTokenText', () => {
  it('returns formatted text when ledgerWithUsernames is true', () => {
    mockGetLedgerVersionOptions.mockReturnValue({
      ledgerWithUsernames: true
    } as any);

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

  it('returns loginToken as data when ledgerWithUsernames is false', () => {
    mockGetLedgerVersionOptions.mockReturnValue({
      ledgerWithUsernames: false
    } as any);

    const result = getAuthTokenText({
      loginToken: 'token123',
      version: 'v1.0.0'
    });

    expect(result).toEqual({
      data: 'token123',
      confirmAddressText: 'Confirm Ledger Address',
      authText: 'Authorise Authentication Token'
    });
  });
});
