import { TransactionServerStatusesEnum } from 'types/enums.types';

export const getIsTransactionInvalidOrFailed = (
  status: TransactionServerStatusesEnum
): boolean => {
  const failedOrInvalidTransactionStatuses = [
    TransactionServerStatusesEnum.fail,
    TransactionServerStatusesEnum.invalid
  ];

  const isTransactionFailedOrInvalid =
    failedOrInvalidTransactionStatuses.includes(
      status as TransactionServerStatusesEnum
    );

  return isTransactionFailedOrInvalid;
};
