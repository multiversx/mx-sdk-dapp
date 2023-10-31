import {
  LEDGER_HASH_SIGN_MINIMUM_VERSION,
  LEDGER_MULTI_ACCOUNT_MINIMUM_VERSION,
  LEDGER_SIGN_AUTH_TOKEN_MINIMUM_VERSION,
  LEDGER_WITH_WHITELISTED_TOKENS_MINIMUM_VERSION,
  LEDGER_WITH_GUARDIANS_MINIMUM_VERSION,
  LEDGER_WITH_USERNAMES_MINIMUM_VERSION
} from 'constants/index';

function compareVersions(a: string, b: string) {
  let i, diff;
  const regExStrip0 = /(\.0+)+$/;
  const segmentsA = a.replace(regExStrip0, '').split('.');
  const segmentsB = b.replace(regExStrip0, '').split('.');
  const l = Math.min(segmentsA.length, segmentsB.length);

  for (i = 0; i < l; i++) {
    diff = parseInt(segmentsA[i], 10) - parseInt(segmentsB[i], 10);
    if (diff) {
      return diff;
    }
  }
  return segmentsA.length - segmentsB.length;
}

export function getLedgerVersionOptions(version: string) {
  const sortedVersions = [
    LEDGER_MULTI_ACCOUNT_MINIMUM_VERSION,
    LEDGER_HASH_SIGN_MINIMUM_VERSION,
    LEDGER_SIGN_AUTH_TOKEN_MINIMUM_VERSION,
    LEDGER_WITH_WHITELISTED_TOKENS_MINIMUM_VERSION,
    LEDGER_WITH_GUARDIANS_MINIMUM_VERSION,
    LEDGER_WITH_USERNAMES_MINIMUM_VERSION,
    version
  ].sort((a, b) => compareVersions(a, b));

  const indexOfMultiAccount = sortedVersions.indexOf(
    LEDGER_MULTI_ACCOUNT_MINIMUM_VERSION
  );
  const indexOfHashSign = sortedVersions.indexOf(
    LEDGER_HASH_SIGN_MINIMUM_VERSION
  );
  const indexOfSignAuthToken = sortedVersions.indexOf(
    LEDGER_SIGN_AUTH_TOKEN_MINIMUM_VERSION
  );
  const indexOfWhitelistedTokens = sortedVersions.indexOf(
    LEDGER_WITH_WHITELISTED_TOKENS_MINIMUM_VERSION
  );
  const indexOfGuardians = sortedVersions.indexOf(
    LEDGER_WITH_GUARDIANS_MINIMUM_VERSION
  );
  const indexOfUsernames = sortedVersions.indexOf(
    LEDGER_WITH_USERNAMES_MINIMUM_VERSION
  );
  const indexOfVersion = sortedVersions.indexOf(version);

  return {
    ledgerWithMultiAccount: indexOfVersion >= indexOfMultiAccount,
    ledgerWithHashSign: indexOfVersion >= indexOfHashSign,
    ledgerWithSignAuthToken: indexOfVersion >= indexOfSignAuthToken,
    ledgerWithWhitelistedTokens: indexOfVersion >= indexOfWhitelistedTokens,
    ledgerWithGuardians: indexOfVersion >= indexOfGuardians,
    ledgerWithUsernames: indexOfVersion >= indexOfUsernames
  };
}

export default getLedgerVersionOptions;
