import {
  faCheck,
  faHourglass,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { TransactionBatchStatusesEnum } from 'types';

interface GetToastsOptionsDataPropsType {
  status?: TransactionBatchStatusesEnum;
  toastId: string;
  style: any;
  transactionDisplayInfo: any;
}

export const getToastDataStateByStatus = ({
  status,
  toastId,
  style,
  transactionDisplayInfo
}: GetToastsOptionsDataPropsType) => {
  const successToastData = {
    id: toastId,
    icon: faCheck,
    expires: 30000,
    hasCloseButton: true,
    title: transactionDisplayInfo.successMessage,
    iconClassName: style.success
  };

  const pendingToastData = {
    id: toastId,
    expires: false,
    icon: faHourglass,
    hasCloseButton: false,
    title: transactionDisplayInfo.processingMessage,
    iconClassName: style.warning
  };

  const failToastData = {
    id: toastId,
    icon: faTimes,
    title: transactionDisplayInfo.errorMessage,
    hasCloseButton: true,
    iconClassName: style.danger
  };

  const timedOutToastData = {
    id: toastId,
    icon: faTimes,
    title: transactionDisplayInfo.timedOutMessage,
    hasCloseButton: true,
    iconClassName: style.warning
  };

  switch (status) {
    case TransactionBatchStatusesEnum.signed:
      return pendingToastData;
    case TransactionBatchStatusesEnum.sent:
      return pendingToastData;
    case TransactionBatchStatusesEnum.success:
      return successToastData;
    case TransactionBatchStatusesEnum.cancelled:
      return failToastData;
    case TransactionBatchStatusesEnum.fail:
      return failToastData;
    case TransactionBatchStatusesEnum.timedOut:
      return timedOutToastData;
    default:
      return pendingToastData;
  }
};
