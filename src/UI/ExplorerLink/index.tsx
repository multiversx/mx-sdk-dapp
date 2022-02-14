import React from 'react';
import { useGetNetworkConfig } from 'hooks';

import icons from 'optionalPackages/fortawesome-free-solid-svg-icons';
import ReactFontawesome from 'optionalPackages/react-fontawesome';
import { withClassNameWrapper } from 'wrappers/withClassNameWrapper';

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
        <ReactFontawesome.FontAwesomeIcon
          icon={icons.faSearch}
          className='text-secondary'
        />
      )}
    </a>
  );
};

export default withClassNameWrapper(ExplorerLink);
