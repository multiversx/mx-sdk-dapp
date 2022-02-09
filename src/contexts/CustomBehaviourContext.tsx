import React from 'react';
import {
  getTransactionsByHashes,
  sendSignedTransactions
} from 'APICalls/transactions';
import { CustomBehaviourContextValueType } from './types';

const defaultValue: CustomBehaviourContextValueType = {
  sendSignedTransactionsAsync: sendSignedTransactions,
  getTransactionsByHash: getTransactionsByHashes,
  completedTransactionsDelay: 0
};

const CustomBehaviourContext = React.createContext(defaultValue);

export default CustomBehaviourContext;
