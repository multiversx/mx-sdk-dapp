import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';

export interface TransactionToastWrapperPropsType {
  className?: string;
  children?: ReactNode;
  id?: string;
}

const TransactionToastWrapperComponent = ({
  className = 'dapp-transaction-toast-wrapper',
  children,
  id,
  styles: wrapperStyles
}: TransactionToastWrapperPropsType & WithStylesImportType) => (
  <div
    id={id}
    className={classNames(
      wrapperStyles?.toasts,
      wrapperStyles?.toastWrapper,
      className
    )}
  >
    {children}
  </div>
);

export const TransactionToastWrapper = withStyles(
  TransactionToastWrapperComponent,
  {
    ssrStyles: () =>
      import('UI/TransactionsToastList/transactionsToastList.styles.scss'),
    clientStyles: () =>
      require('UI/TransactionsToastList/transactionsToastList.styles.scss')
        .default
  }
);
