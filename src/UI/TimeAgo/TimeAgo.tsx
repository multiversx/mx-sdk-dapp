import React from 'react';

import { timeAgo } from 'utils/operations/timeRemaining';
import { getHumanReadableTimeFormat } from 'utils/transactions/getInterpretedTransaction/helpers/getHumanReadableTimeFormat';

import styles from '../TransactionsTable/components/transactionsTable.styles.scss';

export interface TimeAgoPropsType {
  value: number;
  short?: boolean;
  tooltip?: boolean;
}

export const TimeAgo = ({
  value,
  short = false,
  tooltip = false
}: TimeAgoPropsType) => {
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
