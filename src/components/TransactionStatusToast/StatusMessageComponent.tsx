import React from 'react';
import { StatusIcon } from './StatusIcon';
import { StatusIconType } from './transactionStatusToast.types';
import styles from './transactionStatusToastStyles.scss';

type StatusMessageComponentProps = {
  type: StatusIconType;
  message?: string;
};

export const StatusMessageComponent = ({
  type,
  message
}: StatusMessageComponentProps) => {
  return (
    <div className={styles.transactionsStatusToastContent}>
      <StatusIcon type={type} />
      {message}
    </div>
  );
};
