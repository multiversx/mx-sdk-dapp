import { BatchTransactionsResponseType } from 'types';
import axios from 'axios';
import { TRANSACTIONS_BATCH } from 'apiCalls';
import { TIMEOUT } from 'constants/network';
import { networkConfigSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';

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
  const {
    network: { apiTimeout }
  } = networkConfigSelector(store.getState());

  const { data } = await axios.get<BatchTransactionsResponseType>(
    `${apiAddress}/${TRANSACTIONS_BATCH}/${address}/${batchId}`,
    {
      timeout: Number(apiTimeout ?? TIMEOUT)
    }
  );
  return data;
}
