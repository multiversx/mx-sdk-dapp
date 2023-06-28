import React from 'react';
import classNames from 'classnames';
import wrapperStyles from 'UI/TransactionsToastList/transactionsToastList.styles.scss';
import { ComponentIconToastPropsType } from '../customToast.types';
import { useMemoizedCloseButton } from '../helpers';

export const ComponentToast = ({
  onDelete,
  message,
  component,
  CustomCloseButton,
  className = 'dapp-custom-toast',
  toastId
}: ComponentIconToastPropsType) => {
  const closeButton = useMemoizedCloseButton({ onDelete, CustomCloseButton });

  return (
    <div
      id={toastId}
      className={classNames(
        wrapperStyles.toasts,
        wrapperStyles.toastWrapper,
        className
      )}
    >
      <>
        {closeButton}
        {component ? component() : message}
      </>
    </div>
  );
};
