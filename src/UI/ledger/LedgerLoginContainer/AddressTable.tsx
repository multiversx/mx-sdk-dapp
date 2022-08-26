import React from 'react';
import {
  faChevronLeft,
  faChevronRight,
  faCircleNotch
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { PageState } from 'UI/PageState';
import { WithClassnameType } from '../../types';
import { AddressRow } from './AddressRow';
import styles from './addressTableStyles.scss';

const LEDGER_WAITING_TEXT = 'Waiting for device';

const ADDRESSES_PER_PAGE = 10;

interface AddressTablePropsType extends WithClassnameType {
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
  const classes = {
    wrapper: classNames(globalStyles.card, globalStyles.px4, className),
    cardBody: `${globalStyles.cardBody} ${globalStyles.p4}`,
    tableWrapper: globalStyles.tableResponsive,
    tableContent: `${styles.ledgerAddressTable} ${globalStyles.table} ${globalStyles.m0} ${globalStyles.borderBottom}`,
    tableHeader: `${globalStyles.py2} ${globalStyles.textBlack50} ${globalStyles.borderBottom}`,
    tableHeaderText: `${globalStyles.textLeft} ${globalStyles.border0}`,
    buttonsWrapper: `${globalStyles.dFlex} ${globalStyles.justifyContentCenter} ${globalStyles.mt2}`,
    arrowButton: `${globalStyles.btn} ${globalStyles.btnLink} ${globalStyles.mx2}`,
    confirmButton: `${globalStyles.btn} ${globalStyles.btnPrimary} ${globalStyles.px4} ${globalStyles.mt4}`
  };

  if (loading) {
    return (
      <PageState
        icon={faCircleNotch}
        iconClass={`fa-spin ${globalStyles.textPrimary}`}
        title={LEDGER_WAITING_TEXT}
      />
    );
  }
  return (
    <>
      <div className={globalStyles.mAuto}>
        <div className={classes.wrapper}>
          <div className={classes.cardBody}>
            <div className={classes.tableWrapper} data-testid='ledgerAddresses'>
              <table className={classes.tableContent}>
                <thead className={classes.tableHeader}>
                  <tr>
                    <th className={classes.tableHeaderText}>Address</th>
                    <th className={classes.tableHeaderText}>Balance</th>
                    <th className={classes.tableHeaderText}>#</th>
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
            <div className={classes.buttonsWrapper}>
              <button
                type='button'
                className={classes.arrowButton}
                onClick={onGoToPrevPage}
                data-testid='prevBtn'
                disabled={startIndex === 0}
              >
                <FontAwesomeIcon size='sm' icon={faChevronLeft} /> Prev
              </button>
              <button
                type='button'
                className={classNames(
                  classes.arrowButton,
                  globalStyles.linkSecondStyle
                )}
                onClick={onGoToNextPage}
                data-testid='nextBtn'
              >
                Next <FontAwesomeIcon size='sm' icon={faChevronRight} />
              </button>
            </div>
            <div className={globalStyles.centering}>
              <button
                className={classes.confirmButton}
                disabled={selectedAddress === ''}
                onClick={onConfirmSelectedAddress}
                data-testid='confirmBtn'
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
