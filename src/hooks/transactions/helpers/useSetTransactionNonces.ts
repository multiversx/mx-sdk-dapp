import { Transaction } from '@multiversx/sdk-core';
import { useSelector } from 'reduxStore/DappProviderContext';
import { addressSelector } from 'reduxStore/selectors';
import { getAccount } from 'utils/account/getAccount';
import { getLatestNonce } from 'utils/account/getLatestNonce';

const setTransactionNonces = (
  latestNonce: number,
  transactions: Array<Transaction>
): Array<Transaction> => {
  if (transactions.length === 0) {
    return transactions;
  }

  return transactions.map((tx: Transaction, index: number) => {
    const nextNonce = latestNonce + index;

    const txNonce = tx.getNonce().valueOf();
    const computedNonce = txNonce > nextNonce ? txNonce : nextNonce;

    tx.setNonce(computedNonce);

    return tx;
  });
};

export const useSetTransactionNonces = () => {
  const address = useSelector(addressSelector);
  return async (transactions: Transaction[]) => {
    const account = await getAccount(address);
    const latestNonce = getLatestNonce(account);
    const transactionsWithIncrementalNonces = setTransactionNonces(
      latestNonce,
      transactions
    );
    return transactionsWithIncrementalNonces;
  };
};
