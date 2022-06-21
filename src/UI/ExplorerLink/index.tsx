import React from 'react';
import classNames from 'classnames';

import { useGetNetworkConfig } from 'hooks';

import icons from 'optionalPackages/fortawesome-free-solid-svg-icons';
import ReactFontawesome from 'optionalPackages/react-fontawesome';

import styles from './styles.scss';

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
      target='_blank'
      rel='noreferrer'
      className={classNames(styles.link, className)}
    >
      {text ? (
        <React.Fragment>{text}</React.Fragment>
      ) : (
        <ReactFontawesome.FontAwesomeIcon
          icon={icons.faSearch}
          className={styles.search}
        />
      )}
    </a>
  );
};

export default ExplorerLink;
