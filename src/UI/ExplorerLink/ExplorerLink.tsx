import React, { PropsWithChildren, useMemo } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import { useGetNetworkConfig } from 'hooks/useGetNetworkConfig';
import { getExplorerLink } from 'utils/transactions/getInterpretedTransaction/helpers/getExplorerLink';

import { WithClassnameType } from '../types';

import globalStyles from 'assets/sass/main.scss';
import styles from './explorerLinkStyles.scss';

interface ExplorerLinkProps {
  page: string;
  text?: any;
  title?: string;
  onClick?: () => void;
  'data-testid'?: string;
}

type ExplorerLinkPropsTypes = ExplorerLinkProps &
  PropsWithChildren &
  WithClassnameType;

export const ExplorerLink = (props: ExplorerLinkPropsTypes) => {
  const {
    page,
    text,
    className = 'dapp-explorer-link',
    children,
    ...rest
  } = props;

  const {
    network: { explorerAddress }
  } = useGetNetworkConfig();

  const defaultContent = text ?? (
    <FontAwesomeIcon icon={faSearch} className={styles.search} />
  );

  const link = getExplorerLink({
    explorerAddress: String(explorerAddress),
    to: page
  });

  return (
    <a
      href={link}
      target='_blank'
      className={classNames(styles.link, globalStyles.ml2, className)}
      rel='noreferrer'
      {...rest}
    >
      {children ?? defaultContent}
    </a>
  );
};
