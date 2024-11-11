import {
  faCheck,
  faHourglass,
  faTimes,
  faBan,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import {
  TransactionBatchStatusesEnum,
  TransactionsDefaultTitles,
  TransactionsDisplayInfoType,
  TransactionServerStatusesEnum
} from 'types';

export interface ToastDataState {
  id: string;
  icon: IconDefinition;
  hasCloseButton: boolean;
  title: string;
  iconClassName: string;
  expires?: number | boolean;
}

interface GetToastsOptionsDataPropsType {
  address: string;
  classes?: Record<
    'success' | 'warning' | 'danger' | string,
    'success' | 'warning' | 'danger' | string
  >;
  sender: string;
  status?: TransactionBatchStatusesEnum | TransactionServerStatusesEnum;
  toastId: string;
  transactionDisplayInfo: TransactionsDisplayInfoType;
}

export const getToastDataStateByStatus = ({
  address,
  classes = {
    success: 'success',
    danger: 'danger',
    warning: 'warning'
  },
  sender,
  status,
  toastId,
  transactionDisplayInfo
}: GetToastsOptionsDataPropsType) => {
  const successToastData: ToastDataState = {
    id: toastId,
    icon: faCheck,
    expires: 30000,
    hasCloseButton: true,
    title:
      transactionDisplayInfo?.successMessage ??
      TransactionsDefaultTitles.success,
    iconClassName: classes.success
  };

  const receivedToastData: ToastDataState = {
    id: toastId,
    icon: faCheck,
    expires: 30000,
    hasCloseButton: true,
    title: TransactionsDefaultTitles.received,
    iconClassName: classes.success
  };

  const pendingToastData: ToastDataState = {
    id: toastId,
    expires: false,
    icon: faHourglass,
    hasCloseButton: false,
    title:
      transactionDisplayInfo?.processingMessage ??
      TransactionsDefaultTitles.pending,
    iconClassName: classes.warning
  };

  const failToastData: ToastDataState = {
    id: toastId,
    icon: faTimes,
    title:
      transactionDisplayInfo?.errorMessage ?? TransactionsDefaultTitles.failed,
    hasCloseButton: true,
    iconClassName: classes.danger
  };

  const invalidToastData: ToastDataState = {
    id: toastId,
    icon: faBan,
    title:
      transactionDisplayInfo?.invalidMessage ??
      TransactionsDefaultTitles.invalid,
    hasCloseButton: true,
    iconClassName: classes?.warning
  };

  const timedOutToastData = {
    id: toastId,
    icon: faTimes,
    title:
      transactionDisplayInfo?.timedOutMessage ??
      TransactionsDefaultTitles.timedOut,
    hasCloseButton: true,
    iconClassName: classes.warning
  };

  switch (status) {
    case TransactionBatchStatusesEnum.signed:
    case TransactionBatchStatusesEnum.sent:
      return pendingToastData;
    case TransactionBatchStatusesEnum.success:
      return sender !== address ? receivedToastData : successToastData;
    case TransactionBatchStatusesEnum.cancelled:
    case TransactionBatchStatusesEnum.fail:
      return failToastData;
    case TransactionBatchStatusesEnum.timedOut:
      return timedOutToastData;
    case TransactionBatchStatusesEnum.invalid:
      return invalidToastData;
    default:
      return pendingToastData;
  }
};
