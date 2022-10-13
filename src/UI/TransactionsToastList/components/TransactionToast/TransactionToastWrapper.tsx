import React, { ReactNode } from 'react';
import classNames from 'classnames';

import wrapperStyles from 'UI/TransactionsToastList/transactionsToastListStyles.scss';

interface TransactionToastWrapperPropsType {
  className?: string;
  children?: ReactNode;
}

export const TransactionToastWrapper = ({
  className = 'dapp-transaction-toast-wrapper',
  children
}: TransactionToastWrapperPropsType) => {
  return (
    <div
      className={classNames(
        wrapperStyles.toasts,
        wrapperStyles.toastWrapper,
        className
      )}
    >
      {children}
    </div>
  );
};
