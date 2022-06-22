import React from 'react';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import globalStyles from 'assets/sass/main.scss';
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
