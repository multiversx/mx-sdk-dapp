import { produce } from 'immer';
import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types/enums.types';
import type { SignedTransactionType } from 'types/transactions.types';
import {
  clearCompletedTransactions,
  createTransactionsSession,
  updateSessionStatus,
  updateTransactionStatus
} from '../transactionsActions';

const mockSetState = jest.fn();

jest.mock('store/store', () => ({
  getStore: () => ({
    setState: mockSetState
  })
}));

const mockTransaction = (overrides: Partial<SignedTransactionType> = {}) =>
  ({
    hash: overrides.hash ?? 'tx-hash',
    nonce: overrides.nonce ?? 1,
    sender: overrides.sender ?? 'erd1sender',
    receiver: overrides.receiver ?? 'erd1receiver',
    value: overrides.value ?? '0',
    signature: overrides.signature ?? 'signature',
    status: overrides.status ?? TransactionServerStatusesEnum.success
  }) as SignedTransactionType;

const createRootState = () =>
  ({
    transactions: {},
    toasts: {
      transactionToasts: []
    }
  }) as any;

describe('transactionsActions', () => {
  let rootState: ReturnType<typeof createRootState>;

  beforeEach(() => {
    rootState = createRootState();
    mockSetState.mockImplementation(
      (updater: (state: typeof rootState) => void) => {
        const nextState = produce(rootState, (draft: typeof rootState) => {
          updater(draft);
        });
        rootState = nextState;
      }
    );
    jest.spyOn(Date, 'now').mockReturnValue(1111);
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

  it('creates a transaction session with generated id', () => {
    const sessionId = createTransactionsSession({
      transactions: [mockTransaction()],
      status: TransactionBatchStatusesEnum.sent
    });

    expect(sessionId).toBe('1111');
    expect(rootState.transactions[sessionId]).toMatchObject({
      transactions: [{ hash: 'tx-hash' }],
      status: TransactionBatchStatusesEnum.sent,
      interpretedTransactions: {},
      sessionInformation: undefined
    });
  });

  it('updates session status and specific transaction data', () => {
    rootState.transactions['session-1'] = {
      transactions: [mockTransaction(), mockTransaction({ hash: 'tx-2' })],
      status: TransactionBatchStatusesEnum.sent,
      interpretedTransactions: {},
      transactionsDisplayInfo: { errorMessage: 'old-error' }
    };

    updateSessionStatus({
      sessionId: 'session-1',
      status: TransactionBatchStatusesEnum.cancelled,
      errorMessage: 'new-error'
    });

    expect(rootState.transactions['session-1']).toMatchObject({
      status: TransactionBatchStatusesEnum.cancelled,
      errorMessage: 'new-error',
      transactionsDisplayInfo: { errorMessage: 'new-error' }
    });

    updateTransactionStatus({
      sessionId: 'session-1',
      transaction: mockTransaction({ hash: 'tx-2', nonce: 3 })
    });

    expect(
      rootState.transactions['session-1'].transactions.find(
        (tx: SignedTransactionType) => tx.hash === 'tx-2'
      )?.nonce
    ).toBe(3);
  });

  it('clears completed transactions and related toasts', () => {
    rootState.transactions = {
      pendingSession: {
        transactions: [mockTransaction()],
        status: TransactionServerStatusesEnum.pending,
        interpretedTransactions: {}
      },
      completedSession: {
        transactions: [mockTransaction({ hash: 'done' })],
        status: TransactionServerStatusesEnum.success,
        interpretedTransactions: {}
      }
    };
    rootState.toasts.transactionToasts = [
      { toastId: 'pendingSession' },
      { toastId: 'completedSession' }
    ];

    clearCompletedTransactions();

    expect(rootState.transactions.pendingSession).toBeDefined();
    expect(rootState.transactions.completedSession).toBeUndefined();
    expect(rootState.toasts.transactionToasts).toEqual([
      { toastId: 'pendingSession' }
    ]);
  });
});
