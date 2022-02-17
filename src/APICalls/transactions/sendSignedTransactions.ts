import { Transaction } from '@elrondnetwork/erdjs';
import axios from 'axios';
import { networkSelector } from 'redux/selectors';
import { store } from 'redux/store';

export type SendSignedTransactionsReturnType = string[];

export async function sendSignedTransactions(
  signedTransactions: Transaction[]
): Promise<SendSignedTransactionsReturnType> {
  // const proxy = proxySelector(store.getState());
  const { apiAddress, apiTimeout } = networkSelector(store.getState());
  const promises = signedTransactions.map((transaction) => {
    return axios.post(
      `${apiAddress}/transactions`,
      transaction.toPlainObject(),
      { timeout: parseInt(apiTimeout) }
    );
  });
  debugger;
  const response = await Promise.all(promises);

  return response.map(({ data }) => data.txHash);
}
