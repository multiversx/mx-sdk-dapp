import { MULTIVERSX_WALLET_ORIGIN } from 'constants/mvx.constants';
import { AccountType } from 'types/account.types';
import { isContract } from 'utils/validation/isContract';
import { getWindowLocation } from 'utils/window/getWindowLocation';

// Don't allow signing if the logged in account's address
// is neither the sender or the sender account's active guardian
export const checkIsValidSender = (
  senderAccount: Partial<AccountType> | null,
  address: string | string[]
) => {
  if (!senderAccount || !senderAccount.address) {
    return true;
  }

  // Allow sender to be different than the logged in address if the origin is multiversx.com
  const isMultiversxWallet = getWindowLocation()?.origin?.endsWith(
    MULTIVERSX_WALLET_ORIGIN
  );

  // Allow multisig contracts to be the sender
  const isSenderContract = isContract(senderAccount.address);
  const isAccountContract = Array.isArray(address)
    ? address.every((addr) => isContract(addr))
    : isContract(address);

  if (isMultiversxWallet || isSenderContract || isAccountContract) {
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
