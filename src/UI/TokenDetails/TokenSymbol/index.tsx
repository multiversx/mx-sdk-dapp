import React from 'react';
import styles from 'UI/TokenDetails/TokenSymbol/token-symbol.scss';
import classNames from 'classnames';
import { WithClassname } from '../../../types';

export const Simple = ({
  children,
  className = 'dapp-simple-token-symbol'
}: { children: React.ReactNode } & WithClassname) => (
  <div className={classNames(styles.tokenSymbol, className)}>{children}</div>
);

export const Combined = ({
  small,
  children,
  className = 'dapp-combined-token-symbol'
}: {
  small: boolean | undefined;
  children: React.ReactNode;
} & WithClassname) => (
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
