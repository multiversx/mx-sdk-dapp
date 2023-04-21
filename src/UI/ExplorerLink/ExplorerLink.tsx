import React, { PropsWithChildren } from 'react';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';

import { useGetNetworkConfig } from 'hooks/useGetNetworkConfig';
import { getExplorerLink } from 'utils/transactions/getInterpretedTransaction/helpers/getExplorerLink';

import { WithClassnameType } from '../types';

import styles from './explorerLinkStyles.scss';

export interface ExplorerLinkPropsType
  extends PropsWithChildren,
    WithClassnameType {
  page: string;
  text?: any;
  title?: string;
  onClick?: () => void;
  'data-testid'?: string;
}

export const ExplorerLink = ({
  page,
  text,
  className = 'dapp-explorer-link',
  children,
  ...rest
}: ExplorerLinkPropsType) => {
  const {
    network: { explorerAddress }
  } = useGetNetworkConfig();

  const defaultContent = text ?? (
    <FontAwesomeIcon
      icon={faArrowUpRightFromSquare}
      className={styles.search}
    />
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
