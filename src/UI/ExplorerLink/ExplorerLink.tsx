import React, { PropsWithChildren, useMemo } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { useGetNetworkConfig } from 'hooks';
import { getExplorerLink } from 'utils/transactions/getInterpretedTransaction/helpers/getExplorerLink';
import { WithClassnameType } from '../types';
import styles from './explorerLinkStyles.scss';

export const ExplorerLink = ({
  to,
  text,
  className = 'dapp-explorer-link',
  children,
  ...rest
}: {
  to: string;
  text?: any;
  title?: string;
  onClick?: () => void;
  'data-testid'?: string;
} & PropsWithChildren &
  WithClassnameType) => {
  const {
    network: { explorerAddress }
  } = useGetNetworkConfig();

  const defaultContent = useMemo(
    () => text ?? <FontAwesomeIcon icon={faSearch} className={styles.search} />,
    [text]
  );

  const link = getExplorerLink({
    explorerAddress: String(explorerAddress),
    to
  });

  return (
    <a
      href={link}
      target='_blank'
      className={classNames(styles.link, className)}
      rel='noreferrer'
      {...{ ...rest }}
    >
      {children ?? defaultContent}
    </a>
  );
};
