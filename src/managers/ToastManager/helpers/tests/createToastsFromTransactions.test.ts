import { testAddress, testNetwork } from '__mocks__';
import { server, rest } from '__mocks__';
import { store } from '__mocks__/data/store';
import { TRANSACTIONS_ENDPOINT } from 'apiCalls/endpoints';
import { TransactionServerStatusesEnum } from 'types/enums.types';
// import { TransactionsDisplayInfoType } from 'types/transactions.types';
import { createToastsFromTransactions } from '../createToastsFromTransactions';
import { mockTransaction, mockTransactionSession } from './mocks/transactions';

describe('createToastsFromTransactions', () => {
  const fixedNowDate = new Date('2025-08-01T00:00:00'); // fixed date at August 1, 2025
  const fixedNow = fixedNowDate.getTime();

  beforeEach(() => {
    // mock Date.now()
    jest.spyOn(Date, 'now').mockReturnValue(fixedNow);
  });

  afterEach(() => {
    jest.spyOn(Date, 'now').mockRestore();
  });

  const SESSION_IDS = {
    PENDING: fixedNow.toString(), // August 1, 2025 midnight
    SUCCESS: (fixedNow + 1 * 60 * 1000).toString(), // 1 minute later
    EXISTING: (fixedNow + 2 * 60 * 1000).toString(), // 2 minutes later
    MISSING: (fixedNow + 3 * 60 * 1000).toString() // 3 minutes later
  } as const;

  // const mockAccount: AccountSliceType = {
  //   address: testAddress,
  //   accounts: {},
  //   publicKey: '',
  //   ledgerAccount: null,
  //   walletConnectAccount: null,
  //   websocketEvent: null,
  //   websocketBatchEvent: null
  // };

  // const defaultData = {
  //   transactionsSessions: {},
  //   account: mockAccount,
  //   egldLabel: 'EGLD',
  //   explorerAddress: 'https://explorer.multiversx.com'
  // };

  // const mockDisplayInfo: TransactionsDisplayInfoType = {
  //   processingMessage: 'Processing',
  //   successMessage: 'Success',
  //   errorMessage: 'Error',
  //   receivedMessage: 'Received',
  //   timedOutMessage: 'Timed Out',
  //   invalidMessage: 'Invalid'
  // };

  const createMockToast = (toastId: string) => {
    return {
      toastId,
      startTime: fixedNow,
      endTime: fixedNow + 1000
    };
  };

  const createMockSession = (
    status: TransactionServerStatusesEnum,
    transactionHash: string
  ) => ({
    ...mockTransactionSession,
    status,
    transactions: [{ ...mockTransaction, hash: transactionHash, status }]
  });

  const mockTransactionsEndpoint = (
    hashes: string[],
    mockData: Array<typeof mockTransaction>
  ) => {
    const endpoint = `${testNetwork.apiAddress}/${TRANSACTIONS_ENDPOINT}`;
    return rest.get(endpoint, (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockData));
    });
  };

  // it('should return empty arrays for processing and completed transactions when no transactions exist', async () => {
  //   const result = await createToastsFromTransactions({ store });
  //   expect(result).toEqual({
  //     pendingTransactionToasts: [],
  //     completedTransactionToasts: []
  //   });
  // });

  it('should correctly classify transactions as processing or completed based on their status', async () => {
    server.use(
      mockTransactionsEndpoint(
        [mockTransaction.hash],
        [{ ...mockTransaction, status: 'pending' }]
      )
    );

    const result = await createToastsFromTransactions({
      store: {
        ...store,
        transactions: {
          [SESSION_IDS.PENDING]: createMockSession(
            TransactionServerStatusesEnum.pending,
            mockTransaction.hash
          ),
          [SESSION_IDS.SUCCESS]: createMockSession(
            TransactionServerStatusesEnum.success,
            'bf1ee4d78ccc57cb81c945decd70678cebc5b8b919f8e3c8411f2b19ebdd6ay'
          )
        },
        toasts: {
          transactionToasts: [
            createMockToast(SESSION_IDS.PENDING),
            createMockToast(SESSION_IDS.SUCCESS)
          ],
          customToasts: []
        }
      }
    });

    const commonData = {
      asset: { icon: 'faHourglass' },
      interactor: testAddress,
      directionLabel: 'To',
      action: { name: 'Self Sent ', description: undefined },
      amount: '0 ',
      status: 'pending',
      timestamp: undefined,
      interactorAsset: undefined
    };

    expect(result).toEqual({
      pendingTransactionToasts: [
        {
          toastDataState: {
            id: SESSION_IDS.PENDING,
            icon: 'hourglass',
            hasCloseButton: false,
            title: 'Processing Self transaction',
            iconClassName: 'warning'
          },
          processedTransactionsStatus: '0 / 1 transactions processed',
          transactionProgressState: {
            endTime: 1753995601000,
            startTime: 1753995600000
          },
          toastId: SESSION_IDS.PENDING,
          transactions: [
            {
              ...commonData,
              hash: 'bf1ee4d78ccc57cb81c945decd70678cebc5b8b919f8e3c8411f2b19ebdd6a6x',
              link: '/transactions/bf1ee4d78ccc57cb81c945decd70678cebc5b8b919f8e3c8411f2b19ebdd6a6x'
            }
          ]
        }
      ],
      completedTransactionToasts: [
        {
          toastDataState: {
            id: SESSION_IDS.SUCCESS,
            icon: 'check',
            hasCloseButton: true,
            title: 'Self transaction successful',
            iconClassName: 'success'
          },
          processedTransactionsStatus: '0 / 2 transactions processed',
          transactionProgressState: {
            endTime: 1753995601000,
            startTime: 1753995600000
          },
          toastId: SESSION_IDS.SUCCESS,
          transactions: [
            {
              ...commonData, // status is still pending because the toasts were not shown yet
              hash: 'bf1ee4d78ccc57cb81c945decd70678cebc5b8b919f8e3c8411f2b19ebdd6a6x',
              link: '/transactions/bf1ee4d78ccc57cb81c945decd70678cebc5b8b919f8e3c8411f2b19ebdd6a6x'
            },
            {
              ...commonData, // see next test for the status change
              hash: 'bf1ee4d78ccc57cb81c945decd70678cebc5b8b919f8e3c8411f2b19ebdd6ay',
              timestamp: fixedNow,
              link: '/transactions/bf1ee4d78ccc57cb81c945decd70678cebc5b8b919f8e3c8411f2b19ebdd6ay'
            }
          ]
        }
      ]
    });
  });

  // it('should preserve existing completed transactions and not create duplicates when same transaction is processed again', async () => {
  //   const existingCompleted: ITransactionToast[] = [
  //     {
  //       toastId: SESSION_IDS.EXISTING,
  //       processedTransactionsStatus: TransactionServerStatusesEnum.success,
  //       transactions: [],
  //       toastDataState: {
  //         id: SESSION_IDS.EXISTING,
  //         icon: 'check',
  //         hasCloseButton: true,
  //         title: 'Transaction successful',
  //         iconClassName: TransactionServerStatusesEnum.success
  //       }
  //     }
  //   ];

  //   const toastList = {
  //     transactionToasts: [createMockToast(SESSION_IDS.EXISTING)],
  //     customToasts: []
  //   };

  //   const transactionsSessions = {
  //     [SESSION_IDS.EXISTING]: createMockSession(
  //       TransactionServerStatusesEnum.success,
  //       'tx-existing'
  //     )
  //   };

  //   const result = await createToastsFromTransactions({
  //     existingCompletedTransactions: existingCompleted
  //   });

  //   expect(result.completedTransactionToasts).toHaveLength(1);
  //   expect(createTransactionToast).not.toHaveBeenCalled();
  // });

  // it('should safely handle transactions with missing session data without creating toasts', async () => {
  // const toastList = {
  //   transactionToasts: [createMockToast(TOAST_IDS.MISSING)],
  //   customToasts: []
  // };

  //   const result = await createToastsFromTransactions({});

  //   expect(result.pendingTransactionToasts).toHaveLength(0);
  //   expect(result.completedTransactionToasts).toHaveLength(0);
  //   expect(createTransactionToast).not.toHaveBeenCalled();
  // });
});
