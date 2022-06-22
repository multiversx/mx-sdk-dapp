import React from 'react';
import globalStyles from 'assets/sass/main.scss';

export const Dot = ({
  color,
  'data-testid': dataTestId
}: {
  color: string;
  'data-testid'?: string;
}) => {
  return (
    <span className={`${globalStyles.dot} ${color}`} data-testid={dataTestId} />
  );
};
