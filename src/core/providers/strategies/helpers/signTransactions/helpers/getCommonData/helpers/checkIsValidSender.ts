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
