import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TxDetails } from '../../../TxDetails';
import React from 'react';
import { ToastDataState } from './utils';
import styles from './styles.scss';
import { SignedTransactionType } from 'types';
import { TransactionToastContentElementsProps } from './types';
import { DefaultToastDeleteButton } from './DefaultToastDeleteButton';

export type TransactionToastContentProps = {
  style: Record<string, string>;
  toastDataState: ToastDataState;
  transactions: SignedTransactionType[];
  showCloseButton?: boolean;
  onDeleteToast?: () => void;
  toastTitle?: string | React.ReactNode;
  isTimedOut?: boolean;
  customElements?: TransactionToastContentElementsProps;
};

export const TransactionToastContent: React.FC<TransactionToastContentProps> = ({
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
    TransactionDetails: TxDetails
  }
}) => {
  const TransactionDetails = customElements?.TransactionDetails!;
  const TransactionToastStatusIcon = customElements?.TransactionToastStatusIcon!;
  const CustomCloseButton = customElements?.CustomCloseButton!;

  return (
    <div className={style.content}>
      <div className={style.left}>
        <div className={classNames(style.icon, toastDataState.iconClassName)}>
          <TransactionToastStatusIcon
            size='5x'
            icon={toastDataState.icon}
            className={style.svg}
          />
        </div>
      </div>

      <div className={style.right}>
        <div className={style.heading}>
          <h5 className={style.title}>{toastDataState.title}</h5>
          {showCloseButton && (
            <CustomCloseButton
              className={styles.close}
              onClick={onDeleteToast}
            />
          )}
        </div>

        <div className={style.footer}>
          <TransactionDetails
            {...{
              transactions,
              title: toastTitle,
              isTimedOut
            }}
          />
        </div>
      </div>
    </div>
  );
};
