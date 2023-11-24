import React, { useMemo } from 'react';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { LedgerAccountType } from 'reduxStore/slices';

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

const LedgerProgressBarComponent = ({
  error,
  ledgerAccount,
  ledgerProgressBarClassNames,
  showAddressList,
  showProgressBar,
  styles
}: LedgerProgressBarPropsType & WithStylesImportType) => {
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
    <div className={styles?.ledgerProgressBar}>
      <div
        className={classNames(
          styles?.ledgerProgressBarTrack,
          ledgerProgressBarTrackClassName
        )}
      />

      <div
        className={classNames(
          styles?.ledgerProgressBarThumb,
          ledgerProgressBarThumbClassName
        )}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export const LedgerProgressBar = withStyles(LedgerProgressBarComponent, {
  local: () =>
    import(
      'UI/ledger/LedgerLoginContainer/LedgerProgressBar/progressBarStyles.scss'
    )
});
