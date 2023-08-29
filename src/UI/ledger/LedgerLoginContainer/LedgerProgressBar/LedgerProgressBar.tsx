import React, { useMemo } from 'react';
import classNames from 'classnames';

import { LedgerAccountType } from 'reduxStore/slices';
import styles from './progressBarStyles.scss';

export interface LedgerProgressBarPropsType {
  error?: string;
  ledgerAccount: LedgerAccountType | null;
  ledgerProgressBarClassNames?: {
    ledgerProgressBarTrackClassName?: string;
    ledgerProgressBarThumbClassName?: string;
  };
  showAddressList: boolean;
  showProgressBar?: boolean;
}

export const LedgerProgressBar = ({
  error,
  ledgerAccount,
  ledgerProgressBarClassNames,
  showAddressList,
  showProgressBar
}: LedgerProgressBarPropsType) => {
  const progressStep = [
    {
      percentage: 33,
      conditions: !showAddressList && !ledgerAccount
    },
    {
      conditions: showAddressList && !error && !ledgerAccount,
      percentage: 66
    },
    {
      conditions: ledgerAccount != null && !error,
      percentage: 100
    }
  ];

  const currentProgress = useMemo(
    () => progressStep.find((step) => step.conditions),
    []
  );

  const percentage = currentProgress ? currentProgress.percentage : 33;

  if (!showProgressBar) {
    return null;
  }

  const { ledgerProgressBarTrackClassName, ledgerProgressBarThumbClassName } =
    ledgerProgressBarClassNames || {};

  return (
    <div className={styles.ledgerProgressBar}>
      <div
        className={classNames(
          styles.ledgerProgressBarTrack,
          ledgerProgressBarTrackClassName
        )}
      />

      <div
        className={classNames(
          styles.ledgerProgressBarThumb,
          ledgerProgressBarThumbClassName
        )}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};
