import React, { PropsWithChildren } from 'react';
import styles from 'UI/TransactionsToastList/components/TransactionToast/transactionToast.styles.scss';

export const SharedToastFooter = ({ children }: PropsWithChildren) => {
  return <div className={styles.footer}>{children}</div>;
};
