import React from 'react';
import { humanReadableFormat } from 'components/TransactionsInterpreter/helpers/humanReadableFormat';
import { timeAgo } from 'utils';

export const TimeAgo = ({
  value,
  short = false,
  tooltip = false
}: {
  value: number;
  short?: boolean;
  tooltip?: boolean;
}) => {
  const result = timeAgo(value * 1000, short);

  return tooltip ? (
    <span title={humanReadableFormat(value, false, true)}>{result}</span>
  ) : (
    <>{result}</>
  );
};
