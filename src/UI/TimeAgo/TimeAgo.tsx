import React from 'react';

import { timeAgo } from 'utils/operations/timeRemaining';
import { getHumanReadableTimeFormat } from 'utils/transactions/getInterpretedTransaction/helpers/getHumanReadableTimeFormat';

import styles from '../TransactionsTable/components/transactionsTableStyles.scss';

export interface TimeAgoPropsTypes {
  value: number;
  short?: boolean;
  tooltip?: boolean;
}

export const TimeAgo = (props: TimeAgoPropsTypes) => {
  const { value, short = false, tooltip = false } = props;
  const result = timeAgo(value * 1000, short);

  const render = tooltip ? (
    <span
      title={getHumanReadableTimeFormat({
        value,
        noSeconds: false,
        utc: true
      })}
      data-testid={`timeAgo-${value}`}
    >
      {result}
    </span>
  ) : (
    <span data-testid={`timeAgo-${value}`}>{result}</span>
  );

  return <div className={styles.transactionCell}>{render}</div>;
};
