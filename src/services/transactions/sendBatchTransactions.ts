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
  bearerToken: string;
}

export async function sendBatchTransactions({
  transactions,
  sessionId,
  account,
  apiAddress,
  bearerToken
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
        timeout: 3000,
        headers: { Authorization: `Bearer ${bearerToken}` }
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
