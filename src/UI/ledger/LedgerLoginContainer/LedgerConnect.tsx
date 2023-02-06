import React, { ReactNode } from 'react';
import classNames from 'classnames';

import LedgerLogo from 'assets/icons/ledger-nano.svg';

import type { WithClassnameType } from '../../types';
import type { innerLedgerComponentsClassNameType } from './types';

import globalStyles from 'assets/sass/main.scss';
import styles from './ledgerConnectStyles.scss';

export interface LedgerConnectPropsType extends WithClassnameType {
  onClick: () => void;
  error: string;
  connectPageContent?: ReactNode;
  customContentComponent?: ReactNode;
  ledgerConnectComponentsClassName?: innerLedgerComponentsClassNameType;
}

export const LedgerConnect = ({
  onClick,
  error,
  connectPageContent,
  customContentComponent,
  className = 'dapp-ledger-connect-button',
  ledgerConnectComponentsClassName
}: LedgerConnectPropsType) => (
  <div className={classNames(styles.loginConnectContainer, className)}>
    <div className={styles.loginConnectContainerContent}>
      {connectPageContent ? (
        connectPageContent
      ) : (
        <>
          <div
            className={classNames(
              styles.loginConnectContainerHeading,
              ledgerConnectComponentsClassName?.ledgerModalTitleClassName
            )}
          >
            Connect Ledger
          </div>

          <p
            className={classNames(
              styles.loginConnectContainerDescription,
              ledgerConnectComponentsClassName?.ledgerModalSubtitleClassName
            )}
          >
            Unlock your device &amp; open the MultiversX App
          </p>

          {error && (
            <p
              className={classNames(
                styles.loginConnectContainerError,
                ledgerConnectComponentsClassName?.ledgerModalErrorClassName
              )}
            >
              {error}
            </p>
          )}

          {customContentComponent}

          <div
            className={classNames(
              styles.loginConnectContainerIcon,
              ledgerConnectComponentsClassName?.ledgerModalIconClassName
            )}
          >
            <LedgerLogo />
          </div>
        </>
      )}

      <div className={styles.loginConnectContainerFooter}>
        <button
          onClick={onClick}
          data-testid='connectBtn'
          className={classNames(
            globalStyles.btn,
            globalStyles.btnPrimary,
            styles.loginConnectContainerButton,
            ledgerConnectComponentsClassName?.ledgerModalButtonClassName
          )}
        >
          Connect Ledger
        </button>

        <a
          href='#'
          className={classNames(
            styles.loginConnectContainerLink,
            ledgerConnectComponentsClassName?.ledgerModalFooterLinkClassName
          )}
        >
          Having connection issues?
        </a>
      </div>
    </div>
  </div>
);
