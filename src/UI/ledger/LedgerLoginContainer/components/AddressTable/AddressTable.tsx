import React, { useEffect } from 'react';
import {
  faChevronLeft,
  faChevronRight,
  faCircleNotch
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import { PageState } from 'UI/PageState';

import type { WithClassnameType } from 'UI/types';

import { AddressRow } from './components/AddressRow';

import globalStyles from 'assets/sass/main.scss';
import styles from './addressTableStyles.scss';

const LEDGER_WAITING_TEXT = 'Waiting for device';
const ADDRESSES_PER_PAGE = 10;

export interface AddressTablePropsType extends WithClassnameType {
  loading: boolean;
  accounts: string[];
  startIndex: number;
  selectedAddress?: string;
  onSelectAddress: (address: { address: string; index: number } | null) => void;
  onGoToPrevPage: () => void;
  onGoToNextPage: () => void;
  onConfirmSelectedAddress: () => void;
}

export const AddressTable = ({
  loading,
  accounts,
  startIndex,
  selectedAddress,
  onGoToPrevPage,
  onGoToNextPage,
  onConfirmSelectedAddress,
  onSelectAddress,
  className = 'dapp-ledger-address-table'
}: AddressTablePropsType) => {
  useEffect(() => {
    const isAccountsLoaded = accounts.length > 0 && !loading;

    const isFirstPageAndNoAddressSelected =
      !selectedAddress && startIndex === 0;

    const shouldSelectFirstAddress =
      isAccountsLoaded && isFirstPageAndNoAddressSelected;
    if (shouldSelectFirstAddress) {
      const index = 0;
      const address = accounts[index];
      onSelectAddress({ address, index });
    }
  }, [accounts, selectedAddress, loading, startIndex]);

  if (loading) {
    return (
      <PageState
        icon={faCircleNotch}
        iconClass={classNames('fa-spin', globalStyles.textPrimary)}
        title={LEDGER_WAITING_TEXT}
      />
    );
  }
  return (
    <div className={classNames(styles.ledgerAddresses, className)}>
      <div
        className={styles.ledgerAddressesTableWrapper}
        data-testid='ledgerAddresses'
      >
        <table className={styles.ledgerAddressesTable}>
          <thead className={styles.ledgerAddressesTableHead}>
            <tr>
              <th className={styles.ledgerAddressesTableHeadCell}>Address</th>
              <th className={styles.ledgerAddressesTableHeadCell}>Balance</th>
              <th className={styles.ledgerAddressesTableHeadCell}>#</th>
            </tr>
          </thead>

          <tbody data-testid='addressesTable'>
            {accounts.map((address, index) => {
              const key = index + startIndex * ADDRESSES_PER_PAGE;

              return (
                <AddressRow
                  key={key}
                  address={address}
                  index={key}
                  selectedAddress={selectedAddress}
                  onSelectAddress={onSelectAddress}
                />
              );
            })}
          </tbody>
        </table>
      </div>

      <div className={styles.ledgerAddressesNavigation}>
        <button
          type='button'
          onClick={onGoToPrevPage}
          data-testid='prevBtn'
          className={classNames(styles.ledgerAddressesNavigationButton, {
            [styles.ledgerAddressesNavigationButtonDisabled]: startIndex === 0
          })}
        >
          <FontAwesomeIcon size='1x' icon={faChevronLeft} />
        </button>

        <button
          type='button'
          className={styles.ledgerAddressesNavigationButton}
          onClick={onGoToNextPage}
          data-testid='nextBtn'
        >
          <FontAwesomeIcon size='1x' icon={faChevronRight} />
        </button>
      </div>

      <button
        disabled={selectedAddress === ''}
        onClick={onConfirmSelectedAddress}
        data-testid='confirmBtn'
        className={classNames(
          globalStyles.btn,
          globalStyles.btnPrimary,
          styles.ledgerAddressesButton
        )}
      >
        Confirm
      </button>
    </div>
  );
};
