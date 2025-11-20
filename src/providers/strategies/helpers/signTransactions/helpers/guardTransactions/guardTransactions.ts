import { Transaction } from 'lib/sdkCore';
import { getAccount } from 'methods/account/getAccount';
import { networkSelector } from 'store/selectors/networkSelectors';
import { getState } from 'store/store';
import { getCrossWindowProvider } from './getCrossWindowProvider';
import { getTransactionsNeedGuardianSigning } from './getTransactionsNeedGuardianSigning';

/*
  Performs guard transactions if needed
*/
export const guardTransactions = async (transactions: Transaction[]) => {
  const { isGuarded } = getAccount();

  const needs2FAsigning = getTransactionsNeedGuardianSigning({
    isGuarded,
    transactions
  });

  if (!needs2FAsigning) {
    return transactions;
  }

  const sender = transactions[0].sender.toBech32();
  const { walletAddress } = networkSelector(getState());

  const provider = await getCrossWindowProvider({
    address: sender,
    walletUrl: walletAddress
  });

  const guardedTransactions = await provider?.guardTransactions(transactions);
  return guardedTransactions || [];
};
