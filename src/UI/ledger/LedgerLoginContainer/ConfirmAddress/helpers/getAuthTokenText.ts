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

  const confirmAddressText = 'For security, please confirm that your address:';
  const authText = 'and Auth Token:';
  const areShownText = 'are the one shown on your Ledger device screen now.';

  if (ledgerWithUsernames) {
    const time = secondsToTimeString(nativeAuthInfo.ttl);

    const confirmAddressText = 'For security, please confirm your address:';
    const authText = 'and authorize:';

    return {
      data: `${nativeAuthInfo.origin} for ${time}.`,
      confirmAddressText,
      authText
    };
  }

  return {
    data: `${loginToken}{}`,
    confirmAddressText,
    authText,
    areShownText
  };
};
