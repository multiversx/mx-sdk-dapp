import React from 'react';
import { getIsTransaction } from 'UI/TransactionsToastList/components/CustomToast/helpers';
import { IconToastPropsType } from '../../iconToast.types';
import {
  MessageIconToastFooter,
  SharedToastFooter,
  TransactionToastFooter,
  ComponentToastFooter
} from './components';

export const IconToastFooter = (props: IconToastPropsType) => {
  const { transaction, message, component } = props;
  const isTransaction = transaction && getIsTransaction(transaction);

  if (isTransaction) {
    return <TransactionToastFooter {...props} />;
  }
  if (message) {
    return <MessageIconToastFooter {...props} />;
  }
  // a null component means footer needs to search for it in componentsDictionary
  if (component !== undefined) {
    return <ComponentToastFooter {...props} />;
  }
  return <SharedToastFooter />;
};
