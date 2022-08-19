import React from 'react';
import { getHumanReadableTimeFormat } from 'components/TransactionsInterpreter/helpers/getHumanReadableTimeFormat';
import { timeAgo } from 'utils';

export type TimeAgoPropsType = {
  value: number;
  short?: boolean;
  tooltip?: boolean;
};

export const TimeAgo = ({
  value,
  short = false,
  tooltip = false
}: TimeAgoPropsType) => {
  const result = timeAgo(value * 1000, short);

  return tooltip ? (
    <span title={getHumanReadableTimeFormat(value, false, true)}>{result}</span>
  ) : (
    <>{result}</>
  );
};
