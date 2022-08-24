import React from 'react';
import classNames from 'classnames';
import styles from 'UI/TokenDetails/TokenSymbol/tokenSymbol.scss';
import { WithClassnameType } from '../../types';

export const Simple = ({
  children,
  className = 'dapp-simple-token-symbol'
}: { children: React.ReactNode } & WithClassnameType) => (
  <div className={classNames(styles.tokenSymbol, className)}>{children}</div>
);

export const Combined = ({
  small,
  children,
  className = 'dapp-combined-token-symbol'
}: {
  small: boolean | undefined;
  children: React.ReactNode;
} & WithClassnameType) => (
  <div
    className={classNames(
      styles.tokenSymbolCombined,
      {
        [styles.small]: small
      },
      className
    )}
  >
    {children}
  </div>
);
