import { SendTransactionReturnType, TrackTransactionsPropsType } from 'types';
import { trackServerTransactions } from './trackServerTransactions';

export async function trackTransactions({
  transactions,
  transactionsDisplayInfo,
  sessionInformation
}: TrackTransactionsPropsType): Promise<SendTransactionReturnType> {
  try {
    const transactionsPayload = Array.isArray(transactions)
      ? transactions
      : [transactions];

    return trackServerTransactions({
      transactions: transactionsPayload,
      transactionsDisplayInfo,
      sessionInformation
    });
  } catch (err) {
    console.error('error tracking transaction', err as any);
    return { error: err as any, sessionId: null };
  }
}
