import React, { PropsWithChildren } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { useGetNetworkConfig } from 'hooks/useGetNetworkConfig';
import { getExplorerLink } from 'utils/transactions/getInterpretedTransaction/helpers/getExplorerLink';
import { WithClassnameType } from '../types';

export interface ExplorerLinkPropsType
  extends PropsWithChildren,
    WithClassnameType {
  page: string;
  text?: any;
  customExplorerIcon?: IconProp;
  title?: string;
  onClick?: () => void;
  'data-testid'?: string;
}

const ExplorerLinkComponent = ({
  page,
  text,
  className = 'dapp-explorer-link',
  children,
  globalStyles,
  customExplorerIcon,
  styles,
  ...rest
}: ExplorerLinkPropsType & WithStylesImportType) => {
  const {
    network: { explorerAddress }
  } = useGetNetworkConfig();

  const defaultContent = text ?? (
    <FontAwesomeIcon
      icon={customExplorerIcon ?? faArrowUpRightFromSquare}
      className={styles?.search}
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
      className={classNames(styles?.link, globalStyles?.ml2, className)}
      rel='noreferrer'
      {...rest}
    >
      {children ?? defaultContent}
    </a>
  );
};

export const ExplorerLink = withStyles(ExplorerLinkComponent, {
  ssrStyles: () => import('UI/ExplorerLink/explorerLinkStyles.scss'),
  clientStyles: () => require('UI/ExplorerLink/explorerLinkStyles.scss').default
});
