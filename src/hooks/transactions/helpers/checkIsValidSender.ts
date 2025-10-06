import { safeWindow } from 'lib/sdkDappUtils';
import { AccountType } from 'types/account.types';

// Don't allow signing if the logged in account's address
// is neither the sender or the sender account's active guardian
export const checkIsValidSender = (
  senderAccount: Partial<AccountType> | null,
  address: string | string[]
) => {
  if (!senderAccount) {
    return true;
  }

  // Allow sender to be different than the logged in address if the origin is multiversx.com
  if (safeWindow?.location?.origin?.endsWith('wallet.multiversx.com')) {
    return true;
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
