import React, { PropsWithChildren, useMemo } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import { useGetNetworkConfig } from 'hooks';

import { WithClassnameType } from '../types';

import globalStyles from 'assets/sass/main.scss';
import styles from './explorerLinkStyles.scss';

interface ExplorerLinkProps {
  page: string;
  text?: any;
}

type ExplorerLinkType = ExplorerLinkProps &
  PropsWithChildren &
  WithClassnameType;

const ExplorerLink = (props: ExplorerLinkType) => {
  const { page, text, className = 'dapp-explorer-link', children } = props;
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
      className={classNames(styles.link, globalStyles.ml2, className)}
      rel='noreferrer'
    >
      {children ?? defaultContent}
    </a>
  );
};

export { ExplorerLink };
