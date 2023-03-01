import React, { ReactNode } from 'react';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import globals from 'assets/sass/main.scss';
import { PageState } from 'UI/PageState';

import styles from './ledgerLoadingStyles.scss';

export interface LedgerLoadingPropsType {
  customSpinnerComponent?: ReactNode;
  customContentComponent?: ReactNode;
  ledgerLoadingClassNames?: {
    ledgerModalTitleClassName?: string;
    ledgerModalSubtitleClassName?: string;
    ledgerLoadingWrapper?: string;
    ledgerLoadingSpinner?: string;
  };
}

export const LedgerLoading = ({
  customSpinnerComponent,
  ledgerLoadingClassNames,
  customContentComponent
}: LedgerLoadingPropsType) => {
  const {
    ledgerModalSubtitleClassName,
    ledgerModalTitleClassName,
    ledgerLoadingWrapper,
    ledgerLoadingSpinner
  } = ledgerLoadingClassNames || {};

  return (
    <div
      className={classNames(styles.ledgerLoadingWrapper, ledgerLoadingWrapper)}
    >
      <div
        className={classNames(
          styles.ledgerLoadingHeading,
          ledgerModalTitleClassName
        )}
      >
        Waiting for device...
      </div>

      <p
        className={classNames(
          styles.ledgerLoadingDescription,
          ledgerModalSubtitleClassName
        )}
      >
        It may take a few seconds...
      </p>

      {customContentComponent}

      <div
        className={classNames(
          styles.ledgerLoadingSpinner,
          ledgerLoadingSpinner
        )}
      >
        {customSpinnerComponent ? (
          customSpinnerComponent
        ) : (
          <PageState
            iconSize='10x'
            icon={faCircleNotch}
            iconClass={classNames('fa-spin', globals.textPrimary)}
          />
        )}
      </div>
    </div>
  );
};
