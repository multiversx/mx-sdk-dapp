import { decodeLoginToken } from 'services/nativeAuth/helpers/decodeLoginToken';
import getLedgerVersionOptions from 'utils/operations/ledger/getLedgerVersionOptions';
import { secondsToTimeString } from './secondsToTimeString';

export const getAuthTokenText = ({
  loginToken,
  version
}: {
  loginToken?: string;
  version?: string;
}) => {
  if (!loginToken || !version) {
    return null;
  }

  const { ledgerWithUsernames } = getLedgerVersionOptions(version);
  const nativeAuthInfo = decodeLoginToken(loginToken);
  if (nativeAuthInfo == null) {
    return null;
  }

  if (ledgerWithUsernames) {
    const time = secondsToTimeString(nativeAuthInfo.ttl);

    return {
      data: `${nativeAuthInfo.origin} for ${time}`
    };
  }

  return {
    data: `${loginToken}{}`
  };
};
