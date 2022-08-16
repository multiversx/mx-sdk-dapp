import { Transaction } from '@elrondnetwork/erdjs';
import axios from 'axios';
import { networkSelector } from 'reduxStore/selectors';
import { getStore } from 'reduxStore/store';

export type SendSignedTransactionsReturnType = string[];

export async function sendSignedTransactions(
  signedTransactions: Transaction[]
): Promise<SendSignedTransactionsReturnType> {
  const { apiAddress, apiTimeout } = networkSelector(getStore().getState());
  const promises = signedTransactions.map((transaction) => {
    return axios.post(
      `${apiAddress}/transactions`,
      transaction.toPlainObject(),
      { timeout: parseInt(apiTimeout) }
    );
  });
  const response = await Promise.all(promises);

  return response.map(({ data }) => data.txHash);
}
