import React from "react";

import TxDetails from "components/TransactionSender/TxDetails";
import { ToastType, TransactionToastDescriptionType } from "types/toasts";
import ToastMessage from "../ToastMessage";
import TransactionToastStatusUpdate from "./TransactionToastStatusUpdate";

const TransactionToast = ({ toast }: { toast: ToastType }) => {
  if (toast?.descriptionProps == null) {
    return null;
  }
  const { transactions, pending, toastSignSession } = toast.descriptionProps
    ?.props as TransactionToastDescriptionType["props"];

  const extendedToast = {
    ...toast,
    description: <TxDetails transactions={transactions} />,
  };
  if (pending) {
    extendedToast.title = toast.title ?? "Processing";
  }
  return (
    <>
      <ToastMessage toast={extendedToast} />
      <TransactionToastStatusUpdate
        transactions={transactions}
        pending={pending}
        toastSignSession={toastSignSession}
      />
    </>
  );
};

export default TransactionToast;
