import axios from 'axios';
import { TRANSACTIONS_BATCH } from 'apiCalls';
import { TIMEOUT } from 'constants/network';
import { networkStore } from 'lib/sdkDappCore';
import { BatchTransactionsResponseType } from 'types';

export interface SendBatchTransactionsPropsType {
  batchId: string;
  address: string;
}

export async function getBatchTransactionsStatus({
  batchId,
  address
}: SendBatchTransactionsPropsType) {
  const { apiAddress, apiTimeout } = networkStore.getState().network;

  const { data } = await axios.get<BatchTransactionsResponseType>(
    `${apiAddress}/${TRANSACTIONS_BATCH}/${address}/${batchId}`,
    {
      timeout: Number(apiTimeout ?? TIMEOUT)
    }
  );
  return data;
}
