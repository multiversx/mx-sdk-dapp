import { TransactionDataTokenType } from 'types/transactions.types';
const defaultTransactionInfo: TransactionDataTokenType = {
  tokenId: '',
  amount: '',
  type: '',
  multiTxData: '',
  receiver: ''
};

export function getTxInfoByDataField({
  data,
  multiTransactionData,
  parsedTransactionsByDataField
}: {
  data: string;
  multiTransactionData?: string;
  parsedTransactionsByDataField: Record<string, TransactionDataTokenType>;
}): TransactionDataTokenType {
  if (parsedTransactionsByDataField == null) {
    return defaultTransactionInfo;
  }

  if (data in parsedTransactionsByDataField) {
    return parsedTransactionsByDataField[data];
  }

  if (
    multiTransactionData != null &&
    String(multiTransactionData) in parsedTransactionsByDataField
  ) {
    return parsedTransactionsByDataField[multiTransactionData];
  }

  return defaultTransactionInfo;
}
