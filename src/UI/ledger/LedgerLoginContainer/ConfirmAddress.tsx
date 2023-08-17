import React, { ReactNode } from 'react';
import classNames from 'classnames';

import { DataTestIdsEnum } from 'constants/index';
import { useGetAccountInfo } from 'hooks';
import { useSelector } from 'reduxStore/DappProviderContext';
import { tokenLoginSelector } from 'reduxStore/selectors';

import { WithClassnameType } from '../../types';

import styles from './confirmAddressStyles.scss';

export interface ConfirmAddressPropsType extends WithClassnameType {
  token?: string;
  noBorder?: boolean;
  customContentComponent?: ReactNode;
  confirmAddressClassNames?: {
    ledgerModalTitleClassName?: string;
    ledgerModalConfirmDescriptionClassName?: string;
    ledgerModalConfirmDataClassName?: string;
    ledgerModalConfirmFooterClassName?: string;
    ledgerModalConfirmContentClassName?: string;
  };
}

export const ConfirmAddress = ({
  token,
  className = 'dapp-ledger-confirm-address',
  customContentComponent,
  confirmAddressClassNames
}: ConfirmAddressPropsType) => {
  const { ledgerAccount } = useGetAccountInfo();
  const {
    ledgerModalTitleClassName,
    ledgerModalConfirmDescriptionClassName,
    ledgerModalConfirmDataClassName,
    ledgerModalConfirmFooterClassName,
    ledgerModalConfirmContentClassName
  } = confirmAddressClassNames || {};

  const tokenLogin = useSelector(tokenLoginSelector);
  const loginToken = tokenLogin?.loginToken ?? token;

  return (
    <div
      className={classNames(
        styles.ledgerConfirmAddress,
        ledgerModalConfirmContentClassName,
        className
      )}
      data-testid={DataTestIdsEnum.ledgerConfirmAddress}
    >
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
