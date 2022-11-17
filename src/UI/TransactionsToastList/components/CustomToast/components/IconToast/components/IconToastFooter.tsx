import React from 'react';
import classNames from 'classnames';
import transactionDetailsStyles from 'UI/TransactionDetails/transactionDetails.styles.scss';
import styles from '../../../../TransactionToast/transactionToast.styles.scss';
import { MessageIconToastPropsType } from '../../../customToast.types';

export const IconToastFooter = ({
  className,
  message,
  status
}: MessageIconToastPropsType) => {
  return (
    <div className={styles.footer}>
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
    </div>
  );
};
