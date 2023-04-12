import { BatchTransactionsResponseType } from 'types';
import axios from 'axios';
import { TRANSACTIONS_BATCH } from 'apiCalls';
import { TIMEOUT } from 'constants/network';
import { networkSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';

export interface SendBatchTransactionsPropsType {
  batchId: string;
  address: string;
}

export async function getBatchTransactionsStatus({
  batchId,
  address
}: SendBatchTransactionsPropsType) {
  const { apiAddress, apiTimeout } = networkSelector(store.getState());

  const { data } = await axios.get<BatchTransactionsResponseType>(
    `${apiAddress}/${TRANSACTIONS_BATCH}/${address}/${batchId}`,
    {
      timeout: Number(apiTimeout ?? TIMEOUT)
    }
  );
  return data;
}
