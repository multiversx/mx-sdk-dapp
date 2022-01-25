import React from 'react';
import { optionalImport } from 'utils';
import PageState from '../PageState';

const { faCircleNotch } = optionalImport('@fortawesome/free-solid-svg-icons');

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
      icon={faCircleNotch}
    />
  );
};
export default Loader;
