import React, { useEffect, useState, SyntheticEvent } from 'react';
import classNames from 'classnames';

import { FormatAmount } from 'UI/FormatAmount/FormatAmount';
import { getTrimmedHash } from 'utils';
import { getAccountBalance } from 'utils/account/getAccountBalance';
import { getEgldLabel } from 'utils/network/getEgldLabel';

import type { WithClassnameType } from 'UI/types';

import styles from './addressRowStyles.scss';

export interface AddressRowPropsType extends WithClassnameType {
  selectedAddress?: string;
  index: number;
  address: string;
  onSelectAddress: (address: { address: string; index: number } | null) => void;
}

const noBalance = '...';

export const AddressRow = ({
  address,
  index,
  selectedAddress,
  onSelectAddress,
  className = 'dapp-ledger-address-row'
}: AddressRowPropsType) => {
  const [balance, setBalance] = useState(noBalance);

  const handleChange = (event: SyntheticEvent) => {
    const { checked } = event.target as HTMLInputElement;

    if (checked) {
      onSelectAddress({ address, index });
    }
  };

  const fetchBalance = async () => {
    try {
      const balance = await getAccountBalance(address);
      setBalance(balance);
    } catch (err) {
      console.error('error fetching balance', err, balance);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  return (
    <tr className={classNames(className, styles.ledgerTableAddressRow)}>
      <td>
        <div className={styles.ledgerTableAddressRowData}>
          <input
            type='radio'
            id={`check_${index}`}
            data-testid={`check_${index}`}
            onChange={handleChange}
            role='button'
            checked={selectedAddress === address}
            className={styles.ledgerTableAddressRowDataInput}
          />

          <label
            htmlFor={`check_${index}`}
            role='button'
            data-testid={`label_${index}`}
            className={styles.ledgerTableAddressRowDataLabel}
          >
            <div className={styles.ledgerTableAddressRowDataValue}>
              <span>{getTrimmedHash(address)}</span>
            </div>
          </label>
        </div>
      </td>

      <td>
        <div className={styles.ledgerTableAddressRowData}>
          <FormatAmount value={balance} egldLabel={getEgldLabel()} />
        </div>
      </td>

      <td>
        <div className={styles.ledgerTableAddressRowData}>{index}</div>
      </td>
    </tr>
  );
};
