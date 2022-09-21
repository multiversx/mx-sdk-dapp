import React, { PropsWithChildren } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { useGetNetworkConfig } from 'hooks/useGetNetworkConfig';
import { getExplorerLink } from 'utils/transactions/getInterpretedTransaction/helpers/getExplorerLink';
import { WithClassnameType } from '../types';
import styles from './explorerLinkStyles.scss';

export const ExplorerLink = ({
  page,
  text,
  className = 'dapp-explorer-link',
  children,
  ...rest
}: {
  page: string;
  text?: any;
  title?: string;
  onClick?: () => void;
  'data-testid'?: string;
} & PropsWithChildren &
  WithClassnameType) => {
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
      className={classNames(styles.link, className)}
      rel='noreferrer'
      {...rest}
    >
      {children ?? defaultContent}
    </a>
  );
};
