import React from 'react';

import { StatusIcon } from './StatusIcon';
import { StatusIconType } from './transactionStatusToast.types';

import styles from './transactionStatusToastStyles.scss';

interface StatusMessageComponentPropsType {
  type: StatusIconType;
  message?: string;
}

export const StatusMessageComponent = ({
  type,
  message
}: StatusMessageComponentPropsType) => (
  <div className={styles.transactionsStatusToastContent}>
    <StatusIcon type={type} />
    {message}
  </div>
);
