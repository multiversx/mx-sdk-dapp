import { useEffect, useState } from 'react';
import { Transaction } from '@multiversx/sdk-core';
import {
  MultiSignTransactionType,
  TransactionDataTokenType,
  TransactionsDataTokensType
} from 'types';
import { parseMultiEsdtTransferDataForMultipleTransactions } from 'utils/transactions/parseMultiEsdtTransferDataForMultipleTransactions';

const defaultTransactionInfo: TransactionDataTokenType = {
  tokenId: '',
  amount: '',
  type: '',
  multiTxData: '',
  receiver: ''
};

interface UseParseMultiEsdtTransferDataPropsType {
  transactions?: Transaction[];
}

interface UseParseMultiEsdtTransferDataReturnType {
  parsedTransactionsByDataField: TransactionsDataTokensType;
  getTxInfoByDataField: (
    data: string,
    multiTransactionData?: string
  ) => TransactionDataTokenType;
  allTransactions: MultiSignTransactionType[];
}

export function useParseMultiEsdtTransferData({
  transactions
}: UseParseMultiEsdtTransferDataPropsType): UseParseMultiEsdtTransferDataReturnType {
  const [parsedTransactionsByDataField, setParsedTransactions] =
    useState<TransactionsDataTokensType>({});
  const [allTransactions, setAllTransactions] = useState<
    MultiSignTransactionType[]
  >([]);

  function getTxInfoByDataField(
    data: string,
    multiTransactionData?: string
  ): TransactionDataTokenType {
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

  function extractTransactionESDTData() {
    const { allTransactions, parsedTransactionsByDataField } =
      parseMultiEsdtTransferDataForMultipleTransactions({
        transactions
      });

    setAllTransactions(allTransactions);
    setParsedTransactions(parsedTransactionsByDataField);
  }

  useEffect(() => {
    extractTransactionESDTData();
  }, [transactions?.length]);

  return {
    parsedTransactionsByDataField,
    getTxInfoByDataField,
    allTransactions
  };
}
