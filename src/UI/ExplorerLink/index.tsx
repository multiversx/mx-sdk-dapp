import React from 'react';
import { useGetNetworkConfig } from 'hooks';
import { optionalImport } from 'lib';

const { FontAwesomeIcon } = optionalImport('@fortawesome/react-fontawesome');
const { faSearch } = optionalImport('@fortawesome/free-solid-svg-icons');

const ExplorerLink = ({
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
