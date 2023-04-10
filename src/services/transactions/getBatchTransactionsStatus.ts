import { BatchTransactionsResponseType } from 'types';
import axios from 'axios';
import { TRANSACTIONS_BATCH } from 'apiCalls';

export interface SendBatchTransactionsPropsType {
  batchId: string;
  address: string;
  apiAddress: string;
}

export async function getBatchTransactionsStatus({
  apiAddress,
  batchId,
  address
}: SendBatchTransactionsPropsType) {
  const { data } = await axios.get<BatchTransactionsResponseType>(
    `${apiAddress}/${TRANSACTIONS_BATCH}/${address}/${batchId}`,
    {
      timeout: 3000
    }
  );
  return data;
}
