import { StoreType } from 'store/store.types';
import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types/enums.types';
import {
  SessionTransactionType,
  SignedTransactionType
} from 'types/transactions.types';
import {
  failedTransactionsSessionsSelector,
  pendingTransactionsSessionsSelector,
  successfulTransactionsSessionsSelector
} from '../transactionsSelector';

const createTransaction = (
  status: SignedTransactionType['status']
): SignedTransactionType =>
  ({
    hash: `hash-${status}`,
    status
  }) as SignedTransactionType;

const createSession = ({
  sessionStatus,
  transactionStatuses
}: {
  sessionStatus: SessionTransactionType['status'];
  transactionStatuses: SignedTransactionType['status'][];
}): SessionTransactionType =>
  ({
    status: sessionStatus,
    transactions: transactionStatuses.map(createTransaction),
    interpretedTransactions: {}
  }) as SessionTransactionType;

const createState = (
  transactions: Record<string, SessionTransactionType>
): StoreType => ({ transactions }) as StoreType;

describe('transactions sessions selectors', () => {
  it('returns a settled successful session (regression: session status moves off `sent`)', () => {
    const state = createState({
      '1': createSession({
        sessionStatus: TransactionBatchStatusesEnum.success,
        transactionStatuses: [TransactionServerStatusesEnum.success]
      })
    });

    expect(Object.keys(successfulTransactionsSessionsSelector(state))).toEqual([
      '1'
    ]);
    expect(failedTransactionsSessionsSelector(state)).toEqual({});
    expect(pendingTransactionsSessionsSelector(state)).toEqual({});
  });

  it('returns a successful session observed mid-transition, while still `sent`', () => {
    const state = createState({
      '1': createSession({
        sessionStatus: TransactionBatchStatusesEnum.sent,
        transactionStatuses: [TransactionServerStatusesEnum.success]
      })
    });

    expect(Object.keys(successfulTransactionsSessionsSelector(state))).toEqual([
      '1'
    ]);
  });

  it.each([
    TransactionBatchStatusesEnum.fail,
    TransactionBatchStatusesEnum.invalid,
    TransactionBatchStatusesEnum.timedOut,
    TransactionBatchStatusesEnum.cancelled,
    TransactionBatchStatusesEnum.sent
  ])('returns a failed session with session status `%s`', (sessionStatus) => {
    const state = createState({
      '1': createSession({
        sessionStatus,
        transactionStatuses: [TransactionServerStatusesEnum.fail]
      })
    });

    expect(Object.keys(failedTransactionsSessionsSelector(state))).toEqual([
      '1'
    ]);
    expect(successfulTransactionsSessionsSelector(state)).toEqual({});
  });

  it('returns a pending session only from the pending selector', () => {
    const state = createState({
      '1': createSession({
        sessionStatus: TransactionBatchStatusesEnum.sent,
        transactionStatuses: [TransactionServerStatusesEnum.pending]
      })
    });

    expect(Object.keys(pendingTransactionsSessionsSelector(state))).toEqual([
      '1'
    ]);
    expect(successfulTransactionsSessionsSelector(state)).toEqual({});
    expect(failedTransactionsSessionsSelector(state)).toEqual({});
  });

  it('does not return a signed (not yet sent) session', () => {
    const state = createState({
      '1': createSession({
        sessionStatus: TransactionBatchStatusesEnum.signed,
        transactionStatuses: [TransactionServerStatusesEnum.success]
      })
    });

    expect(successfulTransactionsSessionsSelector(state)).toEqual({});
  });

  it('lists a mixed batch in the failed selector only, since its session status is `fail`', () => {
    const state = createState({
      '1': createSession({
        sessionStatus: TransactionBatchStatusesEnum.fail,
        transactionStatuses: [
          TransactionServerStatusesEnum.success,
          TransactionServerStatusesEnum.fail
        ]
      })
    });

    expect(Object.keys(failedTransactionsSessionsSelector(state))).toEqual([
      '1'
    ]);
    expect(successfulTransactionsSessionsSelector(state)).toEqual({});
  });
});
