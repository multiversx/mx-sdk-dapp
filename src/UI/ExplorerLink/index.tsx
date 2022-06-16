import React from 'react';
import globalStyles from 'assets/sass/main.scss';
import { useGetNetworkConfig } from 'hooks';
import icons from 'optionalPackages/fortawesome-free-solid-svg-icons';
import ReactFontawesome from 'optionalPackages/react-fontawesome';

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
      className={`${globalStyles.linkStyle} ${className}`}
    >
      {text ? (
        <React.Fragment>{text}</React.Fragment>
      ) : (
        <ReactFontawesome.FontAwesomeIcon
          icon={icons.faSearch}
          className={globalStyles.textSecondary}
        />
      )}
    </a>
  );
};

export default ExplorerLink;
