import React from 'react';
<<<<<<<< HEAD:src/UI/TransactionsTable/TransactionTimeAgo.tsx

import { getHumanReadableTimeFormat } from 'components/TransactionsInterpreter/helpers/getHumanReadableTimeFormat';
import { timeAgo } from 'utils';
========
import { timeAgo } from 'utils/operations/timeRemaining';
import { getHumanReadableTimeFormat } from 'utils/transactions/getInterpretedTransaction/helpers/getHumanReadableTimeFormat';
>>>>>>>> origin/tm-transactions-interpreter:src/UI/TimeAgo/TimeAgo.tsx

import styles from './transactionsTableStyles.scss';

export interface TransactionTimeAgoPropsTypes {
  value: number;
  short?: boolean;
  tooltip?: boolean;
}

export const TransactionTimeAgo = (props: TransactionTimeAgoPropsTypes) => {
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
<<<<<<<< HEAD:src/UI/TransactionsTable/TransactionTimeAgo.tsx
    <span>{result}</span>
========
    <span data-testid={`timeAgo-${value}`}>{result}</span>
>>>>>>>> origin/tm-transactions-interpreter:src/UI/TimeAgo/TimeAgo.tsx
  );

  return <div className={styles.transactionCell}>{render}</div>;
};
