import { MULTIVERSX_WALLET_ORIGIN } from 'constants/mvx.constants';
import { AccountType } from 'types/account.types';
import { isContract } from 'utils/validation/isContract';
import { getWindowLocation } from 'utils/window/getWindowLocation';

const isMultiversxWalletOrigin = (origin?: string) => {
  try {
    const { protocol, hostname } = new URL(origin ?? '');

    return (
      protocol === 'https:' &&
      (hostname === MULTIVERSX_WALLET_ORIGIN ||
        hostname.endsWith(`-${MULTIVERSX_WALLET_ORIGIN}`) ||
        hostname.endsWith(`.${MULTIVERSX_WALLET_ORIGIN}`))
    );
  } catch {
    return false;
  }
};

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
  const isMultiversxWallet = isMultiversxWalletOrigin(
    getWindowLocation()?.origin
  );

  // Allow multisig contracts to be the sender
  const isSenderContract = isContract(senderAccount.address);

  if (isMultiversxWallet || isSenderContract) {
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
