import { Transaction } from '@elrondnetwork/erdjs';
import { proxySelector } from 'redux/selectors';
import { store } from 'redux/store';

export type SendSignedTransactionsReturnType = string[];

export async function sendSignedTransactions(
  signedTransactions: Transaction[]
): Promise<SendSignedTransactionsReturnType> {
  const proxy = proxySelector(store.getState());
  const promises = signedTransactions.map((transaction) => {
    return proxy.sendTransaction(transaction);
  });
  const response = await Promise.all(promises);

  return response.map((txHash) => Buffer.from(txHash.hash).toString('hex'));
}
