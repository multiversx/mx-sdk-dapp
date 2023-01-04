import React, { ReactNode } from 'react';
import classNames from 'classnames';

import wrapperStyles from 'UI/TransactionsToastList/transactionsToastList.styles.scss';

export interface TransactionToastWrapperPropsType {
  className?: string;
  children?: ReactNode;
  id?: string;
}

export const TransactionToastWrapper = ({
  className = 'dapp-transaction-toast-wrapper',
  children,
  id
}: TransactionToastWrapperPropsType) => (
  <div
    id={id}
    className={classNames(
      wrapperStyles.toasts,
      wrapperStyles.toastWrapper,
      className
    )}
  >
    {children}
  </div>
);
