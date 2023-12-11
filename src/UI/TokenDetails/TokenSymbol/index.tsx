import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { WithClassnameType } from '../../types';

export interface SimplePropsType extends WithClassnameType {
  children: ReactNode;
}

export interface CombinedPropsType extends WithClassnameType {
  small: boolean | undefined;
  children: ReactNode;
}

// TODO: Rename to "Simple" into something more relevant when sdk-dapp@3.0.0
const SimpleComponent = ({
  children,
  className = 'dapp-simple-token-symbol',
  styles
}: SimplePropsType & WithStylesImportType) => (
  <div className={classNames(styles?.tokenSymbol, className)}>{children}</div>
);

// TODO: Rename to "Combined" into something more relevant when sdk-dapp@3.0.0
const CombinedComponent = ({
  small,
  children,
  className = 'dapp-combined-token-symbol',
  styles
}: CombinedPropsType & WithStylesImportType) => (
  <div
    className={classNames(
      styles?.tokenSymbolCombined,
      {
        [styles?.small ?? '']: small
      },
      className
    )}
  >
    {children}
  </div>
);

export const Simple = withStyles(SimpleComponent, {
  ssrStyles: () => import('UI/TokenDetails/TokenSymbol/tokenSymbol.scss'),
  clientStyles: () =>
    require('UI/TokenDetails/TokenSymbol/tokenSymbol.scss').default
});

export const Combined = withStyles(CombinedComponent, {
  ssrStyles: () => import('UI/TokenDetails/TokenSymbol/tokenSymbol.scss'),
  clientStyles: () =>
    require('UI/TokenDetails/TokenSymbol/tokenSymbol.scss').default
});
