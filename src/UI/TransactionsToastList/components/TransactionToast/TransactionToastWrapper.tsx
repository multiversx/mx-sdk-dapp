import React from 'react';
import classNames from 'classnames';
import wrapperStyles from 'UI/TransactionsToastList/styles.scss';

type TransactionToastWrapperProps = {
  className?: string;
  children?: React.ReactNode;
};

export const TransactionToastWrapper = ({
  className = 'dapp-transaction-toast-wrapper',
  children
}: TransactionToastWrapperProps) => {
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
