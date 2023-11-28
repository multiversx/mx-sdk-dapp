import React from 'react';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { MessageIconToastPropsType } from 'UI/TransactionsToastList/components/CustomToast/customToast.types';
import { SharedToastFooter } from './SharedToastFooter';

const MessageIconToastFooterComponent = (
  props: MessageIconToastPropsType & WithStylesImportType
) => {
  const { className, message, status } = props;
  return (
    <SharedToastFooter>
      {status && <div className={props.styles?.status}>{status}</div>}
      <div className={classNames(props.styles?.container, className)}>
        {message}
      </div>
    </SharedToastFooter>
  );
};

export const MessageIconToastFooter = withStyles(
  MessageIconToastFooterComponent,
  {
    local: () => import('UI/TransactionDetails/transactionDetails.styles.scss')
  }
);
