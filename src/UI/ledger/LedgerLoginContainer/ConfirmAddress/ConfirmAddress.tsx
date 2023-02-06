import React from 'react';
import classNames from 'classnames';

import { useGetAccountInfo } from 'hooks';
import { useSelector } from 'reduxStore/DappProviderContext';
import { tokenLoginSelector } from 'reduxStore/selectors';

import type { WithClassnameType } from 'UI/types';

import globalStyles from 'assets/sass/main.scss';

export interface ConfirmAddressPropsType extends WithClassnameType {
  token?: string;
  noBorder?: boolean;
}

export const ConfirmAddress = ({
  token,
  noBorder,
  className = 'dapp-ledger-confirm-address'
}: ConfirmAddressPropsType) => {
  const { ledgerAccount } = useGetAccountInfo();
  const tokenLogin = useSelector(tokenLoginSelector);
  const loginToken = tokenLogin?.loginToken ?? token;

  return (
    <div className={classNames(globalStyles.mAuto, className)}>
      <div
        className={classNames(
          globalStyles.card,
          globalStyles.my4,
          globalStyles.textCenter,
          {
            [globalStyles.border0]: noBorder
          }
        )}
      >
        <div
          className={classNames(
            globalStyles.cardBody,
            globalStyles.p4,
            globalStyles.mxLg4
          )}
        >
          <h4 className={classNames(globalStyles.h4, globalStyles.mb4)}>
            Confirm Ledger Address
          </h4>

          <p>For security, please confirm that your address: </p>

          <p
            className={classNames(
              globalStyles.lead,
              globalStyles.border,
              globalStyles.rounded,
              globalStyles.p2
            )}
          >
            {ledgerAccount ? ledgerAccount.address : ''}
          </p>

          {loginToken && (
            <>
              <p>and Auth Token</p>

              <p
                className={classNames(
                  globalStyles.lead,
                  globalStyles.border,
                  globalStyles.rounded,
                  globalStyles.p2
                )}
              >{`${loginToken}{}`}</p>
            </>
          )}

          <p className={globalStyles.m0}>
            {loginToken
              ? 'are the one shown on your Ledger device screen now.'
              : 'is the one shown on your Ledger device screen now.'}
          </p>

          <p>Select Approve on your device to confirm.</p>

          <p>
            Or, if it does not match, close this page and{' '}
            <a
              href='https://help.multiversx.com/en/'
              target='_blank'
              rel='noreferrer'
            >
              contact support
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
