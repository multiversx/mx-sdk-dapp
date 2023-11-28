import React from 'react';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { StatusIcon } from './StatusIcon';
import { StatusIconType } from './transactionStatusToast.types';

export interface StatusMessageComponentPropsType {
  type: StatusIconType;
  message?: string;
}

const StatusMessage = ({
  type,
  message,
  styles
}: StatusMessageComponentPropsType & WithStylesImportType) => (
  <div className={styles?.transactionsStatusToastContent}>
    <StatusIcon type={type} />
    {message}
  </div>
);

export const StatusMessageComponent = withStyles(StatusMessage, {
  local: () =>
    import(
      'components/TransactionStatusToast/transactionStatusToastStyles.scss'
    )
});
