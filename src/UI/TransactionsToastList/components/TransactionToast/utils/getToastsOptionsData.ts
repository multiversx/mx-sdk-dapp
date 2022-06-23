import {
  faCheck,
  faHourglass,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

export const getToastsOptionsData = (
  toastId: string,
  style: any,
  transactionDisplayInfo: any
) => {
  const {
    errorMessage = 'Transaction failed',
    timedOutMessage = 'Transaction timed out',
    successMessage = 'Transaction successful',
    processingMessage = 'Processing transaction'
  } = transactionDisplayInfo;

  const successToastData = {
    id: toastId,
    icon: faCheck,
    expires: 30000,
    hasCloseButton: true,
    title: successMessage,
    iconClassName: style.success
  };

  const pendingToastData = {
    id: toastId,
    expires: false,
    icon: faHourglass,
    hasCloseButton: false,
    title: processingMessage,
    iconClassName: style.warning
  };

  const failToastData = {
    id: toastId,
    icon: faTimes,
    title: errorMessage,
    hasCloseButton: true,
    iconClassName: style.danger
  };

  const timedOutToastData = {
    id: toastId,
    icon: faTimes,
    title: timedOutMessage,
    hasCloseButton: true,
    iconClassName: style.warning
  };

  return {
    signed: pendingToastData,
    sent: pendingToastData,
    pending: pendingToastData,
    success: successToastData,
    cancelled: failToastData,
    fail: failToastData,
    timedOut: timedOutToastData
  };
};
