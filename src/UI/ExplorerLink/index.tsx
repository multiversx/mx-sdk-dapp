import React, { PropsWithChildren } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { useGetNetworkConfig } from 'hooks';
import styles from './styles.scss';
import { WithClassname } from 'UI/types/with-classname';

export const ExplorerLink = ({
  page,
  text,
  className = 'dapp-explorer-link',
  children
}: {
  page: string;
  text?: any;
} & PropsWithChildren & WithClassname) => {
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
      {children ?? text ? (
        <>{text}</>
      ) : (
        <FontAwesomeIcon icon={faSearch} className={styles.search} />
      )}
    </a>
  );
};
