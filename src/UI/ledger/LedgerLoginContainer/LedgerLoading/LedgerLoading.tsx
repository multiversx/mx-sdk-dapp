import React, { ReactNode } from 'react';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import { PageState } from 'UI/PageState';

import type { InnerLedgerComponentsClassesType } from '../types';

import globals from 'assets/sass/main.scss';
import styles from './ledgerLoadingStyles.scss';

export interface LedgerLoadingPropsType
  extends InnerLedgerComponentsClassesType {
  customSpinnerComponent?: ReactNode;
  customContentComponent?: ReactNode;
}

export const LedgerLoading = (props: LedgerLoadingPropsType) => {
  const {
    customSpinnerComponent,
    ledgerModalTitleClassName,
    ledgerModalSubtitleClassName,
    customContentComponent
  } = props;

  return (
    <div className={styles.ledgerLoadingWrapper}>
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

      <div className={styles.ledgerLoadingSpinner}>
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
