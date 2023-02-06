import React, { ReactNode } from 'react';
import classNames from 'classnames';

import LedgerLogo from 'assets/icons/ledger-nano.svg';

import type { WithClassnameType } from 'UI/types';
import type { InnerLedgerComponentsClassNamesType } from './types';

import globalStyles from 'assets/sass/main.scss';
import styles from './ledgerConnectStyles.scss';

export interface LedgerConnectPropsType extends WithClassnameType {
  onClick: () => void;
  error: string;
  connectPageContent?: ReactNode;
  customContentComponent?: ReactNode;
  innerLedgerComponentsClassNames?: InnerLedgerComponentsClassNamesType;
}

export const LedgerConnect = ({
  onClick,
  error,
  connectPageContent,
  customContentComponent,
  className = 'dapp-ledger-connect-button',
  innerLedgerComponentsClassNames
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
              innerLedgerComponentsClassNames?.modalLedgerTitleClassName
            )}
          >
            Connect Ledger
          </div>

          <p
            className={classNames(
              styles.loginConnectContainerDescription,
              innerLedgerComponentsClassNames?.modalLedgerSubtitleClassName
            )}
          >
            Unlock your device &amp; open the MultiversX App
          </p>

          {error && (
            <p
              className={classNames(
                styles.loginConnectContainerError,
                innerLedgerComponentsClassNames?.modalLedgerErrorClassName
              )}
            >
              {error}
            </p>
          )}

          {customContentComponent}

          <div
            className={classNames(
              styles.loginConnectContainerIcon,
              innerLedgerComponentsClassNames?.modalLedgerIconClassName
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
            innerLedgerComponentsClassNames?.modalLedgerButtonClassName
          )}
        >
          Connect Ledger
        </button>

        <a
          href='#'
          className={classNames(
            styles.loginConnectContainerLink,
            innerLedgerComponentsClassNames?.modalLedgerFooterLinkClassName
          )}
        >
          Having connection issues?
        </a>
      </div>
    </div>
  </div>
);
