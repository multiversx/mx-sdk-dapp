import React from 'react';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import {
  useMemoizedCloseButton,
  getIsTransaction
} from 'UI/TransactionsToastList/components/CustomToast/helpers';
import { TransactionToastWrapper } from 'UI/TransactionsToastList/components/TransactionToast/components';
import styles from 'UI/TransactionsToastList/components/TransactionToast/transactionToast.styles.scss';
import {
  ComponentIconToastPropsType,
  MessageIconToastPropsType,
  TransactionIconToastPropsType
} from '../../customToast.types';

import {
  IconToastFooter,
  TransactionToastFooter,
  ComponentToastFooter,
  SharedToastFooter
} from './components';

export type IconToastPropsType =
  | MessageIconToastPropsType
  | TransactionIconToastPropsType
  | ComponentIconToastPropsType;

const Footer = (props: IconToastPropsType) => {
  const { transaction, message, component } = props;
  const isTransaction = transaction && getIsTransaction(transaction);

  if (isTransaction) {
    return <TransactionToastFooter {...props} />;
  }
  if (message) {
    return <IconToastFooter {...props} />;
  }
  if (component !== undefined) {
    return <ComponentToastFooter {...props} />;
  }
  return (
    <SharedToastFooter {...props}>
      <></>
    </SharedToastFooter>
  );
};

export const IconToast = (props: IconToastPropsType) => {
  const {
    className = 'dapp-custom-toast',
    onDelete,
    icon = faInfo,
    iconClassName,
    title = '',
    CustomCloseButton
  } = props;

  const closeButton = useMemoizedCloseButton({ onDelete, CustomCloseButton });

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

            {closeButton}
          </div>
          <Footer {...props} />
        </div>
      </div>
    </TransactionToastWrapper>
  );
};
