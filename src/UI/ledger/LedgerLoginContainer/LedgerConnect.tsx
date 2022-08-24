import React from 'react';
import classNames from 'classnames';
import LedgerLogo from 'assets/icons/ledger-nano.svg';
import globalStyles from 'assets/sass/main.scss';
import { WithClassnameType } from '../../types';
import styles from './ledgerConnectStyles.scss';

export const LedgerConnect = ({
  onClick,
  error,
  connectPageContent,
  className = 'dapp-ledger-connect-button'
}: {
  onClick: () => void;
  error: string;
  connectPageContent?: React.ReactNode;
} & WithClassnameType) => {
  return (
    <div
      className={classNames(
        globalStyles.mAuto,
        styles.loginContainer,
        className
      )}
    >
      <div
        className={`${globalStyles.card} ${globalStyles.my4} ${globalStyles.textCenter} ${globalStyles.border0}`}
      >
        <div
          className={`${globalStyles.cardBody} ${globalStyles.p4} ${globalStyles.mxLg4}`}
        >
          {connectPageContent ? (
            <>{connectPageContent}</>
          ) : (
            <>
              <LedgerLogo className={globalStyles.mb4} />
              <h4 className={globalStyles.mb4}>Connect Ledger</h4>
              <p className={`${globalStyles.lead} ${globalStyles.mb4}`}>
                Unlock your device &amp; open the Elrond App.
              </p>
            </>
          )}

          <div>
            {error && (
              <p
                className={`${globalStyles.textDanger} ${globalStyles.flexRow} ${globalStyles.justifyContentCenter} ${globalStyles.alignItemsCenter}`}
              >
                {error}
              </p>
            )}
            <button
              className={`${globalStyles.btn} ${globalStyles.btnPrimary}`}
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
};
