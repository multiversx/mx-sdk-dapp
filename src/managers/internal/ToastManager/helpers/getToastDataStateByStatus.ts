import { TransactionBatchStatusesEnum } from 'types';
import {
  GetToastsOptionsDataPropsType,
  IToastDataState,
  TransactionsDefaultTitles
} from '../types';

export enum ToastIconsEnum {
  check = 'check',
  hourglass = 'hourglass',
  times = 'times',
  ban = 'ban'
}

export const getToastDataStateByStatus = ({
  address,
  sender,
  status,
  toastId,
  transactionsDisplayInfo,
  txActionName
}: GetToastsOptionsDataPropsType) => {
  const successToastData: IToastDataState = {
    id: toastId,
    icon: ToastIconsEnum.check,
    hasCloseButton: true,
    title:
      transactionsDisplayInfo?.successMessage ??
      txActionName ??
      TransactionsDefaultTitles.success,
    iconClassName: 'success'
  };

  const receivedToastData: IToastDataState = {
    id: toastId,
    icon: ToastIconsEnum.check,
    hasCloseButton: true,
    title:
      transactionsDisplayInfo?.receivedMessage ??
      transactionsDisplayInfo?.successMessage ??
      txActionName ??
      TransactionsDefaultTitles.received,
    iconClassName: 'success'
  };

  const pendingToastData: IToastDataState = {
    id: toastId,
    icon: ToastIconsEnum.hourglass,
    hasCloseButton: false,
    title:
      transactionsDisplayInfo?.processingMessage ??
      txActionName ??
      TransactionsDefaultTitles.pending,
    iconClassName: 'warning'
  };

  const failToastData: IToastDataState = {
    id: toastId,
    icon: ToastIconsEnum.times,
    title:
      transactionsDisplayInfo?.errorMessage ??
      txActionName ??
      TransactionsDefaultTitles.failed,
    hasCloseButton: true,
    iconClassName: 'danger'
  };

  const invalidToastData: IToastDataState = {
    id: toastId,
    icon: ToastIconsEnum.ban,
    title:
      transactionsDisplayInfo?.invalidMessage ??
      txActionName ??
      TransactionsDefaultTitles.invalid,
    hasCloseButton: true,
    iconClassName: 'warning'
  };

  const timedOutToastData = {
    id: toastId,
    icon: ToastIconsEnum.times,
    title:
      transactionsDisplayInfo?.timedOutMessage ??
      txActionName ??
      TransactionsDefaultTitles.timedOut,
    hasCloseButton: true,
    iconClassName: 'warning'
  };

  switch (status) {
    case TransactionBatchStatusesEnum.success:
      return sender !== address ? receivedToastData : successToastData;
    case TransactionBatchStatusesEnum.cancelled:
    case TransactionBatchStatusesEnum.fail:
      return failToastData;
    case TransactionBatchStatusesEnum.timedOut:
      return timedOutToastData;
    case TransactionBatchStatusesEnum.invalid:
      return invalidToastData;

    case TransactionBatchStatusesEnum.signed:
    case TransactionBatchStatusesEnum.sent:
    default:
      return pendingToastData;
  }
};
