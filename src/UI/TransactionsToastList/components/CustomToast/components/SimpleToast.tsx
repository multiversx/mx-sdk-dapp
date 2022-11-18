import React from 'react';
import classNames from 'classnames';

import wrapperStyles from 'UI/TransactionsToastList/transactionsToastList.styles.scss';

import { useMemoizedCloseButton } from '../helpers';
import { CustomToastPropsType } from './../customToast.types';

export const SimpleToast = ({
  onDelete,
  toastId,
  message,
  messageComponent,
  CustomCloseButton,
  className = 'dapp-custom-toast'
}: CustomToastPropsType) => {
  const closeButton = useMemoizedCloseButton({ onDelete, CustomCloseButton });

  return (
    <div
      className={classNames(
        wrapperStyles.toasts,
        wrapperStyles.toastWrapper,
        className
      )}
      id={toastId}
    >
      <>
        {closeButton}
        {messageComponent ? messageComponent : message}
      </>
    </div>
  );
};
