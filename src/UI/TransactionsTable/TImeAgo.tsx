import React from 'react';
import { getTmeAgo } from 'components/TransactionsInterpreter/helpers/getTimeAgo';
import { dateFormatted } from 'components/TransactionsInterpreter/helpers/dateFormatted';

export const TimeAgo = ({
  value,
  short = false,
  tooltip = false
}: {
  value: number;
  short?: boolean;
  tooltip?: boolean;
}) => {
  const ms = value * 1000;
  let result = getTmeAgo(ms);

  if (short) {
    const parts = result.split(' ');
    if (parts.length > 1) {
      result = `${parts[0]} ${parts[1]}`;
    }
  }

  return tooltip ? (
    <span title={dateFormatted(value, false, true)}>{result}</span>
  ) : (
    <>{result}</>
  );
};
