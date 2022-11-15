import React, { useEffect, useMemo, ReactNode } from 'react';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { AVERAGE_TX_DURATION_MS } from 'constants/index';
import { IconToastType } from 'types/toasts.types';
import { Progress } from 'UI/Progress';
import transactionDetailsStyles from 'UI/TransactionDetails/transactionDetails.styles.scss';
import { getUnixTimestamp } from 'utils/dateTime/getUnixTimestamp';
import { getUnixTimestampWithAddedMilliseconds } from 'utils/dateTime/getUnixTimestampWithAddedMilliseconds';
import { WithClassnameType } from '../../../types';
import {
  DefaultToastDeleteButton,
  TransactionToastWrapper
} from '../TransactionToast/components';
import styles from '../TransactionToast/transactionToast.styles.scss';

export interface IconToastPropsType extends IconToastType, WithClassnameType {
  onDelete: () => void;
  messageComponent?: ReactNode;
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

  const [startTime, endTime] = useMemo(() => {
    const start = getUnixTimestamp();
    const end = getUnixTimestampWithAddedMilliseconds(AVERAGE_TX_DURATION_MS);

    return [start, end];
  }, []);

  const progress = { startTime, endTime };

  return (
    <TransactionToastWrapper className={className}>
      <Progress
        id='custom-progress'
        progress={progress}
        expiresIn={duration}
        done={false}
      >
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
                  <div className={transactionDetailsStyles.status}>
                    {status}
                  </div>
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
      </Progress>
    </TransactionToastWrapper>
  );
};
