import React from 'react';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { WithClassnameType } from '../types';

export interface DotPropsType extends WithClassnameType {
  color: string;
  'data-testid'?: string;
}

const DotComponent = ({
  color,
  'data-testid': dataTestId,
  className = 'dapp-dot',
  globalStyles
}: DotPropsType & WithStylesImportType) => (
  <span
    className={classNames(globalStyles?.dot, color, className)}
    data-testid={dataTestId}
  />
);

export const Dot = withStyles(DotComponent, {
  local: () => import('UI/LoadingDots/loadingDotsStyle.scss')
});
