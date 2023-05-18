import axios from 'axios';
import { TRANSACTIONS_BATCH } from 'apiCalls';
import { TIMEOUT } from 'constants/network';
import { buildBatchId } from 'hooks/transactions/helpers/buildBatchId';
import { networkSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';
import {
  BatchTransactionsResponseType,
  SendBatchTransactionReturnType,
  SignedTransactionType
} from 'types';

export interface SendBatchTransactionsPropsType {
  transactions: SignedTransactionType[][];
  address: string;
  sessionId: string;
}

export async function sendBatchTransactions({
  transactions,
  sessionId,
  address
}: SendBatchTransactionsPropsType): Promise<SendBatchTransactionReturnType> {
  const { apiAddress, apiTimeout } = networkSelector(store.getState());

  try {
    const batchId = buildBatchId(sessionId, address);

    const payload = {
      transactions: transactions,
      id: batchId
    };

    const response = await axios.post<BatchTransactionsResponseType>(
      `${apiAddress}/${TRANSACTIONS_BATCH}`,
      payload,
      {
        timeout: Number(apiTimeout ?? TIMEOUT)
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
