import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TxDetails } from '../../../TxDetails';
import React, { useMemo } from 'react';
import { ToastDataState } from './utils';
import styles from './styles.scss';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { SignedTransactionType } from 'types';
import { TransactionToastCustomContentProps } from './types';

export type TransactionToastContentProps = {
  style: Record<string, string>;
  toastDataState: ToastDataState;
  transactions: SignedTransactionType[];
  showCloseButton?: boolean;
  onDeleteToast?: () => void;
  toastTitle?: string | React.ReactNode;
  isTimedOut?: boolean;
  customization?: TransactionToastCustomContentProps;
};

export const TransactionToastContent: React.FC<TransactionToastContentProps> = ({
  style,
  toastDataState,
  transactions,
  showCloseButton,
  onDeleteToast,
  toastTitle,
  isTimedOut,
  customization
}) => {
  const closeButton = useMemo(() => {
    const CustomCloseButton = customization?.CustomCloseButton;

    return CustomCloseButton ? (
      <CustomCloseButton onClick={onDeleteToast} />
    ) : (
      <button type='button' className={styles.close} onClick={onDeleteToast}>
        <FontAwesomeIcon icon={faTimes} size='xs' />
      </button>
    );
  }, [customization?.CustomCloseButton, onDeleteToast]);

  const CustomTransactionDetailsComponent =
    customization?.CustomTransactionDetailsComponent;

  return (
    <div className={customization?.classes?.content ?? style.content}>
      <div className={customization?.classes?.left ?? style.left}>
        <div
          className={classNames(
            customization?.classes?.icon ?? style.icon,
            toastDataState.iconClassName
          )}
        >
          {customization?.renderLeftSideIconCallback ? (
            customization?.renderLeftSideIconCallback()
          ) : (
            <FontAwesomeIcon
              size='5x'
              icon={toastDataState.icon}
              className={customization?.classes?.svg ?? style.svg}
            />
          )}
        </div>
      </div>

      <div className={customization?.classes?.right ?? style.right}>
        <div className={customization?.classes?.heading ?? style.heading}>
          <h5 className={customization?.classes?.title ?? style.title}>
            {toastDataState.title}
          </h5>
          {showCloseButton && closeButton}
        </div>

        <div className={customization?.classes?.footer ?? style.footer}>
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
