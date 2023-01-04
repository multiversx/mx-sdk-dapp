import React from 'react';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { useMemoizedCloseButton } from 'UI/TransactionsToastList/components/CustomToast/helpers';
import { TransactionToastWrapper } from 'UI/TransactionsToastList/components/TransactionToast/components';
import styles from 'UI/TransactionsToastList/components/TransactionToast/transactionToast.styles.scss';
import { IconToastFooter } from './components/IconToastFooter';
import { IconToastPropsType } from './iconToast.types';

export const IconToast = (props: IconToastPropsType) => {
  const {
    className = 'dapp-custom-toast',
    onDelete,
    icon = faInfo,
    iconClassName,
    title = '',
    toastId,
    CustomCloseButton
  } = props;

  const closeButton = useMemoizedCloseButton({ onDelete, CustomCloseButton });

  return (
    <TransactionToastWrapper className={className} id={toastId}>
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

            {closeButton}
          </div>
          <IconToastFooter {...props} />
        </div>
      </div>
    </TransactionToastWrapper>
  );
};
