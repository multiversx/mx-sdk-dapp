import React, { ReactNode } from 'react';
import classNames from 'classnames';

import styles from 'UI/TokenDetails/TokenSymbol/tokenSymbol.scss';
import { WithClassnameType } from '../../types';

export interface SimplePropsType extends WithClassnameType {
  children: ReactNode;
}

export interface CombinedPropsType extends WithClassnameType {
  small: boolean | undefined;
  children: ReactNode;
}

// TODO: Rename to "Simple" into something more relevant when sdk-dapp@3.0.0
export const Simple = ({
  children,
  className = 'dapp-simple-token-symbol'
}: SimplePropsType) => (
  <div className={classNames(styles.tokenSymbol, className)}>{children}</div>
);

// TODO: Rename to "Combined" into something more relevant when sdk-dapp@3.0.0
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
