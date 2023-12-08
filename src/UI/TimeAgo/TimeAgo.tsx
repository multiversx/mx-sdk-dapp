import React from 'react';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { timeAgo } from 'utils/operations/timeRemaining';
import { getHumanReadableTimeFormat } from 'utils/transactions/getInterpretedTransaction/helpers/getHumanReadableTimeFormat';

export interface TimeAgoPropsType {
  value: number;
  short?: boolean;
  tooltip?: boolean;
}

const TimeAgoComponent = ({
  value,
  short = false,
  tooltip = false,
  styles
}: TimeAgoPropsType & WithStylesImportType) => {
  const result = timeAgo(value * 1000, short);

  const component = tooltip ? (
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

  return <span className={styles?.transactionCell}>{component}</span>;
};

export const TimeAgo = withStyles(TimeAgoComponent, {
  ssrStyles: () =>
    import('UI/TransactionsTable/components/transactionsTable.styles.scss'),
  clientStyles: () =>
    require('UI/TransactionsTable/components/transactionsTable.styles.scss')
      .default
});
