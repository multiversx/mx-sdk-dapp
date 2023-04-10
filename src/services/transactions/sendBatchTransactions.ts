import {
  BatchTransactionsResponseType,
  SendBatchTransactionReturnType,
  SignedTransactionType
} from 'types';
import axios from 'axios';
import { TRANSACTIONS_BATCH } from 'apiCalls';

export interface SendBatchTransactionsPropsType {
  transactions: SignedTransactionType[];
  account: string;
  sessionId: string;
  apiAddress: string;
}

export async function sendBatchTransactions({
  transactions,
  sessionId,
  account,
  apiAddress
}: SendBatchTransactionsPropsType): Promise<SendBatchTransactionReturnType> {
  try {
    const batchId = `${sessionId}-${account}`;

    const payload = {
      transactions: transactions,
      id: batchId
    };

    const response = await axios.post<BatchTransactionsResponseType>(
      `${apiAddress}/${TRANSACTIONS_BATCH}`,
      payload,
      {
        timeout: 3000
      }
    );

    return { batchId, data: response.data };
  } catch (err) {
    console.error('error sending batch transactions', err);
    return {
      error: (err as any)?.message ?? 'error sending batch transactions',
      batchId: null
    };
  }
}
