import React from 'react';
import globalStyles from 'assets/sass/main.scss';
import classNames from 'classnames';

export const Dot = ({
  color,
  'data-testid': dataTestId,
  className = 'dapp-dot'
}: {
  color: string;
  'data-testid'?: string;
  className?: string;
}) => {
  return (
    <span
      className={classNames(globalStyles.dot, color, className)}
      data-testid={dataTestId}
    />
  );
};
