import { useEffect, useState } from 'react';
import { Transaction } from '@elrondnetwork/erdjs';
import { TxDataTokenType, TxsDataTokensType } from 'types/transactions';
import { getTokenFromData } from 'utils';
import parseMultiEsdtTransferData from 'utils/transactions/parseMultiEsdtTransferData';

const defaultTransactionInfo = {
  tokenId: '',
  amount: '',
  type: '',
  multiTxData: '',
  receiver: ''
};

interface UseParseMultiEsdtTransferDataPropsType {
  transactions: Transaction[];
}

interface UseParseMultiEsdtTransferDataReturnType {
  parsedTransactionsByDataField: TxsDataTokensType;
  onPrev: () => void;
  onNext: () => void;
}

export function useParseMultiEsdtTransferData({
  transactions
}: UseParseMultiEsdtTransferDataPropsType): UseParseMultiEsdtTransferDataReturnType {
  const [parsedTransactionsByDataField, setParsedTransactions] =
    useState<TxsDataTokensType>({});

  function addTransactionDataToParsedInfo(
    data: string,
    txInfo: TxDataTokenType
  ) {
    setParsedTransactions((existing) => ({
      ...existing,
      [data]: txInfo
    }));
  }

  function getTxInfoByDataField(data: string, multiTransactionData: string) {
    if (parsedTransactionsByDataField == null) {
      return defaultTransactionInfo;
    }

    if (data in parsedTransactionsByDataField) {
      return parsedTransactionsByDataField[data];
    }

    if (String(multiTransactionData) in parsedTransactionsByDataField) {
      return parsedTransactionsByDataField[multiTransactionData];
    }

    return defaultTransactionInfo;
  }

  useEffect(() => {
    if (transactions && transactions.length > 0) {
      transactions.forEach((transaction) => {
        const multiTxs = parseMultiEsdtTransferData(
          transaction.getData().toString()
        );

        if (multiTxs.length > 0) {
          multiTxs.forEach((trx) => {
            addTransactionDataToParsedInfo(trx.data, {
              tokenId: trx.token ? trx.token : '',
              amount: trx.amount ? trx.amount : '',
              type: trx.type,
              nonce: trx.nonce ? trx.nonce : '',
              multiTxData: trx.data,
              receiver: trx.receiver
            });
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
        }
      });
    }
  }, [transactions]);

  return {
    parsedTransactionsByDataField,
    getTxInfoByDataField
  };
}
