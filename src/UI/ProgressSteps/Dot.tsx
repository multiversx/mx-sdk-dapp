import React from 'react';
import globalStyles from 'assets/sass/main.scss';
import classNames from 'classnames';
import { WithClassname } from '../types';

export const Dot = ({
  color,
  'data-testid': dataTestId,
  className = 'dapp-dot'
}: {
  color: string;
  'data-testid'?: string;
} & WithClassname) => {
  return (
    <span
      className={classNames(globalStyles.dot, color, className)}
      data-testid={dataTestId}
    />
  );
};
