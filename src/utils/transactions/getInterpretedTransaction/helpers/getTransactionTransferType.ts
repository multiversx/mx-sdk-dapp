import {
  TransferTypeEnum,
  TransactionDirectionEnum,
  ServerTransactionType
} from 'types/serverTransactions.types';

interface IGetTransactionTransferTypeParams {
  address: string;
  transaction: ServerTransactionType;
  receiver: string;
}

export function getTransactionTransferType({
  address,
  transaction,
  receiver
}: IGetTransactionTransferTypeParams): TransactionDirectionEnum {
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
