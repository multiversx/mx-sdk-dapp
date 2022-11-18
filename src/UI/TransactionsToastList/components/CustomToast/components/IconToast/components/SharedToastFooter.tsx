import React, { PropsWithChildren } from 'react';
import { getCustomToastFooterId } from 'UI/TransactionsToastList/components/CustomToast/components/IconToast/helpers';
import styles from 'UI/TransactionsToastList/components/TransactionToast/transactionToast.styles.scss';
import { CustomToastPropsType } from '../../../customToast.types';

export const SharedToastFooter = ({
  children,
  toastId
}: CustomToastPropsType & PropsWithChildren) => {
  return (
    <div className={styles.footer} id={getCustomToastFooterId(toastId)}>
      {children}
    </div>
  );
};
