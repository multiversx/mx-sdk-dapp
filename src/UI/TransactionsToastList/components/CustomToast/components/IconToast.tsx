import React from 'react';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import transactionDetailsStyles from 'UI/TransactionDetails/transactionDetails.styles.scss';
import { TransactionToastWrapper } from '../../TransactionToast/components';
import { CustomToastPropsType } from '../customToast.types';
import { useMemoizedCloseButton } from '../helpers';
import styles from '../TransactionToast/transactionToast.styles.scss';

export const IconToast = ({
  message,
  className = 'dapp-custom-toast',
  onDelete,
  iconToastData,
  CustomCloseButton
}: CustomToastPropsType) => {
  const icon = iconToastData?.icon ?? faInfo;
  const title = iconToastData?.title ?? '';
  const status = iconToastData?.status ?? '';
  const closeButton = useMemoizedCloseButton({ onDelete, CustomCloseButton });

  return (
    <TransactionToastWrapper className={className}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div
            className={classNames(styles.icon, iconToastData?.iconClassName)}
          >
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

            {closeButton}
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
