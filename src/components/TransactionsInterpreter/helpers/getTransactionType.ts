import {
  TransactionDirection,
  TransferTypeEnum,
  UITransactionType
} from './types';

export function getTransactionType(
  address: string,
  transaction: UITransactionType,
  receiver: string
): TransactionDirection {
  const directionOut = address === transaction.sender;
  const directionIn = address === receiver;
  const directionSelf = directionOut && directionIn;
  const isScResult = transaction?.type === TransferTypeEnum.SmartContractResult;

  switch (true) {
    case isScResult:
      return TransactionDirection.INTERNAL;
    case directionSelf:
      return TransactionDirection.SELF;
    case directionIn:
      return TransactionDirection.IN;
    case directionOut:
    default:
      return TransactionDirection.OUT;
  }
}
