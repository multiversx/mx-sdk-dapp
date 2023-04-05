import {
  SendBatchTransactionReturnType,
  SendBatchTransactionsPropsType
} from 'types';
import axios from 'axios';
import { TRANSACTIONS_BATCH } from 'apiCalls';

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

    await axios.post(`${apiAddress}/${TRANSACTIONS_BATCH}`, payload, {
      timeout: 3000
    });

    return { batchId };
  } catch (err) {
    console.error('error sending batch transactions', err);
    return {
      error: (err as any)?.message ?? 'error sending batch transactions',
      batchId: null
    };
  }
}
