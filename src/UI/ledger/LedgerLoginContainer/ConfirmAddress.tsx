import React, { ReactNode } from 'react';
import classNames from 'classnames';

import { useGetAccountInfo } from 'hooks';
import { useSelector } from 'reduxStore/DappProviderContext';
import { tokenLoginSelector } from 'reduxStore/selectors';

import type { WithClassnameType } from '../../types';
import type { InnerLedgerComponentsClassesType } from './types';

import styles from './confirmAddressStyles.scss';

export interface ConfirmAddressPropsType
  extends WithClassnameType,
    InnerLedgerComponentsClassesType {
  token?: string;
  noBorder?: boolean;
  customContentComponent?: ReactNode;
}

export const ConfirmAddress = ({
  token,
  className = 'dapp-ledger-confirm-address',
  customContentComponent,
  ledgerModalTitleClassName,
  ledgerModalConfirmDescriptionClassName,
  ledgerModalConfirmDataClassName,
  ledgerModalConfirmFooterClassName
}: ConfirmAddressPropsType) => {
  const { ledgerAccount } = useGetAccountInfo();
  const tokenLogin = useSelector(tokenLoginSelector);
  const loginToken = tokenLogin?.loginToken ?? token;

  return (
    <div className={classNames(styles.ledgerConfirmAddress, className)}>
      <h4
        className={classNames(
          styles.ledgerConfirmAddressHeading,
          ledgerModalTitleClassName
        )}
      >
        Confirm Ledger Address
      </h4>

      {customContentComponent}

      <div className={styles.ledgerConfirmAddressSection}>
        <div
          className={classNames(
            styles.ledgerConfirmAddressDescription,
            ledgerModalConfirmDescriptionClassName
          )}
        >
          For security, please confirm that your address:
        </div>

        <div
          className={classNames(
            styles.ledgerConfirmAddressData,
            ledgerModalConfirmDataClassName
          )}
        >
          <>{ledgerAccount?.address ?? ''}</>
        </div>
      </div>

      {loginToken && (
        <div className={styles.ledgerConfirmAddressSection}>
          <div
            className={classNames(
              styles.ledgerConfirmAddressDescription,
              ledgerModalConfirmDescriptionClassName
            )}
          >
            and Auth Token:
          </div>

          <div
            className={classNames(
              styles.ledgerConfirmAddressData,
              styles.ledgerConfirmAddressDataHighlighted,
              ledgerModalConfirmDataClassName
            )}
          >
            {`${loginToken}{}`}
          </div>

          <div
            className={classNames(
              styles.ledgerConfirmAddressDescription,
              ledgerModalConfirmDescriptionClassName
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
          ledgerModalConfirmFooterClassName
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
