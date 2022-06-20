import React from 'react';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGetNetworkConfig } from 'hooks';

export const ExplorerLink = ({
  page,
  text,
  className
}: {
  page: string;
  text?: any;
  className?: string;
}) => {
  const {
    network: { explorerAddress }
  } = useGetNetworkConfig();
  return (
    <a
      href={`${explorerAddress}${page}`}
      {...{
        target: '_blank'
      }}
      className={`link-style ${className}`}
    >
      {text ? (
        <React.Fragment>{text}</React.Fragment>
      ) : (
        <FontAwesomeIcon icon={faSearch} className='text-secondary' />
      )}
    </a>
  );
};

export default ExplorerLink;
