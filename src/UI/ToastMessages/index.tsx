import * as React from "react";
import { useSelector } from "react-redux";
import { toastsSelector } from "redux/selectors/toastSelector";
import { CustomToastDisplayType, ToastType } from "types/toasts";
import TransactionToast from "./CustomToasts/TransactionToast";
import ToastMessage from "./ToastMessage";

function renderToast(toast: ToastType) {
  switch (toast.descriptionProps?.type) {
    case CustomToastDisplayType.TransactionToast:
      return <TransactionToast key={toast.id} toast={toast} />;

    default:
      return <ToastMessage key={toast.id} toast={toast} />;
  }
}

const ToastMessages = () => {
  const toasts = useSelector(toastsSelector);
  return (
    <div className="toast-messages d-flex flex-column align-items-center justify-content-sm-end">
      {toasts.map(renderToast)}
    </div>
  );
};

export default ToastMessages;
