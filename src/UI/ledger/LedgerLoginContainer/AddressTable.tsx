import React, { ReactNode, useEffect, useState } from 'react';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import globalStyles from 'assets/sass/main.scss';
import { getAccountBalance } from 'utils';
import type { WithClassnameType } from '../../types';

import { AddressRow } from './AddressRow';

import styles from './addressTableStyles.scss';
import { LedgerColumnsEnum } from './enums';

import { LedgerLoading } from './LedgerLoading';

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
  customContentComponent?: ReactNode;
  addressTableClassNames?: {
    ledgerModalTitleClassName?: string;
    ledgerModalSubtitleClassName?: string;
    ledgerModalTableHeadClassName?: string;
    ledgerModalTableItemClassName?: string;
    ledgerModalButtonClassName?: string;
    ledgerModalTableNavigationButtonClassName?: string;
    ledgerModalTableSelectedItemClassName?: string;
    ledgerModalTableNavigationButtonDisabledClassName?: string;
  };
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
  className = 'dapp-ledger-address-table',
  customContentComponent,
  addressTableClassNames
}: AddressTablePropsType) => {
  const {
    ledgerModalTitleClassName,
    ledgerModalSubtitleClassName,
    ledgerModalTableHeadClassName,
    ledgerModalTableItemClassName,
    ledgerModalButtonClassName,
    ledgerModalTableNavigationButtonClassName,
    ledgerModalTableSelectedItemClassName,
    ledgerModalTableNavigationButtonDisabledClassName
  } = addressTableClassNames || {};
  const [accountsWithBalance, setAccountsWithBalance] = useState<
    Array<{ address: string; balance: string }>
  >([]);
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

  const fetchBalance = async (address: string) => {
    try {
      const balance = await getAccountBalance(address);
      return { address, balance };
    } catch (err) {
      console.error('error fetching balance', err);
      throw accountsWithBalance;
    }
  };

  useEffect(() => {
    const balancePromises = accounts.map((account) => fetchBalance(account));
    setAccountsWithBalance(
      accounts.map((account) => ({ address: account, balance: '...' }))
    );
    Promise.all(balancePromises).then((balances) => {
      setAccountsWithBalance(balances);
    });
  }, [accounts]);

  if (loading) {
    return <LedgerLoading />;
  }

  const onConfirm = () => {
    if (!selectedAddress) {
      return;
    }

    onConfirmSelectedAddress();
  };

  const columns = [
    LedgerColumnsEnum.Address,
    LedgerColumnsEnum.Balance,
    LedgerColumnsEnum.Hash
  ];

  return (
    <div className={classNames(styles.ledgerAddressTableWrapper, className)}>
      <div className={styles.ledgerAddressTableTop}>
        <div
          className={classNames(
            styles.ledgerAddressTableHeading,
            ledgerModalTitleClassName
          )}
        >
          Access your wallet
        </div>

        <p
          className={classNames(
            styles.ledgerAddressTableDescription,
            ledgerModalSubtitleClassName
          )}
        >
          Choose the wallet you want to access
        </p>
      </div>

      {customContentComponent}

      <div className={styles.ledgerAddressTable}>
        <div
          className={classNames(
            styles.ledgerAddressTableHeader,
            ledgerModalTableHeadClassName
          )}
        >
          {columns.map((column) => (
            <div key={column} className={styles.ledgerAddressTableHeaderItem}>
              {column}
            </div>
          ))}
        </div>

        <div className={styles.ledgerAddressTableBody}>
          {accountsWithBalance &&
            accountsWithBalance.map(({ address, balance }, index) => (
              <AddressRow
                address={address}
                balance={balance}
                key={index + startIndex * ADDRESSES_PER_PAGE}
                index={index + startIndex * ADDRESSES_PER_PAGE}
                selectedAddress={selectedAddress}
                onSelectAddress={onSelectAddress}
                className={ledgerModalTableItemClassName}
                ledgerModalTableSelectedItemClassName={
                  ledgerModalTableSelectedItemClassName
                }
              />
            ))}
        </div>
      </div>

      <div className={styles.ledgerAddressTableBottom}>
        <div className={styles.ledgerAddressTableNavigation}>
          <button
            type='button'
            onClick={onGoToPrevPage}
            data-testid='prevBtn'
            className={classNames(
              styles.ledgerAddressTableNavigationButton,
              {
                [ledgerModalTableNavigationButtonDisabledClassName ?? '']:
                  startIndex === 0,
                [styles.ledgerAddressTableNavigationButtonDisabled]:
                  startIndex === 0
              },
              ledgerModalTableNavigationButtonClassName
            )}
          >
            <FontAwesomeIcon size='1x' icon={faChevronLeft} />

            <span className={styles.ledgerAddressTableNavigationButtonLabel}>
              Prev
            </span>
          </button>

          <button
            type='button'
            onClick={onGoToNextPage}
            data-testid='nextBtn'
            className={classNames(
              styles.ledgerAddressTableNavigationButton,
              {
                [styles.ledgerAddressTableNavigationButtonDisabled]:
                  accounts.length < 10
              },
              ledgerModalTableNavigationButtonClassName
            )}
          >
            <span className={styles.ledgerAddressTableNavigationButtonLabel}>
              Next
            </span>

            <FontAwesomeIcon size='1x' icon={faChevronRight} />
          </button>
        </div>

        <button
          disabled={!selectedAddress}
          onClick={onConfirm}
          data-testid='confirmBtn'
          className={classNames(
            globalStyles.btn,
            globalStyles.btnPrimary,
            styles.ledgerAddressTableButton,
            ledgerModalButtonClassName
          )}
        >
          Access Wallet
        </button>
      </div>
    </div>
  );
};
