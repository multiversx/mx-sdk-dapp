import React, { ReactNode } from 'react';
import classNames from 'classnames';

import { WithClassnameType } from '../../types';

import styles from 'UI/TokenDetails/TokenSymbol/tokenSymbol.scss';

export interface SimplePropsType extends WithClassnameType {
  children: ReactNode;
}

export interface CombinedPropsType extends WithClassnameType {
  small: boolean | undefined;
  children: ReactNode;
}

export const Simple = ({
  children,
  className = 'dapp-simple-token-symbol'
}: SimplePropsType) => (
  <div className={classNames(styles.tokenSymbol, className)}>{children}</div>
);

export const Combined = ({
  small,
  children,
  className = 'dapp-combined-token-symbol'
}: CombinedPropsType) => (
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
