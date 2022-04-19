import { Transaction } from '@elrondnetwork/erdjs/out';
import {
  GetTransactionsByHashesReturnType,
  PendingTransactionsType,
  SendSignedTransactionsReturnType
} from 'apiCalls/transactions';

export type SendSignedTransactionsAsyncType = (
  signedTransactions: Transaction[]
) => Promise<SendSignedTransactionsReturnType>;

export type GetTransactionsByHashesType = (
  pendingTransactions: PendingTransactionsType
) => Promise<GetTransactionsByHashesReturnType>;

export interface OverrideDefaultBehaviourContextValueType {
  sendSignedTransactionsAsync: SendSignedTransactionsAsyncType;
  getTransactionsByHash: GetTransactionsByHashesType;
}
