import { AccountType } from 'types/account.types';

const originWhiteLists = ['multiversx.com'];

// Don't allow signing if the logged in account's address
// is neither the sender or the sender account's active guardian
export const checkIsValidSender = (
  senderAccount: Partial<AccountType> | null,
  address: string | string[],
  originWhiteList?: string
) => {
  if (!senderAccount) {
    return true;
  }

  // Allow sender to be different than the logged in account's address if the origin is in the white list
  if (originWhiteList) {
    const isOriginWhiteList = originWhiteLists.some((origin) =>
      originWhiteList.endsWith(origin)
    );

    if (isOriginWhiteList) {
      return true;
    }
  }

  if (Array.isArray(address)) {
    return address.some(
      (addr) =>
        senderAccount.address === addr ||
        senderAccount.activeGuardianAddress === addr
    );
  }

  return (
    senderAccount.address === address ||
    senderAccount.activeGuardianAddress === address
  );
};
