import {
  SessionTransactionType,
  SignedTransactionType
} from 'types/transactions.types';

export const createTransactionsHistoryFromSessions = (
  sessions: Record<string, SessionTransactionType>
): SignedTransactionType[] => {
  const sortedSessionKeys = Object.keys(sessions).sort(
    (a, b) => Number(b) - Number(a)
  );

  return sortedSessionKeys.reduce<SignedTransactionType[]>(
    (allTransactions, sessionKey: string) => {
      const sessionTransactions = sessions[sessionKey]?.transactions || [];
      return [...allTransactions, ...sessionTransactions];
    },
    []
  );
};
