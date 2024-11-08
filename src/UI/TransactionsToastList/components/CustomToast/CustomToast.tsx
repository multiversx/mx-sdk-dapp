import React from 'react';
import { TransactionBatchStatusesEnum } from 'types';
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
    const transaction = props.transaction as any;
    const transactionHash = transaction.txHash || transaction.hash;

    return (
      <TransactionToast
        {...props}
        status={TransactionBatchStatusesEnum[props.transaction.status]}
        transactions={[{ ...transaction, hash: transactionHash }]}
      />
    );
  }

  if (props.icon) {
    return <IconToast {...props} />;
  }

  return <SimpleToast {...props} />;
};
