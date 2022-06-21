import React from 'react';

import globalStyles from 'assets/sass/main.scss';
import icons from 'optionalPackages/fortawesome-free-solid-svg-icons';
import PageState from '../PageState';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { PageState } from 'UI/PageState';

export const Loader = ({
  dataTestId = 'loader',
  noText = false
}: {
  dataTestId?: string;
  noText?: boolean;
}) => {
  return (
    <PageState
      title={noText ? '' : 'Loading...'}
      iconClass={`fa-spin ${globalStyles.textPrimary}`}
      dataTestId={dataTestId}
      icon={faCircleNotch}
    />
  );
};
