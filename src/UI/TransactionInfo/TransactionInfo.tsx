import React from 'react';
import { InterpretedTransactionType } from 'types/serverTransactions.types';
import {
  TransactionInfoValue,
  TransactionInfoStatus,
  TransactionInfoAge,
  TransactionInfoMiniblock,
  TransactionInfoFrom,
  TransactionInfoTo,
  TransactionInfoMethod,
  TransactionInfoTokenOperations,
  TransactionInfoEgldPrice,
  TransactionInfoGasLimit,
  TransactionInfoGasPrice,
  TransactionInfoGasUsed,
  TransactionInfoNonce,
  TransactionInfoScResults,
  TransactionInfoInputData,
  TransactionInfoHash
} from './components';
import { TransactionInfoFee } from './components/transactionInfoFields/TransactionInfoFee';

export const TransactionInfo = ({
  transaction
}: {
  transaction: InterpretedTransactionType;
}) => {
  return (
    <>
      <TransactionInfoHash transaction={transaction} />
      <TransactionInfoStatus transaction={transaction} />
      <TransactionInfoAge transaction={transaction} />
      <TransactionInfoMiniblock transaction={transaction} />
      <TransactionInfoFrom transaction={transaction} />
      <TransactionInfoTo transaction={transaction} />
      <TransactionInfoValue transaction={transaction} />
      <TransactionInfoMethod transaction={transaction} />
      <TransactionInfoTokenOperations transaction={transaction} />
      <TransactionInfoFee transaction={transaction} />
      <TransactionInfoEgldPrice transaction={transaction} />
      <TransactionInfoGasLimit transaction={transaction} />
      <TransactionInfoGasPrice transaction={transaction} />
      <TransactionInfoGasUsed transaction={transaction} />
      <TransactionInfoNonce transaction={transaction} />
      <TransactionInfoInputData transaction={transaction} />
      <TransactionInfoScResults transaction={transaction} />
    </>
  );
};
