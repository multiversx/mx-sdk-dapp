import React from 'react';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGetTokenDetails } from 'hooks';
import { addressIsBech32 } from 'utils';

export const LockedTokenAddressIcon = ({
  address,
  tokenId
}: {
  address: string;
  tokenId: string;
}) => {
  const tokenDetails = useGetTokenDetails({ tokenId });
  const lockedAccounts = tokenDetails.assets?.lockedAccounts;
  if (lockedAccounts) {
    const validLockedAccounts = Object.keys(lockedAccounts).filter(
      (account) => {
        const validAddress = addressIsBech32(account)
          ? account
          : addressIsBech32(lockedAccounts[account])
          ? lockedAccounts[account]
          : '';

        return validAddress === address;
      }
    );
    const lockedAccountName =
      tokenDetails.assets?.lockedAccounts?.[validLockedAccounts[0]];

    return lockedAccountName ? (
      <FontAwesomeIcon
        title={lockedAccountName}
        icon={faLock}
        size='xs'
        className='mr-1 text-secondary'
      />
    ) : null;
  }

  return null;
};
