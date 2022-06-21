import React from 'react';
import globalStyles from 'assets/sass/main.scss';
import icons from 'optionalPackages/fortawesome-free-solid-svg-icons';
import ReactFontawesome from 'optionalPackages/react-fontawesome';
import PageState from 'UI/PageState';
import { getGeneratedClasses } from 'utils';
import styles from './address-table.scss';
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
  className = styles.ledgerAddressTable
}: AddressTablePropsType) => {
  const classes = getGeneratedClasses(className, shouldRenderDefaultCss, {
    wrapper: `${globalStyles.card} ${globalStyles.p4} ${globalStyles.mxLg4}`,
    cardBody: `${globalStyles.cardBody} ${globalStyles.p4} ${globalStyles.mxLg4}`,
    tableWrapper: globalStyles.tableResponsive,
    tableContent: `${globalStyles.table} ${globalStyles.m0} ${globalStyles.borderBottom}`,
    tableHeader: `${globalStyles.py2} ${globalStyles.textBlack50} ${globalStyles.borderBottom}`,
    tableHeaderText: `${globalStyles.textLeft} ${globalStyles.border0}`,
    buttonsWrapper: `${globalStyles.dFlex} ${globalStyles.justifyContentCenter} ${globalStyles.mt2}`,
    arrowButton: `${globalStyles.btn} ${globalStyles.btnLink} ${globalStyles.mx2}`,
    confirmButton: `${globalStyles.btn} ${globalStyles.btnPrimary} ${globalStyles.px2} ${globalStyles.mt4}`
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
