import { useEffect, useState } from 'react';
import { Transaction } from '@elrondnetwork/erdjs';
import { MultiSignTxType, TxDataTokenType, TxsDataTokensType } from 'types';
import { getTokenFromData } from 'utils';
import parseMultiEsdtTransferData from 'utils/transactions/parseMultiEsdtTransferData';

const defaultTransactionInfo: TxDataTokenType = {
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
  parsedTransactionsByDataField: TxsDataTokensType;
  getTxInfoByDataField: (
    data: string,
    multiTransactionData?: string
  ) => TxDataTokenType;
  allTransactions: MultiSignTxType[];
}

export function useParseMultiEsdtTransferData({
  transactions
}: UseParseMultiEsdtTransferDataPropsType): UseParseMultiEsdtTransferDataReturnType {
  const [parsedTransactionsByDataField, setParsedTransactions] = useState<
    TxsDataTokensType
  >({});
  const [allTransactions, setAllTransactions] = useState<MultiSignTxType[]>([]);

  function addTransactionDataToParsedInfo(
    data: string,
    txInfo: TxDataTokenType
  ) {
    setParsedTransactions((existing) => ({
      ...existing,
      [data]: txInfo
    }));
  }

  function getTxInfoByDataField(
    data: string,
    multiTransactionData?: string
  ): TxDataTokenType {
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
    if (transactions && transactions.length > 0) {
      const allTxs: MultiSignTxType[] = [];
      transactions.forEach((transaction, transactionIndex) => {
        const txData = transaction.getData().toString();
        const multiTxs = parseMultiEsdtTransferData(txData);

        if (multiTxs.length > 0) {
          multiTxs.forEach((trx, idx) => {
            const newTx: MultiSignTxType = {
              transaction,
              multiTxData: trx.data,
              transactionIndex: idx
            };
            addTransactionDataToParsedInfo(trx.data, {
              tokenId: trx.token ? trx.token : '',
              amount: trx.amount ? trx.amount : '',
              type: trx.type,
              nonce: trx.nonce ? trx.nonce : '',
              multiTxData: trx.data,
              receiver: trx.receiver
            });
            allTxs.push(newTx);
          });
        } else {
          const { tokenId, amount } = getTokenFromData(
            transaction.getData().toString()
          );

          if (tokenId) {
            addTransactionDataToParsedInfo(transaction.getData().toString(), {
              tokenId,
              amount,
              receiver: transaction.getReceiver().bech32()
            });
          }
          allTxs.push({ transaction, transactionIndex });
        }
      });
      setAllTransactions(allTxs);
    }
  }

  useEffect(() => {
    extractTransactionESDTData();
  }, [transactions]);

  return {
    parsedTransactionsByDataField,
    getTxInfoByDataField,
    allTransactions
  };
}
