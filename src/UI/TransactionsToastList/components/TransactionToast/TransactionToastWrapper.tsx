import React from 'react';
import classNames from 'classnames';
import wrapperStyles from 'UI/TransactionsToastList/styles.scss';

type TransactionToastWrapperProps = {
  className?: string;
  children?: React.ReactNode;
};

export const TransactionToastWrapper = ({
  className = 'transaction-toast',
  children
}: TransactionToastWrapperProps) => {
  return (
    <div
      className={classNames(
        className,
        wrapperStyles.toasts,
        wrapperStyles.toastWrapper
      )}
    >
      {children}
    </div>
  );
};
