import {
  BatchTransactionsResponseType,
  SendBatchTransactionReturnType,
  SignedTransactionType
} from 'types';
import axios from 'axios';
import { TRANSACTIONS_BATCH } from 'apiCalls';
import { TIMEOUT } from 'constants/network';

export interface SendBatchTransactionsPropsType {
  transactions: SignedTransactionType[] | SignedTransactionType[][];
  address: string;
  sessionId: string;
  apiAddress: string;
}

export async function sendBatchTransactions({
  transactions,
  sessionId,
  address,
  apiAddress
}: SendBatchTransactionsPropsType): Promise<SendBatchTransactionReturnType> {
  try {
    const batchId = `${sessionId}-${address}`;

    const payload = {
      transactions: transactions,
      id: batchId
    };

    const response = await axios.post<BatchTransactionsResponseType>(
      `${apiAddress}/${TRANSACTIONS_BATCH}`,
      payload,
      {
        timeout: TIMEOUT
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
