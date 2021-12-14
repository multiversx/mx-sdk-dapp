import { Transaction } from '@elrondnetwork/erdjs';

export interface SendTransactionsPropsType {
  transactionPayload: Transaction[] | Transaction;
  minGasLimit?: number;
}

export interface SimpleTransactionType {
  value: string;
  receiver: string;
  data?: string;
  gasPrice?: number;
  gasLimit?: number;
  chainID?: string;
  version?: number;
  options?: number;
}

export interface SendSimpleTransactionPropsType {
  transactions: SimpleTransactionType | SimpleTransactionType[];
  minGasLimit?: number;
}
