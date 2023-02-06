import React, { ReactNode } from 'react';
import classNames from 'classnames';

import LedgerLogo from 'assets/icons/ledger-nano.svg';

import type { WithClassnameType } from '../../types';
import type { InnerLedgerComponentsClassesType } from './types';

import globalStyles from 'assets/sass/main.scss';
import styles from './ledgerConnectStyles.scss';

export interface LedgerConnectPropsType
  extends WithClassnameType,
    InnerLedgerComponentsClassesType {
  onClick: () => void;
  error: string;
  connectPageContent?: ReactNode;
  customContentComponent?: ReactNode;
}

export const LedgerConnect = ({
  onClick,
  error,
  connectPageContent,
  customContentComponent,
  className = 'dapp-ledger-connect-button',
  ledgerModalTitleClassName,
  ledgerModalSubtitleClassName,
  ledgerModalErrorClassName,
  ledgerModalIconClassName,
  ledgerModalButtonClassName,
  ledgerModalFooterLinkClassName
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
              ledgerModalTitleClassName
            )}
          >
            Connect Ledger
          </div>

          <p
            className={classNames(
              styles.loginConnectContainerDescription,
              ledgerModalSubtitleClassName
            )}
          >
            Unlock your device &amp; open the MultiversX App
          </p>

          {error && (
            <p
              className={classNames(
                styles.loginConnectContainerError,
                ledgerModalErrorClassName
              )}
            >
              {error}
            </p>
          )}

          {customContentComponent}

          <div
            className={classNames(
              styles.loginConnectContainerIcon,
              ledgerModalIconClassName
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
            ledgerModalButtonClassName
          )}
        >
          Connect Ledger
        </button>

        <a
          href='#'
          className={classNames(
            styles.loginConnectContainerLink,
            ledgerModalFooterLinkClassName
          )}
        >
          Having connection issues?
        </a>
      </div>
    </div>
  </div>
);
