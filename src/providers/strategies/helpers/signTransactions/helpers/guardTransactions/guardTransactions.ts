import { getAccount } from 'methods/account/getAccount';
import { networkSelector } from 'store/selectors';
import { getState } from 'store/store';
import { getCrossWindowProvider } from './getCrossWindowProvider';
import { getTransactionsNeedGuardianSigning } from './getTransactionsNeedGuardianSigning';
import { Transaction } from 'lib/sdkCore';

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

  const sender = transactions[0].getSender().bech32().toString();
  const { walletAddress } = networkSelector(getState());

  const provider = await getCrossWindowProvider({
    address: sender,
    walletUrl: walletAddress
  });

  provider?.setShouldShowConsentPopup(false);
  const guardedTransactions = await provider?.guardTransactions(transactions);
  return guardedTransactions || [];
};
