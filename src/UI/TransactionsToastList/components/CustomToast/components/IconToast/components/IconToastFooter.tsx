import React from 'react';
import classNames from 'classnames';
import transactionDetailsStyles from 'UI/TransactionDetails/transactionDetails.styles.scss';
import { MessageIconToastPropsType } from '../../../customToast.types';
import { SharedToastFooter } from './SharedToastFooter';

export const IconToastFooter = (props: MessageIconToastPropsType) => {
  const { className, message, status } = props;
  return (
    <SharedToastFooter {...props}>
      <>
        {status && (
          <div className={transactionDetailsStyles.status}>{status}</div>
        )}
        <div
          className={classNames(transactionDetailsStyles.container, className)}
        >
          {message}
        </div>
      </>
    </SharedToastFooter>
  );
};
