import React, { Fragment } from 'react';

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

interface TransactionInfoPropsTypes {
  transaction: InterpretedTransactionType;
}

export const TransactionInfo = (props: TransactionInfoPropsTypes) => {
  const { transaction } = props;

  return (
    <Fragment>
      <TransactionInfoHash {...{ transaction }} />
      <TransactionInfoStatus {...{ transaction }} />
      <TransactionInfoAge {...{ transaction }} />
      <TransactionInfoMiniblock {...{ transaction }} />
      <TransactionInfoFrom {...{ transaction }} />
      <TransactionInfoTo {...{ transaction }} />
      <TransactionInfoValue {...{ transaction }} />
      <TransactionInfoMethod {...{ transaction }} />
      <TransactionInfoTokenOperations {...{ transaction }} />
      <TransactionInfoFee {...{ transaction }} />
      <TransactionInfoEgldPrice {...{ transaction }} />
      <TransactionInfoGasLimit {...{ transaction }} />
      <TransactionInfoGasPrice {...{ transaction }} />
      <TransactionInfoGasUsed {...{ transaction }} />
      <TransactionInfoNonce {...{ transaction }} />
      <TransactionInfoInputData {...{ transaction }} />
      <TransactionInfoScResults {...{ transaction }} />
    </Fragment>
  );
};
