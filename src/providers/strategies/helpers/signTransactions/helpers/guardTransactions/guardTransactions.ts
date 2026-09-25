import { Transaction } from 'lib/sdkCore';
import { getAccount } from 'methods/account/getAccount';
import { networkSelector } from 'store/selectors/networkSelectors';
import { getState } from 'store/store';
import { getCrossWindowProvider } from './getCrossWindowProvider';
import { getTransactionsNeedGuardianSigning } from './getTransactionsNeedGuardianSigning';
import { getUsesAccountGuardian } from './getUsesAccountGuardian';

/*
  Performs guard transactions if needed
*/
export const guardTransactions = async (transactions: Transaction[]) => {
  const { address, isGuarded } = getAccount();

  if (!isGuarded) {
    return transactions;
  }

  const accountTransactions = transactions.filter((transaction) =>
    getUsesAccountGuardian(transaction, address)
  );

  const needs2FAsigning = getTransactionsNeedGuardianSigning({
    isGuarded,
    transactions: accountTransactions
  });

  if (!needs2FAsigning) {
    return transactions;
  }

  const { walletAddress } = networkSelector(getState());

  // the guarded account, also for transactions sent by a contract on its behalf
  const provider = await getCrossWindowProvider({
    address,
    walletUrl: walletAddress
  });

  const guardedTransactions =
    await provider?.guardTransactions(accountTransactions);

  if (!guardedTransactions) {
    return [];
  }

  if (accountTransactions.length === transactions.length) {
    return guardedTransactions;
  }

  let guardedIndex = 0;

  return transactions.map((transaction) =>
    getUsesAccountGuardian(transaction, address)
      ? guardedTransactions[guardedIndex++]
      : transaction
  );
};
