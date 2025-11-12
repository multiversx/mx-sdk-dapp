import ledgerVersionOptions from '../helpers/authenticateLedgerAccount/helpers/getLedgerVersionOptions';

describe('ledgerOptions tests', () => {
  test('detects ledger without multiAccount', () => {
    expect(ledgerVersionOptions('1.0.6')).toStrictEqual({
      ledgerWithHashSign: false,
      ledgerWithMultiAccount: false,
      ledgerWithSignAuthToken: false,
      ledgerWithWhitelistedTokens: false,
      ledgerWithGuardians: false,
      ledgerWithUsernames: false
    });
  });
  test('ledger with multiAccount', () => {
    expect(ledgerVersionOptions('1.0.8')).toStrictEqual({
      ledgerWithHashSign: false,
      ledgerWithMultiAccount: true,
      ledgerWithSignAuthToken: false,
      ledgerWithWhitelistedTokens: false,
      ledgerWithGuardians: false,
      ledgerWithUsernames: false
    });
  });
  test('ledger with hashSign', () => {
    expect(ledgerVersionOptions('1.0.11')).toStrictEqual({
      ledgerWithHashSign: true,
      ledgerWithMultiAccount: true,
      ledgerWithSignAuthToken: false,
      ledgerWithWhitelistedTokens: false,
      ledgerWithGuardians: false,
      ledgerWithUsernames: false
    });
  });
  test('ledger with tokenSign', () => {
    expect(ledgerVersionOptions('1.0.15')).toStrictEqual({
      ledgerWithHashSign: true,
      ledgerWithMultiAccount: true,
      ledgerWithSignAuthToken: true,
      ledgerWithWhitelistedTokens: false,
      ledgerWithGuardians: false,
      ledgerWithUsernames: false
    });
  });
  test('ledger with tokens', () => {
    expect(ledgerVersionOptions('1.0.17')).toStrictEqual({
      ledgerWithHashSign: true,
      ledgerWithMultiAccount: true,
      ledgerWithSignAuthToken: true,
      ledgerWithWhitelistedTokens: true,
      ledgerWithGuardians: false,
      ledgerWithUsernames: false
    });
  });
  test('ledger with latest tokens', () => {
    expect(ledgerVersionOptions('1.0.22')).toStrictEqual({
      ledgerWithHashSign: true,
      ledgerWithMultiAccount: true,
      ledgerWithSignAuthToken: true,
      ledgerWithWhitelistedTokens: true,
      ledgerWithGuardians: true,
      ledgerWithUsernames: false
    });
  });
  test('ledger with usernames', () => {
    expect(ledgerVersionOptions('1.0.23')).toStrictEqual({
      ledgerWithHashSign: true,
      ledgerWithMultiAccount: true,
      ledgerWithSignAuthToken: true,
      ledgerWithWhitelistedTokens: true,
      ledgerWithGuardians: true,
      ledgerWithUsernames: true
    });
  });
  test('latest ledger version', () => {
    expect(ledgerVersionOptions('1.1.1')).toStrictEqual({
      ledgerWithHashSign: true,
      ledgerWithMultiAccount: true,
      ledgerWithSignAuthToken: true,
      ledgerWithWhitelistedTokens: true,
      ledgerWithGuardians: true,
      ledgerWithUsernames: true
    });
  });
});
