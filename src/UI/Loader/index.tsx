import React from 'react';

import globalStyles from 'assets/sass/main.scss';
import icons from 'optionalPackages/fortawesome-free-solid-svg-icons';
import PageState from '../PageState';

const Loader = ({
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
      icon={icons.faCircleNotch}
    />
  );
};
export default Loader;
