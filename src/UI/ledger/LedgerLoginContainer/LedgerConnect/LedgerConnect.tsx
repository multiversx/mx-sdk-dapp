import React, { ReactNode } from 'react';
import classNames from 'classnames';

import LedgerLogo from 'assets/icons/ledger-nano.svg';

import globalStyles from 'assets/sass/main.scss';
import { DataTestIdsEnum } from 'constants/index';
import { WithClassnameType } from '../../../types';

import styles from './ledgerConnectStyles.scss';

export interface LedgerConnectPropsType extends WithClassnameType {
  onClick: () => void;
  disabled?: boolean;
  error: string;
  connectPageContent?: ReactNode;
  customContentComponent?: ReactNode;
  ledgerConnectClassNames?: {
    ledgerModalTitleClassName?: string;
    ledgerModalSubtitleClassName?: string;
    ledgerModalErrorClassName?: string;
    ledgerModalIconClassName?: string;
    ledgerModalButtonClassName?: string;
    ledgerModalFooterLinkClassName?: string;
    ledgerModalFooterClassName?: string;
    ledgerModalContentClassName?: string;
  };
}

export const LedgerConnect = ({
  onClick,
  error,
  disabled,
  connectPageContent,
  customContentComponent,
  className = 'dapp-ledger-connect-button',
  ledgerConnectClassNames
}: LedgerConnectPropsType) => {
  const {
    ledgerModalTitleClassName,
    ledgerModalSubtitleClassName,
    ledgerModalErrorClassName,
    ledgerModalIconClassName,
    ledgerModalButtonClassName,
    ledgerModalFooterLinkClassName,
    ledgerModalFooterClassName,
    ledgerModalContentClassName
  } = ledgerConnectClassNames || {};

  return (
    <div className={classNames(styles.loginConnectContainer, className)}>
      <div
        className={classNames(
          styles.loginConnectContainerContent,
          ledgerModalContentClassName
        )}
      >
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

        <div
          className={classNames(
            styles.loginConnectContainerFooter,
            ledgerModalFooterClassName
          )}
        >
          <button
            onClick={onClick}
            disabled={disabled}
            data-testid={DataTestIdsEnum.ledgerConnectBtn}
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
            href='https://support.ledger.com/hc/en-us/articles/115005165269-Connection-issues-with-Windows-or-Linux'
            target='_blank'
            rel='noopener noreferrer'
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
};
