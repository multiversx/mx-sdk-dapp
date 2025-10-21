import {
  testAddress,
  testNetwork,
  mockPendingTransaction,
  server,
  rest,
  mockStore
} from '__mocks__';
import { TRANSACTIONS_ENDPOINT } from 'apiCalls/endpoints';
import { StoreType } from 'store/store.types';
import {
  IconNamesEnum,
  TransactionServerStatusesEnum
} from 'types/enums.types';
import { createToastsFromTransactions } from '../createToastsFromTransactions';
import { mockTransactionSession } from './mocks/transactions';

const successTransactionHash =
  'txSuccess§§§7cb81c945decd70678cebc5b8b919f8e3c8411f2b19ebdd6ay';

const existingTransactionHash =
  'txExisting§§§7cb81c945decd70678cebc5b8b919f8e3c8411f2b19ebdd6ay';

const createMockToast = (toastId: string, fixedNow: number) => {
  return {
    toastId,
    startTime: fixedNow,
    endTime: fixedNow + 1000
  };
};

const getSessionIds = (fixedNow: number) =>
  ({
    PENDING: fixedNow.toString(), // August 1, 2025 midnight
    SUCCESS: (fixedNow + 1 * 60 * 1000).toString(), // 1 minute later
    EXISTING: (fixedNow + 2 * 60 * 1000).toString(), // 2 minutes later
    MISSING: (fixedNow + 3 * 60 * 1000).toString() // 3 minutes later
  }) as const;

const createMockSession = (
  status: TransactionServerStatusesEnum,
  transactionHash: string
) => ({
  ...mockTransactionSession,
  status,
  transactions: [{ ...mockPendingTransaction, hash: transactionHash, status }]
});

describe('createToastsFromTransactions', () => {
  const fixedNowDate = new Date('2025-08-01T00:00:00'); // fixed date at August 1, 2025
  const fixedNow = fixedNowDate.getTime();

  const SESSION_IDS = getSessionIds(fixedNow);

  beforeEach(() => {
    // mock Date.now()
    jest.spyOn(Date, 'now').mockReturnValue(fixedNow);
  });

  afterEach(() => {
    jest.spyOn(Date, 'now').mockRestore();
  });

  const mockTransactionsEndpoint = (
    hashes: string[],
    mockData: Array<typeof mockPendingTransaction>
  ) => {
    const endpoint = `${testNetwork.apiAddress}/${TRANSACTIONS_ENDPOINT}`;
    return rest.get(endpoint, (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockData));
    });
  };

  it('should return empty arrays for processing and completed transactions when no transactions exist', async () => {
    const result = await createToastsFromTransactions({ store: mockStore });
    expect(result).toEqual({
      pendingTransactionToasts: [],
      completedTransactionToasts: []
    });
  });

  it('should correctly classify transactions as processing or completed based on their status', async () => {
    server.use(
      mockTransactionsEndpoint(
        [mockPendingTransaction.hash],
        [{ ...mockPendingTransaction, status: 'pending' }]
      )
    );

    const store: StoreType = {
      ...mockStore,
      transactions: {
        [SESSION_IDS.PENDING]: createMockSession(
          TransactionServerStatusesEnum.pending,
          mockPendingTransaction.hash
        ),
        [SESSION_IDS.SUCCESS]: createMockSession(
          TransactionServerStatusesEnum.success,
          successTransactionHash
        )
      },
      toasts: {
        transactionToasts: [
          createMockToast(SESSION_IDS.PENDING, fixedNow),
          createMockToast(SESSION_IDS.SUCCESS, fixedNow)
        ],
        customToasts: []
      }
    };

    const result = await createToastsFromTransactions({ store });

    const commonData = {
      asset: { icon: IconNamesEnum.hourglass },
      interactor: testAddress,
      directionLabel: 'From',
      action: { name: 'Received xEGLD', description: undefined },
      amount: '0 xEGLD',
      hash: mockPendingTransaction.hash,
      status: 'pending',
      timestamp: undefined,
      interactorAsset: undefined
    };

    expect(result).toEqual({
      pendingTransactionToasts: [
        {
          toastDataState: {
            id: SESSION_IDS.PENDING,
            icon: IconNamesEnum.hourglass,
            hasCloseButton: false,
            title: 'Processing Self transaction',
            iconClassName: 'warning'
          },
          processedTransactionsStatus: '0 / 1 transactions processed',
          transactionProgressState: {
            endTime: fixedNow + 1000,
            startTime: fixedNow
          },
          toastId: SESSION_IDS.PENDING,
          transactions: [
            {
              ...commonData,
              link: `${testNetwork.explorerAddress}/transactions/${mockPendingTransaction.hash}`
            }
          ]
        }
      ],
      completedTransactionToasts: [
        {
          toastDataState: {
            id: SESSION_IDS.SUCCESS,
            icon: IconNamesEnum.check,
            hasCloseButton: true,
            title: 'Self transaction successful',
            iconClassName: 'success'
          },
          processedTransactionsStatus: 'Transaction processed',
          transactionProgressState: null,
          toastId: SESSION_IDS.SUCCESS,
          transactions: [
            {
              action: { name: 'Received xEGLD', description: undefined },
              amount: '0 xEGLD',
              asset: null,
              directionLabel: 'From',
              hash: successTransactionHash,
              interactor: testAddress,
              interactorAsset: undefined,
              link: `${testNetwork.explorerAddress}/transactions/${successTransactionHash}`,
              status: TransactionServerStatusesEnum.success,
              timestamp: undefined
            }
          ]
        }
      ]
    });
  });
});

describe('createToastsFromTransactions existing completed transactions', () => {
  beforeEach(() => {
    jest.mock('../createTransactionToast', () => ({
      createTransactionToast: jest.fn().mockImplementation(({ toastId }) => ({
        toastId
      }))
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should preserve existing completed transactions and not create duplicates when same transaction is processed again', async () => {
    const EXISTING_SESSION_ID = 'existing-session-id';
    const fixedNow = new Date('2025-08-01T00:00:00').getTime();

    const toastList = {
      transactionToasts: [createMockToast(EXISTING_SESSION_ID, fixedNow)],
      customToasts: []
    };

    const transactionsSessions = {
      [EXISTING_SESSION_ID]: createMockSession(
        TransactionServerStatusesEnum.success,
        existingTransactionHash
      )
    };

    const store: StoreType = {
      ...mockStore,
      toasts: toastList,
      transactions: transactionsSessions
    };

    const { createTransactionToast } = require('../createTransactionToast');

    const result = await createToastsFromTransactions({
      store
    });

    expect(result.completedTransactionToasts).toHaveLength(1);
    expect(createTransactionToast).not.toHaveBeenCalled();
  });

  it('should safely handle transactions with missing session data without creating toasts', async () => {
    const { createTransactionToast } = require('../createTransactionToast');
    const fixedNow = new Date('2025-08-01T00:00:00').getTime();
    const SESSION_IDS = getSessionIds(fixedNow);

    const toastList = {
      transactionToasts: [createMockToast(SESSION_IDS.MISSING, fixedNow)],
      customToasts: []
    };

    const store: StoreType = {
      ...mockStore,
      toasts: toastList,
      transactions: {}
    };

    const result = await createToastsFromTransactions({ store });

    expect(result.pendingTransactionToasts).toHaveLength(0);
    expect(result.completedTransactionToasts).toHaveLength(0);
    expect(createTransactionToast).not.toHaveBeenCalled();
  });
});
