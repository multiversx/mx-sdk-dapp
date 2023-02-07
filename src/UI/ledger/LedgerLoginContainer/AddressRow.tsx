import React, { SyntheticEvent } from 'react';
import classNames from 'classnames';

import { FormatAmount } from 'UI/FormatAmount/FormatAmount';
import { Trim } from 'UI/Trim';
// import { getAccountBalance } from 'utils/account/getAccountBalance';
import { getEgldLabel } from 'utils/network/getEgldLabel';

import type { WithClassnameType } from '../../types';

import styles from './addressRowStyles.scss';

export interface AddressRowPropsType extends WithClassnameType {
  selectedAddress?: string;
  index: number;
  address: string;
  balance: string;
  onSelectAddress: (address: { address: string; index: number } | null) => void;
  ledgerModalTableSelectedItemClassName?: string;
}

export const AddressRow = ({
  address,
  index,
  balance,
  selectedAddress,
  onSelectAddress,
  className = 'dapp-ledger-address-row',
  ledgerModalTableSelectedItemClassName
}: AddressRowPropsType) => {
  const handleChange = (event: SyntheticEvent) => {
    const { checked } = event.target as HTMLInputElement;

    if (checked) {
      onSelectAddress({ address, index });
    }
  };

  return (
    <div
      className={classNames(
        styles.ledgerAddressTableBodyItem,
        {
          [ledgerModalTableSelectedItemClassName ?? '']:
            selectedAddress === address,
          [styles.ledgerAddressTableBodyItemSelected]:
            selectedAddress === address
        },
        className
      )}
    >
      <div className={styles.ledgerAddressTableBodyItemData}>
        <input
          type='radio'
          id={`check_${index}`}
          data-testid={`check_${index}`}
          onChange={handleChange}
          role='button'
          checked={selectedAddress === address}
          className={styles.ledgerAddressTableBodyItemDataInput}
        />

        <label
          htmlFor={`check_${index}`}
          role='button'
          data-testid={`label_${index}`}
          className={styles.ledgerAddressTableBodyItemDataLabel}
        >
          <div className={styles.ledgerAddressTableBodyItemDataValue}>
            <Trim text={address} />
          </div>
        </label>
      </div>

      <div className={styles.ledgerAddressTableBodyItemData}>
        <FormatAmount value={balance} egldLabel={getEgldLabel()} />
      </div>

      <div className={styles.ledgerAddressTableBodyItemData}>{index}</div>
    </div>
  );
};
