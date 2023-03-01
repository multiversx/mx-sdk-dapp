import React from 'react';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import globalStyles from 'assets/sass/main.scss';
import { PageState } from 'UI/PageState';
import { WithClassnameType } from '../types';

export interface LoaderPropsType extends WithClassnameType {
  dataTestId?: string;
  noText?: boolean;
}

export const Loader = ({
  dataTestId = 'loader',
  noText = false,
  className = 'dapp-loader'
}: LoaderPropsType) => (
  <PageState
    title={noText ? '' : 'Loading...'}
    iconBgClass={classNames(globalStyles.textPrimary, 'fa-spin')}
    dataTestId={dataTestId}
    icon={faCircleNotch}
    className={className}
  />
);
