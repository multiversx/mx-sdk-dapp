import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { DataTestIdsEnum } from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { useGetAccountInfo } from 'hooks';
import { useSelector } from 'reduxStore/DappProviderContext';
import { tokenLoginSelector } from 'reduxStore/selectors';
import { WithClassnameType } from '../../../types';
import { getAuthTokenText } from './helpers';

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

const ConfirmAddressComponent = ({
  token,
  className = 'dapp-ledger-confirm-address',
  customContentComponent,
  confirmAddressClassNames,
  styles
}: ConfirmAddressPropsType & WithStylesImportType) => {
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

  const authTokenText = getAuthTokenText({
    loginToken,
    version: ledgerAccount?.version
  });

  return (
    <div
      className={classNames(
        styles?.ledgerConfirmAddress,
        ledgerModalConfirmContentClassName,
        className
      )}
      data-testid={DataTestIdsEnum.ledgerConfirmAddress}
    >
      <h4
        className={classNames(
          styles?.ledgerConfirmAddressHeading,
          ledgerModalTitleClassName
        )}
      >
        Confirm Ledger Address
      </h4>

      {customContentComponent}

      <div className={styles?.ledgerConfirmAddressSection}>
        <div
          className={classNames(
            styles?.ledgerConfirmAddressDescription,
            ledgerModalConfirmDescriptionClassName
          )}
        >
          {authTokenText?.confirmAddressText}
        </div>

        <div
          className={classNames(
            styles?.ledgerConfirmAddressData,
            ledgerModalConfirmDataClassName
          )}
        >
          {ledgerAccount?.address ?? ''}
        </div>
      </div>

      <div className={styles?.ledgerConfirmAddressSection}>
        <div
          className={classNames(
            styles?.ledgerConfirmAddressDescription,
            ledgerModalConfirmDescriptionClassName
          )}
        >
          {authTokenText?.authText}
        </div>

        <div
          className={classNames(
            styles?.ledgerConfirmAddressData,
            ledgerModalConfirmDataClassName
          )}
        >
          {authTokenText?.data}
        </div>

        <div
          className={classNames(
            styles?.ledgerConfirmAddressDescription,
            ledgerModalConfirmDescriptionClassName
          )}
        >
          {authTokenText?.areShownText}
        </div>
      </div>

      <div
        className={classNames(
          styles?.ledgerConfirmAddressFooter,
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

export const ConfirmAddress = withStyles(ConfirmAddressComponent, {
  local: () =>
    import(
      'UI/ledger/LedgerLoginContainer/ConfirmAddress/confirmAddressStyles.scss'
    )
});
