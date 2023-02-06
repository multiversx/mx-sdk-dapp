import React, { ReactNode } from 'react';
import classNames from 'classnames';

import { useGetAccountInfo } from 'hooks';
import { useSelector } from 'reduxStore/DappProviderContext';
import { tokenLoginSelector } from 'reduxStore/selectors';

import type { WithClassnameType } from 'UI/types';
import type { InnerLedgerComponentsClassNamesType } from './types';

import styles from './confirmAddressStyles.scss';

export interface ConfirmAddressPropsType extends WithClassnameType {
  token?: string;
  noBorder?: boolean;
  innerLedgerComponentsClassNames?: InnerLedgerComponentsClassNamesType;
  customContentComponent?: ReactNode;
}

export const ConfirmAddress = ({
  token,
  className = 'dapp-ledger-confirm-address',
  customContentComponent,
  innerLedgerComponentsClassNames
}: ConfirmAddressPropsType) => {
  const { ledgerAccount } = useGetAccountInfo();
  const tokenLogin = useSelector(tokenLoginSelector);
  const loginToken = tokenLogin?.loginToken ?? token;

  return (
    <div className={classNames(styles.ledgerConfirmAddress, className)}>
      <h4
        className={classNames(
          styles.ledgerConfirmAddressHeading,
          innerLedgerComponentsClassNames?.modalLedgerTitleClassName
        )}
      >
        Confirm Ledger Address
      </h4>

      {customContentComponent}

      <div className={styles.ledgerConfirmAddressSection}>
        <div
          className={classNames(
            styles.ledgerConfirmAddressDescription,
            innerLedgerComponentsClassNames?.modalLedgerConfirmDescriptionClassName
          )}
        >
          For security, please confirm that your address:
        </div>

        <div
          className={classNames(
            styles.ledgerConfirmAddressData,
            innerLedgerComponentsClassNames?.modalLedgerConfirmDataClassName
          )}
        >
          {ledgerAccount ? ledgerAccount.address : ''}
        </div>
      </div>

      {loginToken && (
        <div className={styles.ledgerConfirmAddressSection}>
          <div
            className={classNames(
              styles.ledgerConfirmAddressDescription,
              innerLedgerComponentsClassNames?.modalLedgerConfirmDescriptionClassName
            )}
          >
            and Auth Token:
          </div>

          <div
            className={classNames(
              styles.ledgerConfirmAddressData,
              styles.ledgerConfirmAddressDataHighlighted,
              innerLedgerComponentsClassNames?.modalLedgerConfirmDataClassName
            )}
          >
            {`${loginToken}{}`}
          </div>

          <div
            className={classNames(
              styles.ledgerConfirmAddressDescription,
              innerLedgerComponentsClassNames?.modalLedgerConfirmDescriptionClassName
            )}
          >
            {loginToken
              ? 'are the one shown on your Ledger device screen now.'
              : 'is the one shown on your Ledger device screen now.'}
          </div>
        </div>
      )}

      <div
        className={classNames(
          styles.ledgerConfirmAddressFooter,
          innerLedgerComponentsClassNames?.modalLedgerConfirmFooterClassName
        )}
      >
        <div>Select Approve on your device to confirm.</div>

        <div>
          Or, if it does not match, close this page and{' '}
          <a
            href='https://help.multiversx.com/en/'
            target='_blank'
            rel='noreferrer'
          >
            contact support
          </a>
          .
        </div>
      </div>
    </div>
  );
};
