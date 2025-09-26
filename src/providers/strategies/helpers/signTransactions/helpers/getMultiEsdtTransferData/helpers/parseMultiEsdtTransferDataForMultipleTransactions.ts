import type { Transaction } from '@multiversx/sdk-core';

import {
  MultiSignTransactionType,
  TransactionsDataTokensType
} from 'types/transactions.types';
import { decodeBase64 } from 'utils/decoders/base64Utils';
import { getTokenFromData } from './getTokenFromData';
import { parseMultiEsdtTransferData } from './parseMultiEsdtTransferData';

export function parseMultiEsdtTransferDataForMultipleTransactions({
  transactions
}: {
  transactions?: Transaction[];
}) {
  const allTransactions: MultiSignTransactionType[] = [];
  const parsedTransactionsByDataField: TransactionsDataTokensType = {};

  if (!transactions || transactions.length === 0) {
    return {
      allTransactions,
      parsedTransactionsByDataField
    };
  }

  transactions.forEach((transaction, transactionIndex) => {
    const plainTransaction = transaction.toPlainObject();
    const txData = decodeBase64(plainTransaction?.data ?? '');
    const multiTxs = parseMultiEsdtTransferData(txData);

    if (multiTxs.length > 0) {
      multiTxs.forEach((trx, idx) => {
        const isLastView = idx === multiTxs.length - 1;

        const newTx: MultiSignTransactionType = {
          transaction,
          multiTxData: trx.data,
          transactionIndex: idx,
          needsSigning: isLastView
        };

        parsedTransactionsByDataField[trx.data] = {
          tokenId: trx.token ? trx.token : '',
          amount: trx.amount ? trx.amount : '',
          type: trx.type,
          nonce: trx.nonce ? trx.nonce : '',
          multiTxData: trx.data,
          receiver: trx.receiver
        };

        allTransactions.push(newTx);
      });
    } else {
      const { tokenId, amount } = getTokenFromData(txData);

      if (tokenId) {
        parsedTransactionsByDataField[txData] = {
          tokenId,
          amount,
          receiver: transaction.receiver.toBech32()
        };
      }
      allTransactions.push({
        transaction,
        transactionIndex,
        multiTxData: txData,
        needsSigning: true
      });
    }
  });

  return {
    allTransactions,
    parsedTransactionsByDataField
  };
}
