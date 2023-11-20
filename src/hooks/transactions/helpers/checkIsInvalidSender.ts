import { AccountType } from 'types/account.types';

export const checkIsInvalidSender = (
  senderAccount: Partial<AccountType> | null,
  address: string
) => {
  if (!senderAccount) {
    return false;
  }

  return (
    senderAccount.address !== address &&
    senderAccount.activeGuardianAddress !== address
  );
};
