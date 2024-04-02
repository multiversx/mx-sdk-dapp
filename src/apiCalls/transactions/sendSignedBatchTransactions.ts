import { TIMEOUT } from 'constants/network';
import { buildBatchId } from 'hooks/transactions/helpers/buildBatchId';
import { addressSelector, networkSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';
import {
  BatchTransactionsRequestType,
  BatchTransactionsResponseType,
  CustomTransactionInformation,
  SignedTransactionType
} from 'types';
import { TRANSACTIONS_BATCH } from '../endpoints';
import { axiosInstance } from '../utils';

export interface SendBatchTransactionsPropsType {
  transactions: SignedTransactionType[][];
  sessionId: string;
  customTransactionInformationOverrides?: Partial<CustomTransactionInformation>;
}

export type SendSignedBatchTransactionsReturnType = {
  error?: string | null;
  batchId?: string | null;
  data?: BatchTransactionsResponseType;
};

export async function sendSignedBatchTransactions({
  transactions,
  sessionId
}: SendBatchTransactionsPropsType) {
  const address = addressSelector(store.getState());
  const { apiAddress, apiTimeout } = networkSelector(store.getState());

  if (!address) {
    return {
      error:
        'Invalid address provided. You need to be logged in to send transactions',
      batchId: null
    };
  }

  try {
    const batchId = buildBatchId({
      sessionId,
      address
    });

    const payload: BatchTransactionsRequestType = {
      transactions,
      id: batchId
    };

    const response = await axiosInstance.post<BatchTransactionsResponseType>(
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
