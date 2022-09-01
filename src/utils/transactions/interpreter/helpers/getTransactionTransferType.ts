import { TransactionDirectionEnum } from 'types/interpretedTransactions.types';
import {
  ServerTransactionType,
  TransferTypeEnum
} from 'types/serverTransactions.types';

export function getTransactionTransferType(
  address: string,
  transaction: ServerTransactionType,
  receiver: string
): TransactionDirectionEnum {
  const directionOut = address === transaction.sender;
  const directionIn = address === receiver;
  const directionSelf = directionOut && directionIn;
  const isScResult = transaction?.type === TransferTypeEnum.SmartContractResult;

  switch (true) {
    case isScResult:
      return TransactionDirectionEnum.INTERNAL;
    case directionSelf:
      return TransactionDirectionEnum.SELF;
    case directionIn:
      return TransactionDirectionEnum.IN;
    case directionOut:
    default:
      return TransactionDirectionEnum.OUT;
  }
}
