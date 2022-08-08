import React from 'react';
import { humanReadableFormat } from 'components/TransactionsInterpreter/helpers/humanReadableFormat';
import { timeAgo } from 'utils';

export type TimeAgoProps = {
  value: number;
  short?: boolean;
  tooltip?: boolean;
};

export const TimeAgo = ({
  value,
  short = false,
  tooltip = false
}: TimeAgoProps) => {
  const result = timeAgo(value * 1000, short);

  return tooltip ? (
    <span title={humanReadableFormat(value, false, true)}>{result}</span>
  ) : (
    <>{result}</>
  );
};
