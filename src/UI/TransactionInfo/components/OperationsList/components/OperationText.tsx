import * as React from 'react';
import {
  InterpretedTransactionType,
  OperationType,
  TransactionDirectionEnum,
  TransactionOperationActionTypeEnum
} from 'types/serverTransactions.types';
import { getOperationDirection } from 'utils/transactions/transactionDetailsHelpers/getOperationDirection';
import { OperationBlock } from './OperationBlock';

export const OperationText = ({
  operation,
  transaction
}: {
  operation: OperationType;
  transaction: InterpretedTransactionType;
}) => {
  const { direction } = getOperationDirection({
    operation,
    address: transaction.sender
  });

  switch (operation.action) {
    case TransactionOperationActionTypeEnum.create:
    case TransactionOperationActionTypeEnum.localMint:
    case TransactionOperationActionTypeEnum.ESDTLocalMint:
      return (
        <OperationBlock
          transaction={transaction}
          address={operation.sender}
          action='Mint by'
          direction={TransactionDirectionEnum.INTERNAL}
        />
      );
    case TransactionOperationActionTypeEnum.addQuantity:
      return (
        <OperationBlock
          transaction={transaction}
          address={operation.sender}
          action='Add quantity by'
          direction={TransactionDirectionEnum.INTERNAL}
        />
      );
    case TransactionOperationActionTypeEnum.burn:
    case TransactionOperationActionTypeEnum.localBurn:
    case TransactionOperationActionTypeEnum.ESDTLocalBurn:
      return (
        <OperationBlock
          transaction={transaction}
          address={operation.sender}
          action='Burn by'
          direction={TransactionDirectionEnum.INTERNAL}
        />
      );
    case TransactionOperationActionTypeEnum.wipe:
      return (
        <OperationBlock
          transaction={transaction}
          address={operation.receiver}
          action='Wipe from'
          direction={TransactionDirectionEnum.INTERNAL}
        />
      );
    case TransactionOperationActionTypeEnum.multiTransfer:
      return (
        <>
          <OperationBlock
            transaction={transaction}
            address={operation.sender}
            action='Multi transfer from'
            direction={direction}
          />{' '}
          <OperationBlock
            transaction={transaction}
            address={operation.receiver}
            action='To'
          />
        </>
      );
    case TransactionOperationActionTypeEnum.transfer:
      return (
        <>
          <OperationBlock
            transaction={transaction}
            address={operation.sender}
            action='Transfer from'
            direction={direction}
          />{' '}
          <OperationBlock
            transaction={transaction}
            address={operation.receiver}
            action='To'
          />
        </>
      );
    case TransactionOperationActionTypeEnum.writeLog:
      return (
        <OperationBlock
          transaction={transaction}
          address={operation.sender}
          action='Write log by'
          direction={TransactionDirectionEnum.INTERNAL}
          isFullSize
        />
      );
    case TransactionOperationActionTypeEnum.signalError:
      return (
        <OperationBlock
          transaction={transaction}
          address={operation.sender}
          action='Signal error by'
          direction={TransactionDirectionEnum.INTERNAL}
          isFullSize
        />
      );
    default:
      return (
        <>
          <OperationBlock
            transaction={transaction}
            address={operation.sender}
            action='From'
            direction={direction}
          />{' '}
          <OperationBlock
            transaction={transaction}
            address={operation.receiver}
            action='To'
          />
        </>
      );
  }
};
