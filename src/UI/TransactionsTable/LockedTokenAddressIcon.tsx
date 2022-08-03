import React from 'react';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGetTokenDetails } from 'hooks';
import { addressIsValid } from 'utils';
import globalStyles from 'assets/sass/main.scss';
import classNames from 'classnames';

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
        const validAddress = addressIsValid(account)
          ? account
          : addressIsValid(lockedAccounts[account])
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
        className={classNames(globalStyles.mr1, globalStyles.textSecondary)}
      />
    ) : null;
  }

  return null;
};
