import React from 'react';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import globalStyles from 'assets/sass/main.scss';
import { PageState } from 'UI/PageState';
import { WithClassnameType } from '../types';

export interface LoaderPropsType extends WithClassnameType {
  noText?: boolean;
}

export const Loader = ({
  'data-testid': dataTestId = 'loader',
  noText = false,
  className = 'dapp-loader'
}: LoaderPropsType) => (
  <PageState
    title={noText ? '' : 'Loading...'}
    iconBgClass={classNames(globalStyles.textPrimary, 'fa-spin')}
    data-testid={dataTestId}
    icon={faCircleNotch}
    className={className}
  />
);
