import React, { ReactNode } from 'react';
import classNames from 'classnames';

import LedgerLogo from 'assets/icons/ledger-nano.svg';
import { WithClassnameType } from '../../types';

import globalStyles from 'assets/sass/main.scss';
import styles from './ledgerConnectStyles.scss';

export interface LedgerConnectPropsType extends WithClassnameType {
  onClick: () => void;
  error: string;
  connectPageContent?: ReactNode;
}

export const LedgerConnect = ({
  onClick,
  error,
  connectPageContent,
  className = 'dapp-ledger-connect-button'
}: LedgerConnectPropsType) => (
  <div
    className={classNames(globalStyles.mAuto, styles.loginContainer, className)}
  >
    <div
      className={classNames(
        globalStyles.card,
        globalStyles.my4,
        globalStyles.textCenter,
        globalStyles.border0
      )}
    >
      <div
        className={classNames(
          globalStyles.cardBody,
          globalStyles.p4,
          globalStyles.mxLg4
        )}
      >
        {connectPageContent ? (
          connectPageContent
        ) : (
          <>
            <LedgerLogo className={globalStyles.mb4} />

            <h4 className={classNames(globalStyles.h4, globalStyles.mb4)}>
              Connect Ledger
            </h4>

            <p className={classNames(globalStyles.lead, globalStyles.mb4)}>
              Unlock your device &amp; open the Elrond App.
            </p>
          </>
        )}

        <div>
          {error && (
            <p
              className={classNames(
                globalStyles.textDanger,
                globalStyles.flexRow,
                globalStyles.justifyContentCenter,
                globalStyles.alignItemsCenter
              )}
            >
              {error}
            </p>
          )}

          <button
            className={classNames(globalStyles.btn, globalStyles.btnPrimary)}
            onClick={onClick}
            data-testid='connectBtn'
          >
            Connect Ledger
          </button>
        </div>
      </div>
    </div>
  </div>
);
