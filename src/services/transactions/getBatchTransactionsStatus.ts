import { BatchTransactionsResponseType } from 'types';
import axios from 'axios';
import { TRANSACTIONS_BATCH } from 'apiCalls';

export interface SendBatchTransactionsPropsType {
  batchId: string | null;
  apiAddress: string;
  bearerToken: string;
}

export async function getBatchTransactionsStatus({
  apiAddress,
  bearerToken,
  batchId
}: SendBatchTransactionsPropsType) {
  const { data } = await axios.get<BatchTransactionsResponseType>(
    `${apiAddress}/${TRANSACTIONS_BATCH}/${batchId}`,
    {
      timeout: 3000,
      headers: { Authorization: `Bearer ${bearerToken}` }
    }
  );
  return data;
}
