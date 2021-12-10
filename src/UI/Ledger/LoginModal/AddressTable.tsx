import React from 'react';
import {
  faChevronLeft,
  faChevronRight,
  faCircleNotch
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PageState from 'UI/PageState';
import { getGeneratedClasses } from '../../../utils';
import AddressRow from './AddressRow';

const ledgerWaitingText = 'Waiting for device';

const addressesPerPage = 10;

interface AddressTablePropsType {
  className?: string;
  shouldRenderDefaultCss?: boolean;
  loading: boolean;
  accounts: string[];
  startIndex: number;
  selectedAddress?: string;
  onSelectAddress: (address: { address: string; index: number } | null) => void;
  onGoToPrevPage: () => void;
  onGoToNextPage: () => void;
  onConfirmSelectedAddress: () => void;
}

const AddressTable = ({
  className = 'ledger-address-table',
  shouldRenderDefaultCss = true,
  loading,
  accounts,
  startIndex,
  selectedAddress,
  onGoToPrevPage,
  onGoToNextPage,
  onConfirmSelectedAddress,
  onSelectAddress
}: AddressTablePropsType) => {
  const classes = getGeneratedClasses(className, shouldRenderDefaultCss, {
    spinner: 'fa-spin text-primary',
    wrapper: 'm-auto',
    contentWrapper: 'card my-4 text-center',
    cardBody: 'card-body p-4 mx-lg-4',
    tableWrapper: 'table-responsive',
    table: 'table m-0 border-bottom',
    tableHead: 'py-2 text-semibold border-bottom',
    tableHeadCell: 'text-left border-0',
    addressesTable: '',
    buttonsContainer: 'd-flex justify-content-center pager mt-2',
    navigationButton: 'btn btn-link mx-2',
    confirmButton: 'btn btn-primary px-4 mt-4'
  });

  if (loading) {
    return (
      <PageState
        icon={faCircleNotch}
        iconClass={classes.spinner}
        title={ledgerWaitingText}
      />
    );
  }
  return (
    <React.Fragment>
      <div className={classes.wrapper}>
        <div className={classes.contentWrapper}>
          <div className={classes.cardBody}>
            <div className={classes.tableWrapper} data-testid='ledgerAddresses'>
              <table className={classes.table}>
                <thead className={classes.tableHead}>
                  <tr>
                    <th className={classes.tableHeadCell}>Address</th>
                    <th className={classes.tableHeadCell}>Balance</th>
                    <th className={classes.tableHeadCell}>#</th>
                  </tr>
                </thead>
                <tbody
                  className={classes.addressesTable}
                  data-testid='addressesTable'
                >
                  {accounts.map((address, index) => {
                    const key = index + startIndex * addressesPerPage;
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
            <div className={classes.buttonsContainer}>
              <button
                type='button'
                className={classes.navigationButton}
                onClick={onGoToPrevPage}
                data-testid='prevBtn'
                disabled={startIndex === 0}
              >
                <FontAwesomeIcon size='sm' icon={faChevronLeft} /> Prev
              </button>
              <button
                type='button'
                className={classes.navigationButton}
                onClick={onGoToNextPage}
                data-testid='nextBtn'
              >
                Next <FontAwesomeIcon size='sm' icon={faChevronRight} />
              </button>
            </div>
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
    </React.Fragment>
  );
};

export default AddressTable;
