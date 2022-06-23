import React from 'react';
import styles from 'UI/TokenDetails/TokenSymbol/token-symbol.scss';
import classNames from 'classnames';

export const Simple = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.tokenSymbol}>{children}</div>
);

export const Combined = ({
  small,
  children
}: {
  small: boolean | undefined;
  children: React.ReactNode;
}) => (
  <div
    className={classNames(styles.tokenSymbolCombined, {
      [styles.small]: small
    })}
  >
    {children}
  </div>
);
