import React, { Fragment } from 'react';

import { ToastType } from 'types/toasts';
import ToastMessage from 'UI/ToastMessage';
import TxDetails from 'UI/TxDetails';
import TransactionToastStatusUpdate from '../CustomToasts';

const TransactionToast = ({ toast }: { toast: ToastType }) => {
  if (!toast.descriptionProps?.props) {
    return null;
  }

  const { pending, transactions, toastSignSession } =
    toast.descriptionProps.props;

  const newTitle = pending ? 'Processing' : toast.title;

  const extendedToast = {
    ...toast,
    title: newTitle,
    description: <TxDetails transactions={transactions} />
  };

  return (
    <Fragment>
      <ToastMessage toast={extendedToast} />
      <TransactionToastStatusUpdate
        transactions={transactions}
        pending={pending}
        toastSignSession={toastSignSession}
      />
    </Fragment>
  );
};

export default TransactionToast;
