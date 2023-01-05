import React from 'react';
import classNames from 'classnames';

import wrapperStyles from 'UI/TransactionsToastList/transactionsToastList.styles.scss';

import { CustomToastPropsType } from '../customToast.types';
import { useMemoizedCloseButton } from '../helpers';

export const SimpleToast = ({
  onDelete,
  message,
  messageComponent,
  CustomCloseButton,
  className = 'dapp-custom-toast',
  toastId
}: CustomToastPropsType) => {
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
        {messageComponent ? messageComponent : message}
      </>
    </div>
  );
};
