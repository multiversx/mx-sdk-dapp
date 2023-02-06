import React from 'react';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import { PageState } from 'UI/PageState';

import globals from 'assets/sass/main.scss';
import styles from './ledgerLoadingStyles.scss';

export const LedgerLoading = () => (
  <div className={styles.ledgerLoadingWrapper}>
    <div className={styles.ledgerLoadingHeading}>Waiting for device...</div>

    <p className={styles.ledgerLoadingDescription}>
      It may take a few seconds...
    </p>

    <div className={styles.ledgerLoadingSpinner}>
      <PageState
        iconSize='10x'
        icon={faCircleNotch}
        iconClass={classNames('fa-spin', globals.textPrimary)}
      />
    </div>
  </div>
);
