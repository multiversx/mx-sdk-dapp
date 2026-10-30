import { TransactionDataTokenType } from 'types/transactions.types';
const defaultTransactionInfo: TransactionDataTokenType = {
  tokenId: '',
  amount: '',
  type: '',
  multiTxData: '',
  receiver: ''
};

const getOwnEntry = (
  parsedTransactionsByDataField: Record<string, TransactionDataTokenType>,
  key: string
) =>
  Object.prototype.hasOwnProperty.call(parsedTransactionsByDataField, key)
    ? parsedTransactionsByDataField[key]
    : undefined;

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

  const transferData =
    multiTransactionData != null ? String(multiTransactionData) : null;

  if (transferData != null && transferData !== data) {
    const entry = getOwnEntry(parsedTransactionsByDataField, transferData);

    return entry?.multiTxData === transferData ? entry : defaultTransactionInfo;
  }

  const entry = getOwnEntry(parsedTransactionsByDataField, data);

  return entry && !entry.multiTxData ? entry : defaultTransactionInfo;
}
