import React from 'react';
import classNames from 'classnames';


import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGetNetworkConfig } from 'hooks';

import icons from 'optionalPackages/fortawesome-free-solid-svg-icons';
import ReactFontawesome from 'optionalPackages/react-fontawesome';

import styles from './styles.scss';

const ExplorerLink = ({
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
      target='_blank'
      className={classNames(styles.link, className)}
      rel='noreferrer'
    >
      {text ? (
        <>{text}</>
      ) : (
        <FontAwesomeIcon icon={faSearch} className={styles.search} />
      )}
    </a>
  );
};

export default ExplorerLink;
