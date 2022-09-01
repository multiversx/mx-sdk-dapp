import React from 'react';
import { timeAgo } from 'utils';
import { getHumanReadableTimeFormat } from 'utils/transactions/getInterpretedTransaction/helpers/getHumanReadableTimeFormat';

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
    <>{result}</>
  );
};
