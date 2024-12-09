import React, { ReactNode, useEffect, useState } from 'react';
import classNames from 'classnames';

import { DataTestIdsEnum } from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { Pagination } from 'UI/Pagination';
import { getAccountBalance } from 'utils/account/getAccountBalance';

import { WithClassnameType } from '../../../types';
import { AddressRow } from '../AddressRow';
import { LedgerColumnsEnum } from '../enums';
import { LedgerLoading } from '../LedgerLoading';

const ADDRESSES_PER_PAGE = 10;
const TOTAL_ADDRESSES_COUNT = 5000;

export interface AddressTablePropsType extends WithClassnameType {
  accounts: string[];
  disabledIndexes?: number[];
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
  addressesCount?: number;
  customContentComponent?: ReactNode;
  dataTestId?: string;
  loading: boolean;
  onConfirmSelectedAddress: () => void;
  onGoToSpecificPage: (page: number) => void;
  onGoToNextPage: () => void;
  onGoToPrevPage: () => void;
  onSelectAddress: (address: { address: string; index: number } | null) => void;
  selectedAddress?: string;
  startIndex: number;
}

const AddressTableComponent = ({
  accounts,
  addressTableClassNames,
  addressesCount = TOTAL_ADDRESSES_COUNT,
  className = 'dapp-ledger-address-table',
  customContentComponent,
  dataTestId = DataTestIdsEnum.addressTableContainer,
  loading,
  onConfirmSelectedAddress,
  onGoToSpecificPage,
  onGoToNextPage,
  onGoToPrevPage,
  onSelectAddress,
  selectedAddress,
  startIndex,
  disabledIndexes = [],
  globalStyles,
  styles
}: AddressTablePropsType & WithStylesImportType) => {
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

  const getFirstUnusedIndex = () => {
    let indexToCheck = 0;
    while (disabledIndexes.includes(indexToCheck)) {
      indexToCheck++;
    }
    return indexToCheck;
  };

  useEffect(() => {
    const isAccountsLoaded = accounts.length > 0 && !loading;

    const isFirstPageAndNoAddressSelected =
      !selectedAddress && startIndex === 0;

    const shouldSelectFirstAddress =
      isAccountsLoaded && isFirstPageAndNoAddressSelected;
    if (shouldSelectFirstAddress) {
      const index = getFirstUnusedIndex();
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

  const handlePageChange = (newPage: number) => {
    if (newPage - 1 === startIndex + 1) {
      onGoToNextPage();
      return;
    }

    if (newPage - 1 === startIndex - 1) {
      onGoToPrevPage();
      return;
    }

    onGoToSpecificPage(newPage - 1);
  };

  const totalPages = Math.ceil(addressesCount / ADDRESSES_PER_PAGE);
  const columns = [
    LedgerColumnsEnum.Address,
    LedgerColumnsEnum.Balance,
    LedgerColumnsEnum.Hash
  ];

  return (
    <div
      className={classNames(styles?.ledgerAddressTableWrapper, className)}
      data-testid={dataTestId}
    >
      <div className={styles?.ledgerAddressTableTop}>
        <div
          className={classNames(
            styles?.ledgerAddressTableHeading,
            ledgerModalTitleClassName
          )}
          data-testid={`${dataTestId}Title`}
        >
          Access your wallet
        </div>

        <p
          className={classNames(
            styles?.ledgerAddressTableDescription,
            ledgerModalSubtitleClassName
          )}
          data-testid={`${dataTestId}SubTitle`}
        >
          Choose the wallet you want to access
        </p>
      </div>

      {customContentComponent}

      <div className={styles?.ledgerAddressTable}>
        <div
          className={classNames(
            styles?.ledgerAddressTableHeader,
            ledgerModalTableHeadClassName
          )}
        >
          {columns.map((column) => (
            <div key={column} className={styles?.ledgerAddressTableHeaderItem}>
              {column}
            </div>
          ))}
        </div>

        <div className={styles?.ledgerAddressTableBody}>
          {accountsWithBalance &&
            accountsWithBalance.map(({ address, balance }, index) => (
              <AddressRow
                address={address}
                balance={balance}
                disabled={disabledIndexes.includes(index)}
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

      <div className={styles?.ledgerAddressTableBottom}>
        <Pagination
          className={styles?.ledgerAddressTablePagination}
          currentPage={startIndex + 1}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          disabledClassName={ledgerModalTableNavigationButtonDisabledClassName}
          buttonsClassNames={ledgerModalTableNavigationButtonClassName}
        />

        <button
          disabled={!selectedAddress}
          onClick={onConfirm}
          data-testid={DataTestIdsEnum.confirmBtn}
          className={classNames(
            globalStyles?.btn,
            globalStyles?.btnPrimary,
            styles?.ledgerAddressTableButton,
            ledgerModalButtonClassName
          )}
        >
          Access Wallet
        </button>
      </div>
    </div>
  );
};

export const AddressTable = withStyles(AddressTableComponent, {
  ssrStyles: () =>
    import(
      'UI/ledger/LedgerLoginContainer/AddressTable/addressTableStyles.scss'
    ),
  clientStyles: () =>
    require('UI/ledger/LedgerLoginContainer/AddressTable/addressTableStyles.scss')
      .default
});
