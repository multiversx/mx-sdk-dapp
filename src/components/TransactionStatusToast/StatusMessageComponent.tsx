import React from 'react';
import { StatusIcon } from './StatusIcon';
import styles from './transaction-status-toast.scss';
import { StatusIconType } from './transactionStatusToast.types';

type StatusMessageComponentProps = {
  type: StatusIconType;
  message?: string;
};

export const StatusMessageComponent: React.FC<StatusMessageComponentProps> = ({
  type,
  message
}) => {
  return (
    <div className={styles.transactionsStatusToastContent}>
      <StatusIcon type={type} />
      {message}
    </div>
  );
};
