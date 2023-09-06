import { decodeLoginToken } from 'services/nativeAuth/helpers/decodeLoginToken';
import getLedgerVersionOptions from 'utils/operations/ledger/getLedgerVersionOptions';
import { getFormattedDate } from './getFormattedDate';

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

  const description = 'are the one shown on your Ledger device screen now.';

  if (ledgerWithUsernames) {
    const time = getFormattedDate(nativeAuthInfo.ttl);

    return {
      data: `Authorizing ${nativeAuthInfo.origin} for ${time}`,
      description
    };
  }

  return {
    data: `${loginToken}{}`,
    description
  };
};
