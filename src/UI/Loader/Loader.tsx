import React from 'react';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { PageState } from 'UI/PageState';
import { WithClassnameType } from '../types';

export interface LoaderPropsType extends WithClassnameType {
  noText?: boolean;
}

const LoaderComponent = ({
  'data-testid': dataTestId = 'loader',
  noText = false,
  className = 'dapp-loader',
  globalStyles
}: LoaderPropsType & WithStylesImportType) => (
  <PageState
    title={noText ? '' : 'Loading...'}
    iconBgClass={classNames(globalStyles?.textPrimary, 'fa-spin')}
    data-testid={dataTestId}
    icon={faCircleNotch}
    className={className}
  />
);

export const Loader = withStyles(LoaderComponent, {});
