import React from 'react';

import { getHumanReadableTimeFormat } from 'components/TransactionsInterpreter/helpers/getHumanReadableTimeFormat';
import { timeAgo } from 'utils';

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
    >
      {result}
    </span>
  ) : (
    <span>{result}</span>
  );

  return <div className={styles.transactionCell}>{render}</div>;
};
