import React, { ReactNode } from 'react';
import classNames from 'classnames';

import { useGetAccountInfo } from 'hooks';
import { useSelector } from 'reduxStore/DappProviderContext';
import { tokenLoginSelector } from 'reduxStore/selectors';

import type { WithClassnameType } from '../../types';
import type { InnerLedgerComponentsClassesType } from './types';

import styles from './confirmAddressStyles.scss';

export interface ConfirmAddressPropsType extends WithClassnameType {
  token?: string;
  noBorder?: boolean;
  confirmAddressComponentsClasses?: InnerLedgerComponentsClassesType;
  customContentComponent?: ReactNode;
}

export const ConfirmAddress = ({
  token,
  className = 'dapp-ledger-confirm-address',
  customContentComponent,
  confirmAddressComponentsClasses
}: ConfirmAddressPropsType) => {
  const { ledgerAccount } = useGetAccountInfo();
  const tokenLogin = useSelector(tokenLoginSelector);
  const loginToken = tokenLogin?.loginToken ?? token;

  return (
    <div className={classNames(styles.ledgerConfirmAddress, className)}>
      <h4
        className={classNames(
          styles.ledgerConfirmAddressHeading,
          confirmAddressComponentsClasses?.ledgerModalTitleClassName
        )}
      >
        Confirm Ledger Address
      </h4>

      {customContentComponent}

      <div className={styles.ledgerConfirmAddressSection}>
        <div
          className={classNames(
            styles.ledgerConfirmAddressDescription,
            confirmAddressComponentsClasses?.ledgerModalConfirmDescriptionClassName
          )}
        >
          For security, please confirm that your address:
        </div>

        <div
          className={classNames(
            styles.ledgerConfirmAddressData,
            confirmAddressComponentsClasses?.ledgerModalConfirmDataClassName
          )}
        >
          <>{ledgerAccount ?? ''}</>
        </div>
      </div>

      {loginToken && (
        <div className={styles.ledgerConfirmAddressSection}>
          <div
            className={classNames(
              styles.ledgerConfirmAddressDescription,
              confirmAddressComponentsClasses?.ledgerModalConfirmDescriptionClassName
            )}
          >
            and Auth Token:
          </div>

          <div
            className={classNames(
              styles.ledgerConfirmAddressData,
              styles.ledgerConfirmAddressDataHighlighted,
              confirmAddressComponentsClasses?.ledgerModalConfirmDataClassName
            )}
          >
            {`${loginToken}{}`}
          </div>

          <div
            className={classNames(
              styles.ledgerConfirmAddressDescription,
              confirmAddressComponentsClasses?.ledgerModalConfirmDescriptionClassName
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
          confirmAddressComponentsClasses?.ledgerModalConfirmFooterClassName
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
