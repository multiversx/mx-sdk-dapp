import {
  TransactionDirection,
  TransferTypeEnum,
  UITransactionType
} from './types';

export function getTransactionDirection(
  address: string,
  transaction: UITransactionType,
  receiver: string
): TransactionDirection {
  const directionOut = address === transaction.sender;
  const directionIn = address === receiver;
  const directionSelf = directionOut && directionIn;
  const isScResult = transaction?.type === TransferTypeEnum.SmartContractResult;

  let direction = TransactionDirection.OUT;
  switch (true) {
    case isScResult:
      direction = TransactionDirection.INTERNAL;
      break;
    case directionSelf:
      direction = TransactionDirection.SELF;
      break;
    case directionOut:
      direction = TransactionDirection.OUT;
      break;
    case directionIn:
      direction = TransactionDirection.IN;
      break;
  }
  return direction;
}
