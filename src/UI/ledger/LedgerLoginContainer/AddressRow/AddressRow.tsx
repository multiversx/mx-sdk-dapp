import React, { SyntheticEvent } from 'react';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { FormatAmount } from 'UI/FormatAmount/FormatAmount';
import { Trim } from 'UI/Trim';
import { getEgldLabel } from 'utils/network/getEgldLabel';
import { WithClassnameType } from '../../../types';

export interface AddressRowPropsType extends WithClassnameType {
  selectedAddress?: string;
  index: number;
  address: string;
  balance: string;
  onSelectAddress: (address: { address: string; index: number } | null) => void;
  ledgerModalTableSelectedItemClassName?: string;
  disabled: boolean;
}

const AddressRowComponent = ({
  address,
  index,
  balance,
  selectedAddress,
  onSelectAddress,
  className = 'dapp-ledger-address-row',
  ledgerModalTableSelectedItemClassName,
  disabled = false,
  styles
}: AddressRowPropsType & WithStylesImportType) => {
  const handleChange = (event: SyntheticEvent) => {
    const { checked } = event.target as HTMLInputElement;

    if (checked) {
      onSelectAddress({ address, index });
    }
  };

  return (
    <div
      className={classNames(
        styles?.ledgerAddressTableBodyItem,
        {
          [ledgerModalTableSelectedItemClassName ?? '']:
            selectedAddress === address,
          [styles?.ledgerAddressTableBodyItemSelected ?? '']:
            selectedAddress === address
        },
        className
      )}
    >
      <div
        className={classNames(styles?.ledgerAddressTableBodyItemData, {
          disabled
        })}
      >
        <input
          type='radio'
          id={`check_${address}`}
          disabled={disabled}
          data-testid={`check_${address}`}
          onChange={handleChange}
          role='button'
          checked={selectedAddress === address}
          className={styles?.ledgerAddressTableBodyItemDataInput}
        />

        <label
          htmlFor={`check_${index}`}
          role='button'
          data-testid={`label_${index}`}
          className={styles?.ledgerAddressTableBodyItemDataLabel}
        >
          <div className={styles?.ledgerAddressTableBodyItemDataValue}>
            <Trim text={address} />
          </div>
        </label>
      </div>

      <div className={styles?.ledgerAddressTableBodyItemData}>
        <FormatAmount value={balance} egldLabel={getEgldLabel()} />
      </div>

      <div className={styles?.ledgerAddressTableBodyItemData}>{index}</div>
    </div>
  );
};

export const AddressRow = withStyles(AddressRowComponent, {
  ssrStyles: () =>
    import('UI/ledger/LedgerLoginContainer/AddressRow/addressRowStyles.scss'),
  clientStyles: () =>
    require('UI/ledger/LedgerLoginContainer/AddressRow/addressRowStyles.scss')
      .default
});
