import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TxDetails } from '../../../TxDetails';
import React, { useMemo } from 'react';
import { ToastDataState } from './utils';
import styles from './styles.scss';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { SignedTransactionType } from 'types';
import { TransactionToastContentElementsProps } from './types';

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
  customElements
}) => {
  const CustomTransactionDetailsComponent =
    customElements?.CustomTransactionDetailsComponent;
  const TransactionToastStatusIcon = customElements?.TransactionToastStatusIcon;

  const closeButton = useMemo(() => {
    const CustomCloseButton = customElements?.CustomCloseButton;

    return CustomCloseButton ? (
      <CustomCloseButton onClick={onDeleteToast} />
    ) : (
      <button type='button' className={styles.close} onClick={onDeleteToast}>
        <FontAwesomeIcon icon={faTimes} size='xs' />
      </button>
    );
  }, [customElements?.CustomCloseButton, onDeleteToast]);

  return (
    <div className={style.content}>
      <div className={style.left}>
        <div className={classNames(style.icon, toastDataState.iconClassName)}>
          {TransactionToastStatusIcon ? (
            <TransactionToastStatusIcon
              size='5x'
              icon={toastDataState.icon}
              className={style.svg}
            />
          ) : (
            <FontAwesomeIcon
              size='5x'
              icon={toastDataState.icon}
              className={style.svg}
            />
          )}
        </div>
      </div>

      <div className={style.right}>
        <div className={style.heading}>
          <h5 className={style.title}>{toastDataState.title}</h5>
          {showCloseButton && closeButton}
        </div>

        <div className={style.footer}>
          {CustomTransactionDetailsComponent ? (
            <CustomTransactionDetailsComponent
              {...{
                transactions,
                title: toastTitle,
                isTimedOut
              }}
            />
          ) : (
            <TxDetails
              {...{
                transactions,
                title: toastTitle,
                isTimedOut
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
