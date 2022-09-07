import { TransactionOperationActionTypeEnum } from 'types/serverTransactions.types';

export const internalTransactionActions = [
  TransactionOperationActionTypeEnum.create,
  TransactionOperationActionTypeEnum.localMint,
  TransactionOperationActionTypeEnum.ESDTLocalMint,
  TransactionOperationActionTypeEnum.addQuantity,
  TransactionOperationActionTypeEnum.burn,
  TransactionOperationActionTypeEnum.localBurn,
  TransactionOperationActionTypeEnum.ESDTLocalBurn,
  TransactionOperationActionTypeEnum.wipe,
  TransactionOperationActionTypeEnum.writeLog,
  TransactionOperationActionTypeEnum.signalError
];

export const OPERATION_LIST_DISPLAY_LENGTH = 25;
