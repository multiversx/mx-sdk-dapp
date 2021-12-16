import * as React from 'react';
import { useSelector } from 'react-redux';
import { toastsSelector } from 'redux/selectors/toastSelectors';
import { CustomToastDisplayType, ToastType } from 'types/toasts';
import { getGeneratedClasses } from 'utils';
import TransactionToast from 'UI/TransactionToast';
import ToastMessage from 'UI/ToastMessage';

import { Props } from './types';

export const ToastMessagesList = ({
  shouldRenderDefaultCss = true,
  className = 'toast-messages-list'
}: Props) => {
  const toasts = useSelector(toastsSelector);

  const generatedClasses = getGeneratedClasses(
    className,
    shouldRenderDefaultCss,
    {
      wrapper:
        'toast-messages d-flex flex-column align-items-center justify-content-sm-end'
    }
  );

  const mappedToastsList = toasts.map((toast: ToastType) => {
    const isTransactionToast =
      toast.descriptionProps?.type === CustomToastDisplayType.TransactionToast;

    if (isTransactionToast) {
      return <TransactionToast key={toast.id} toast={toast} />;
    }

    return <ToastMessage key={toast.id} toast={toast} />;
  });

  return <div className={generatedClasses.wrapper}>{mappedToastsList}</div>;
};

export default ToastMessagesList;
