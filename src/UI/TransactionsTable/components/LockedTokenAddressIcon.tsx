import React from 'react';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { useGetTokenDetails } from 'hooks/transactions/useGetTokenDetails';
import { addressIsValid } from 'utils/account/addressIsValid';

const LockedTokenAddressIconComponent = ({
  address,
  tokenId,
  globalStyles
}: {
  address: string;
  tokenId: string;
} & WithStylesImportType) => {
  const tokenDetails = useGetTokenDetails({ tokenId });
  const lockedAccounts = tokenDetails.assets?.lockedAccounts;
  if (lockedAccounts) {
    const validLockedAccounts = Object.keys(lockedAccounts).filter(
      (account) => {
        if (addressIsValid(account)) {
          return account === address;
        }

        return addressIsValid(lockedAccounts[account])
          ? lockedAccounts[account] === address
          : false;
      }
    );
    const lockedAccountName =
      tokenDetails.assets?.lockedAccounts?.[validLockedAccounts[0]];

    return lockedAccountName ? (
      <FontAwesomeIcon
        title={lockedAccountName}
        icon={faLock}
        size='xs'
        className={classNames(globalStyles?.mr1, globalStyles?.textSecondary)}
      />
    ) : null;
  }

  return null;
};

export const LockedTokenAddressIcon = withStyles(
  LockedTokenAddressIconComponent,
  {}
);
