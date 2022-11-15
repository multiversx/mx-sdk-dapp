import React, { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import globalStyles from 'assets/sass/main.scss';
import { SignedTransactionType } from 'types';
import { TransactionDetails } from 'UI/TransactionDetails';

import { TransactionToastContentElementsProps } from '../transactionToast.type';
import { ToastDataState } from '../utils';
import { DefaultToastDeleteButton } from './DefaultToastDeleteButton';
import styles from './transactionToaststyles.scss';

// TODO: Rename to "TransactionToastContentPropsType" when dapp-core@3.0.0
export interface TransactionToastContentProps {
  style: Record<string, string>;
  toastDataState: ToastDataState;
  transactions: SignedTransactionType[];
  showCloseButton?: boolean;
  onDeleteToast?: () => void;
  toastTitle?: string | ReactNode;
  isTimedOut?: boolean;
  customElements?: TransactionToastContentElementsProps;
}

export const TransactionToastContent = ({
  style,
  toastDataState,
  transactions,
  showCloseButton,
  onDeleteToast,
  toastTitle,
  isTimedOut,
  customElements = {
    CustomCloseButton: DefaultToastDeleteButton,
    TransactionToastStatusIcon: FontAwesomeIcon,
    TransactionDetails: TransactionDetails
  }
}: TransactionToastContentProps) => {
  const TransactionDetails = customElements?.TransactionDetails;
  const TransactionToastStatusIcon = customElements?.TransactionToastStatusIcon;
  const CustomCloseButton = customElements?.CustomCloseButton;

  return (
    <div className={style.content}>
      <div className={style.left}>
        <div className={classNames(style.icon, toastDataState.iconClassName)}>
          {TransactionToastStatusIcon && (
            <TransactionToastStatusIcon
              size='5x'
              icon={toastDataState.icon}
              className={style.svg}
            />
          )}
        </div>
      </div>

      <div className={style.right}>
        <div className={style.heading}>
          <h5 className={classNames([globalStyles.h5, style.mb4])}>
            {toastDataState.title}
          </h5>

          {showCloseButton && CustomCloseButton && (
            <CustomCloseButton
              className={styles.close}
              onClick={onDeleteToast}
            />
          )}
        </div>

        <div className={style.footer}>
          {TransactionDetails && (
            <TransactionDetails
              transactions={transactions}
              title={toastTitle}
              isTimedOut={isTimedOut}
            />
          )}
        </div>
      </div>
    </div>
  );
};
