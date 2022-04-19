import React from 'react';
import {
  getTransactionsByHashes,
  sendSignedTransactions
} from 'apiCalls/transactions';
import { OverrideDefaultBehaviourContextValueType } from './types';

const defaultValue: OverrideDefaultBehaviourContextValueType = {
  sendSignedTransactionsAsync: sendSignedTransactions,
  getTransactionsByHash: getTransactionsByHashes
};

const OverrideDefaultBehaviourContext = React.createContext(defaultValue);

export default OverrideDefaultBehaviourContext;
