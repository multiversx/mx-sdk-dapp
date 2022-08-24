import React, { PropsWithChildren, useMemo } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { useGetNetworkConfig } from 'hooks';
import styles from './styles.scss';
import { WithClassnameType } from '../types';

export const ExplorerLink = ({
  page,
  text,
  className = 'dapp-explorer-link',
  children
}: {
  page: string;
  text?: any;
} & PropsWithChildren &
  WithClassnameType) => {
  const {
    network: { explorerAddress }
  } = useGetNetworkConfig();

  const defaultContent = useMemo(
    () => text ?? <FontAwesomeIcon icon={faSearch} className={styles.search} />,
    [text]
  );

  return (
    <a
      href={`${explorerAddress}${page}`}
      target='_blank'
      className={classNames(styles.link, className)}
      rel='noreferrer'
    >
      {children ?? defaultContent}
    </a>
  );
};
