import styles from './transaction-status-toast.scss';
import { StatusIcon } from './StatusIcon';
import React from 'react';
import { StatusIconType } from './types';

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
