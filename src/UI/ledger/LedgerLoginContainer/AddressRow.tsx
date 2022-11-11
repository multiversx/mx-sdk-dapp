import React, { useEffect, useState, SyntheticEvent } from 'react';
import classNames from 'classnames';

import globalStyles from 'assets/sass/main.scss';
import { FormatAmount } from 'UI/FormatAmount/FormatAmount';
import { getTrimmedHash } from 'utils';
import { getAccountBalance } from 'utils/account/getAccountBalance';
import { getEgldLabel } from 'utils/network/getEgldLabel';
import { WithClassnameType } from '../../types';

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
    <tr className={className}>
      <td className={globalStyles.textLeft}>
        <div
          className={classNames(
            globalStyles.flexRow,
            globalStyles.alignItemsStart,
            globalStyles.textLeft,
            globalStyles.formCheck
          )}
        >
          <input
            type='radio'
            id={`check_${index}`}
            data-testid={`check_${index}`}
            onChange={handleChange}
            role='button'
            checked={selectedAddress === address}
            className={classNames(
              globalStyles.formCheckInput,
              globalStyles.mr1
            )}
          />

          <label
            htmlFor={`check_${index}`}
            role='button'
            data-testid={`label_${index}`}
            className={classNames(
              globalStyles.formCheckLabel,
              globalStyles.textNowrap,
              globalStyles.m0
            )}
          >
            <div
              className={classNames(
                globalStyles.flexRow,
                globalStyles.alignItemsCenter,
                globalStyles.textNowrap
              )}
            >
              <span>{getTrimmedHash(address)}</span>
            </div>
          </label>
        </div>
      </td>

      <td className={globalStyles.textLeft}>
        <FormatAmount value={balance} egldLabel={getEgldLabel()} />
      </td>

      <td className={globalStyles.textLeft}>{index}</td>
    </tr>
  );
};
