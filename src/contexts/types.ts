import { Transaction } from '@elrondnetwork/erdjs/out';
import {
  GetTransactionsByHashesReturnType,
  PendingTransactionsType,
  SendSignedTransactionsReturnType
} from 'APICalls/transactions';

export type SendSignedTransactionsAsyncType = (
  signedTransactions: Transaction[]
) => Promise<SendSignedTransactionsReturnType>;

export type GetTransactionsByHashesType = (
  pendingTransactions: PendingTransactionsType
) => Promise<GetTransactionsByHashesReturnType>;

export interface OverrideDefaultBehaviourContextValueType {
  completedTransactionsDelay: number;
  sendSignedTransactionsAsync: SendSignedTransactionsAsyncType;
  getTransactionsByHash: GetTransactionsByHashesType;
}
