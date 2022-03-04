import React from 'react';

import icons from 'optionalPackages/fortawesome-free-solid-svg-icons';
import ReactFontawesome from 'optionalPackages/react-fontawesome';
import PageState from 'UI/PageState';
import { getGeneratedClasses } from 'utils';

import AddressRow from './AddressRow';

const ledgerWaitingText = 'Waiting for device';

const addressesPerPage = 10;

interface AddressTablePropsType {
  loading: boolean;
  accounts: string[];
  startIndex: number;
  selectedAddress?: string;
  className: string;
  shouldRenderDefaultCss: boolean;
  onSelectAddress: (address: { address: string; index: number } | null) => void;
  onGoToPrevPage: () => void;
  onGoToNextPage: () => void;
  onConfirmSelectedAddress: () => void;
}

const AddressTable = ({
  loading,
  accounts,
  startIndex,
  selectedAddress,
  onGoToPrevPage,
  onGoToNextPage,
  onConfirmSelectedAddress,
  onSelectAddress,
  shouldRenderDefaultCss = true,
  className = 'ledger-address-table'
}: AddressTablePropsType) => {
  const classes = getGeneratedClasses(className, shouldRenderDefaultCss, {
    wrapper: 'card my-4 text-center border-0',
    cardBody: 'card-body p-4 mx-lg-4',
    tableWrapper: 'table-responsive',
    tableContent: 'table m-0 border-bottom',
    tableHeader: 'py-2 text-semibold border-bottom',
    tableHeaderText: 'text-left border-0',
    buttonsWrapper: 'd-flex justify-content-center pager mt-2',
    arrowButton: 'btn btn-link mx-2',
    confirmButton: 'btn btn-primary px-4 mt-4'
  });
  switch (true) {
    case loading:
      return (
        <PageState
          className={className}
          icon={icons.faCircleNotch}
          iconClass='fa-spin text-primary'
          title={ledgerWaitingText}
        />
      );
    default:
      return (
        <React.Fragment>
          <div className='m-auto'>
            <div className={classes.wrapper}>
              <div className={classes.cardBody}>
                <div
                  className={classes.tableWrapper}
                  data-testid='ledgerAddresses'
                >
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
                <div className={classes.buttonsWrapper}>
                  <button
                    type='button'
                    className={classes.arrowButton}
                    onClick={onGoToPrevPage}
                    data-testid='prevBtn'
                    disabled={startIndex === 0}
                  >
                    <ReactFontawesome.FontAwesomeIcon
                      size='sm'
                      icon={icons.faChevronLeft}
                    />{' '}
                    Prev
                  </button>
                  <button
                    type='button'
                    className={classes.arrowButton}
                    onClick={onGoToNextPage}
                    data-testid='nextBtn'
                  >
                    Next{' '}
                    <ReactFontawesome.FontAwesomeIcon
                      size='sm'
                      icon={icons.faChevronRight}
                    />
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
  }
};

export default AddressTable;
