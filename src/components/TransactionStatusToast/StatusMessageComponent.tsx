import React from 'react';
import { StatusIcon } from './StatusIcon';
import { StatusIconType } from './transactionStatusToast.types';
import styles from './transactionStatusToastStyles.scss';

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
