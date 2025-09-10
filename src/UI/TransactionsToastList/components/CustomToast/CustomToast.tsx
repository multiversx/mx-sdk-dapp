import React from 'react';
import {
  ServerTransactionType,
  SignedTransactionType,
  TransactionBatchStatusesEnum
} from 'types';
import { TransactionToast } from '../TransactionToast';
import { IconToast, SimpleToast, CustomComponentToast } from './components';
import { CustomToastPropsType } from './customToast.types';
import { useRemoveCustomToast } from './helpers';

export const CustomToast = (props: CustomToastPropsType) => {
  const { duration, onDelete } = props;
  useRemoveCustomToast({ duration, onDelete });

  if (props.component) {
    return <CustomComponentToast {...props} />;
  }

  if (props.transaction) {
    const serverTransaction = props.transaction as ServerTransactionType;
    const signedTransaction =
      props.transaction as unknown as SignedTransactionType;

    const transactionHash = serverTransaction.txHash || signedTransaction.hash;

    return (
      <TransactionToast
        {...props}
        status={props.transaction.status as TransactionBatchStatusesEnum}
        transactions={[{ ...signedTransaction, hash: transactionHash }]}
      />
    );
  }

  if (props.icon) {
    return <IconToast {...props} />;
  }

  return <SimpleToast {...props} />;
};
