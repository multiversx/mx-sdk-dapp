import React from 'react';
import classNames from 'classnames';

import { WithClassnameType } from '../types';

import globalStyles from 'assets/sass/main.scss';

export interface DotPropsType extends WithClassnameType {
  color: string;
  'data-testid'?: string;
}

export const Dot = ({
  color,
  'data-testid': dataTestId,
  className = 'dapp-dot'
}: DotPropsType) => (
  <span
    className={classNames(globalStyles.dot, color, className)}
    data-testid={dataTestId}
  />
);
