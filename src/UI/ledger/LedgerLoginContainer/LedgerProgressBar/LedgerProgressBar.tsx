import React from 'react';
import classNames from 'classnames';

import styles from './progressBarStyles.scss';

export interface LedgerProgressBarPropsType {
  percentage: number;
  ledgerProgressBarClassNames?: {
    ledgerProgressBarTrackClassName?: string;
    ledgerProgressBarThumbClassName?: string;
  };
}

export const LedgerProgressBar = (props: LedgerProgressBarPropsType) => {
  const { percentage, ledgerProgressBarClassNames } = props;
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
