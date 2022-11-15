import React, { useEffect } from 'react';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { IconToastSliceType } from 'reduxStore/slices';
import transactionDetailsStyles from 'UI/TransactionDetails/transactionDetails.styles.scss';
import { WithClassnameType } from '../../../types';
import {
  DefaultToastDeleteButton,
  TransactionToastWrapper
} from '../TransactionToast/components';
import styles from '../TransactionToast/transactionToast.styles.scss';

export interface IconToastPropsType
  extends IconToastSliceType,
    WithClassnameType {
  onDelete: () => void;
}

export const IconToast = ({
  title = '',
  duration,
  message,
  status,
  className = 'dapp-custom-toast',
  onDelete,
  icon = faInfo,
  iconClassName = 'warning'
}: IconToastPropsType) => {
  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;
    if (duration) {
      timeout = setTimeout(onDelete, duration);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [duration]);

  return (
    <TransactionToastWrapper className={className}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={classNames(styles.icon, iconClassName)}>
            {icon && (
              <FontAwesomeIcon size='5x' icon={icon} className={styles.svg} />
            )}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.heading}>
            <h5 className={classNames([globalStyles.h5, styles.mb4])}>
              {title}
            </h5>

            <DefaultToastDeleteButton
              className={styles.close}
              onClick={onDelete}
            />
          </div>

          <div className={styles.footer}>
            <>
              {status && (
                <div className={transactionDetailsStyles.status}>{status}</div>
              )}
              <div
                className={classNames(
                  transactionDetailsStyles.container,
                  className
                )}
              >
                {message}
              </div>
            </>
          </div>
        </div>
      </div>
    </TransactionToastWrapper>
  );
};
