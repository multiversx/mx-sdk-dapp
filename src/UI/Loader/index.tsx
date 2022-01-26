import React from 'react';

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
      iconClass='text-primary fa-spin'
      dataTestId={dataTestId}
      icon={icons.faCircleNotch}
    />
  );
};
export default Loader;
