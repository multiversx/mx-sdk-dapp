import React from 'react';
import TransactionSender, { TransactionSenderType } from './TransactionSender';
import TransactionsTracker, {
  TransactionsTrackerType
} from './TransactionsTracker';

interface InternalComponentsType {
  txSenderProps?: TransactionSenderType;
  txTrackerProps?: TransactionsTrackerType;
}

export const InternalComponents = (props: InternalComponentsType) => {
  return (
    <>
      <TransactionSender {...props?.txSenderProps} />
      <TransactionsTracker {...props?.txTrackerProps} />
    </>
  );
};

export default InternalComponents;
