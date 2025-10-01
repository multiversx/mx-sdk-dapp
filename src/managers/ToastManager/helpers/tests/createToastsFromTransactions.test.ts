import { testAddress } from '__mocks__';
import {
  getIsTransactionPending,
  getIsTransactionSuccessful
} from 'store/actions/transactions/transactionStateByStatus';
import { AccountSliceType } from 'store/slices/account/account.types';
import { TransactionServerStatusesEnum } from 'types/enums.types';
import {
  SignedTransactionType,
  TransactionsDisplayInfoType
} from 'types/transactions.types';
import { mapServerTransactionsToListItems } from 'utils/transactions/getTransactionsHistory/helpers';
import { ITransactionToast } from '../../types/toast.types';
import { createToastsFromTransactions } from '../createToastsFromTransactions';
import { createTransactionToast } from '../createTransactionToast';
import { baseTransactionMock } from './baseTransactionMock';

jest.mock('utils/transactions/getTransactionsHistory/helpers', () => ({
  mapServerTransactionsToListItems: jest.fn()
}));

jest.mock('store/actions/transactions/transactionStateByStatus', () => ({
  getIsTransactionPending: jest.fn(),
  getIsTransactionTimedOut: jest.fn(),
  getIsTransactionFailed: jest.fn(),
  getIsTransactionSuccessful: jest.fn()
}));

jest.mock('../createTransactionToast', () => ({
  createTransactionToast: jest.fn().mockImplementation(({ toastId }) => ({
    toastId
  }))
}));

describe('createToastsFromTransactions', () => {
  const TOAST_IDS = {
    PENDING: 'pending-toast',
    SUCCESS: 'success-toast',
    EXISTING: 'existing-toast',
    MISSING: 'missing-toast'
  } as const;

  const mockTx = {
    nonce: 0,
    value: '0',
    receiver: testAddress,
    sender: testAddress,
    gasPrice: 1000000000,
    gasLimit: 50000,
    data: '',
    chainID: '1',
    version: 1,
    options: 0,
    signature: '',
    hash: ''
  };

  const mockAccount: AccountSliceType = {
    address: testAddress,
    accounts: {},
    publicKey: '',
    ledgerAccount: null,
    walletConnectAccount: null,
    websocketEvent: null,
    websocketBatchEvent: null
  };

  const mockDisplayInfo: TransactionsDisplayInfoType = {
    processingMessage: 'Processing',
    successMessage: 'Success',
    errorMessage: 'Error',
    receivedMessage: 'Received',
    timedOutMessage: 'Timed Out',
    invalidMessage: 'Invalid'
  };

  const createMockToast = (toastId: string) => {
    const now = Date.now();
    return {
      toastId,
      startTime: now,
      endTime: now
    };
  };

  const createMockSession = (
    status: TransactionServerStatusesEnum,
    transactionHash: string
  ) => ({
    status,
    transactions: [{ ...mockTx, hash: transactionHash }],
    transactionsDisplayInfo: mockDisplayInfo
  });

  beforeEach(() => {
    jest.clearAllMocks();
    (mapServerTransactionsToListItems as jest.Mock).mockImplementation(
      ({ transactions }) =>
        Promise.resolve(
          transactions.map((transaction: SignedTransactionType) => ({
            ...baseTransactionMock,
            hash: transaction.hash
          }))
        )
    );
  });

  it('should return empty arrays for processing and completed transactions when no transactions exist', async () => {
    const result = await createToastsFromTransactions({
      toastList: { transactionToasts: [], customToasts: [] },
      transactionsSessions: {},
      account: mockAccount,
      explorerAddress: 'https://explorer.example.com',
      egldLabel: 'EGLD'
    });

    expect(result).toEqual({
      pendingTransactionToasts: [],
      completedTransactionToasts: []
    });
  });

  it('should correctly classify transactions as processing or completed based on their status', async () => {
    (getIsTransactionPending as jest.Mock).mockImplementation(
      (status) => status === TransactionServerStatusesEnum.pending
    );

    (getIsTransactionSuccessful as jest.Mock).mockImplementation(
      (status) => status === TransactionServerStatusesEnum.success
    );

    const toastList = {
      transactionToasts: [
        createMockToast(TOAST_IDS.PENDING),
        createMockToast(TOAST_IDS.SUCCESS)
      ],
      customToasts: []
    };

    const transactionsSessions = {
      [TOAST_IDS.PENDING]: createMockSession(
        TransactionServerStatusesEnum.pending,
        'tx-1'
      ),
      [TOAST_IDS.SUCCESS]: createMockSession(
        TransactionServerStatusesEnum.success,
        'tx-2'
      )
    };

    const result = await createToastsFromTransactions({
      toastList,
      transactionsSessions,
      account: mockAccount,
      explorerAddress: 'https://explorer.example.com',
      egldLabel: 'EGLD'
    });

    expect(result.pendingTransactionToasts).toHaveLength(1);
    expect(result.pendingTransactionToasts[0].toastId).toBe(TOAST_IDS.PENDING);
    expect(result.completedTransactionToasts).toHaveLength(1);
    expect(result.completedTransactionToasts[0].toastId).toBe(
      TOAST_IDS.SUCCESS
    );
  });

  it('should preserve existing completed transactions and not create duplicates when same transaction is processed again', async () => {
    (getIsTransactionSuccessful as jest.Mock).mockReturnValue(true);

    const existingCompleted: ITransactionToast[] = [
      {
        toastId: TOAST_IDS.EXISTING,
        processedTransactionsStatus: TransactionServerStatusesEnum.success,
        transactions: [],
        toastDataState: {
          id: TOAST_IDS.EXISTING,
          icon: 'check',
          hasCloseButton: true,
          title: 'Transaction successful',
          iconClassName: TransactionServerStatusesEnum.success
        }
      }
    ];

    const toastList = {
      transactionToasts: [createMockToast(TOAST_IDS.EXISTING)],
      customToasts: []
    };

    const transactionsSessions = {
      [TOAST_IDS.EXISTING]: createMockSession(
        TransactionServerStatusesEnum.success,
        'tx-existing'
      )
    };

    const result = await createToastsFromTransactions({
      toastList,
      transactionsSessions,
      account: mockAccount,
      existingCompletedTransactions: existingCompleted,
      explorerAddress: 'https://explorer.example.com',
      egldLabel: 'EGLD'
    });

    expect(result.completedTransactionToasts).toHaveLength(1);
    expect(createTransactionToast).not.toHaveBeenCalled();
  });

  it('should safely handle transactions with missing session data without creating toasts', async () => {
    const toastList = {
      transactionToasts: [createMockToast(TOAST_IDS.MISSING)],
      customToasts: []
    };

    const result = await createToastsFromTransactions({
      toastList,
      transactionsSessions: {},
      account: mockAccount,
      explorerAddress: 'https://explorer.example.com',
      egldLabel: 'EGLD'
    });

    expect(result.pendingTransactionToasts).toHaveLength(0);
    expect(result.completedTransactionToasts).toHaveLength(0);
    expect(createTransactionToast).not.toHaveBeenCalled();
  });
});
