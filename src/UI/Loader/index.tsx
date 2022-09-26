import React from 'react';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import { PageState } from 'UI/PageState';
import { WithClassnameType } from '../types';

import globalStyles from 'assets/sass/main.scss';

type LoaderPropsTypes = {
  dataTestId?: string;
  noText?: boolean;
} & WithClassnameType;

export const Loader = (props: LoaderPropsTypes) => {
  const {
    dataTestId = 'loader',
    noText = false,
    className = 'dapp-loader'
  } = props;

  return (
    <PageState
      title={noText ? '' : 'Loading...'}
      iconBgClass={classNames(globalStyles.textPrimary, 'fa-spin')}
      dataTestId={dataTestId}
      icon={faCircleNotch}
      className={className}
    />
  );
};
