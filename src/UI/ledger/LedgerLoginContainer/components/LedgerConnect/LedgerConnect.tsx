import React, { ReactNode } from 'react';
import classNames from 'classnames';

import LedgerLogo from 'assets/icons/ledger-nano.svg';

import type { WithClassnameType } from 'UI/types';

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
  <div className={classNames(styles.loginConnectContainer, className)}>
    <div className={styles.loginConnectContainerContent}>
      {connectPageContent ? (
        connectPageContent
      ) : (
        <>
          <div className={styles.loginConnectContainerHeading}>
            Connect Ledger
          </div>

          <p className={styles.loginConnectContainerDescription}>
            Unlock your device &amp; open the MultiversX App
          </p>

          {error && (
            <p className={styles.loginConnectContainerError}>{error}</p>
          )}

          <LedgerLogo className={styles.loginConnectContainerIcon} />
        </>
      )}

      <div className={styles.loginConnectContainerFooter}>
        <button
          className={classNames(
            globalStyles.btn,
            globalStyles.btnPrimary,
            styles.loginConnectContainerButton
          )}
          onClick={onClick}
          data-testid='connectBtn'
        >
          Connect Ledger
        </button>

        {error && (
          <a className={styles.loginConnectContainerLink} href='#'>
            Having connection issues?
          </a>
        )}
      </div>
    </div>
  </div>
);
