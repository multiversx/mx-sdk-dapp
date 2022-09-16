import * as React from 'react';
import {
  OperationType,
  VisibleTransactionOperationType
} from 'types/serverTransactions.types';
import { TransactionActionBlock } from 'UI/TransactionInfo/components/TransactionAction/components/TransactionActionBlock';
import { getTransactionActionNftText } from 'utils/transactions/transactionInfoHelpers/getTransactionActionNftText';
import { getTransactionActionTokenText } from 'utils/transactions/transactionInfoHelpers/getTransactionActionTokenText';

const getTicker = (identifier: string) => {
  if (!identifier) return '';

  const arr = identifier.split('-');
  if (arr.length > 0) {
    return arr[0];
  }

  return identifier;
};

export const OperationToken = ({ operation }: { operation: OperationType }) => {
  const token = {
    type: operation.esdtType,
    name: operation.name,
    ticker: operation.svgUrl
      ? getTicker(operation.identifier)
      : operation.identifier,
    collection: operation.collection,
    identifier: operation.identifier,
    token: operation.identifier,
    decimals: operation.decimals,
    value: operation.value,
    svgUrl: operation.svgUrl
  };

  switch (operation.type) {
    case VisibleTransactionOperationType.nft: {
      const props = getTransactionActionNftText({
        token
      });
      return <TransactionActionBlock.Nft {...props} badgeText={null} />;
    }
    case VisibleTransactionOperationType.esdt: {
      const props = getTransactionActionTokenText({
        token
      });
      return <TransactionActionBlock.Token {...props} />;
    }
    default:
      return <></>;
  }
};
