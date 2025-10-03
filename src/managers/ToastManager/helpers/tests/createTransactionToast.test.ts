import { testAddress } from '__mocks__/accountConfig';
import { ITransactionListItem } from 'lib/sdkDappUi';
import { getIsTransactionPending } from 'store/actions/transactions/transactionStateByStatus';
import { TransactionServerStatusesEnum } from 'types/enums.types';
import { createTransactionToast } from '../createTransactionToast';
import { getToastDataStateByStatus } from '../getToastDataStateByStatus';
import { getToastTransactionsStatus } from '../getToastTransactionsStatus';

jest.mock('store/actions/transactions/transactionStateByStatus', () => ({
  getIsTransactionPending: jest.fn()
}));

jest.mock('../getToastDataStateByStatus', () => ({
  getToastDataStateByStatus: jest.fn()
}));

jest.mock('../getToastTransactionsStatus', () => ({
  getToastTransactionsStatus: jest.fn()
}));

jest.mock('utils/transactions/explorerUrlBuilder', () => ({
  explorerUrlBuilder: {
    transactionDetails: jest.fn((hash) => `tx/${hash}`)
  }
}));

jest.mock('utils/transactions/getExplorerLink', () => ({
  getExplorerLink: jest.fn(
    ({ explorerAddress, to }) => `${explorerAddress}/${to}`
  )
}));

describe('createTransactionToast', () => {
  const TOAST_IDS = {
    PENDING: 'pending-toast',
    SUCCESS: 'success-toast'
  } as const;

  const EXPLORER_ADDRESS = 'https://explorer.example.com';

  const baseTransaction: ITransactionListItem = {
    status: TransactionServerStatusesEnum.success,
    asset: null,
    action: { name: 'Transfer' },
    link: `${EXPLORER_ADDRESS}/tx/tx-hash`,
    hash: 'tx-hash',
    interactor: testAddress,
    directionLabel: 'To',
    amount: '1 EGLD',
    timestamp: Date.now()
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create a pending transaction toast with progress state and explorer link', () => {
    const now = Date.now();
    (getIsTransactionPending as jest.Mock).mockReturnValue(true);
    (getToastDataStateByStatus as jest.Mock).mockReturnValue({
      state: 'pending'
    });
    (getToastTransactionsStatus as jest.Mock).mockReturnValue('Processing');

    const result = createTransactionToast({
      toastId: TOAST_IDS.PENDING,
      address: testAddress,
      status: TransactionServerStatusesEnum.pending,
      transactions: [
        { ...baseTransaction, status: TransactionServerStatusesEnum.pending }
      ],
      transactionsDisplayInfo: { processingMessage: 'Pending Transaction' },
      startTime: now,
      endTime: now + 1000
    });

    expect(result).toEqual({
      toastId: TOAST_IDS.PENDING,
      toastDataState: { state: 'pending' },
      processedTransactionsStatus: 'Processing',
      transactionProgressState: {
        startTime: now,
        endTime: now + 1000
      },
      transactions: [
        {
          ...baseTransaction,
          status: TransactionServerStatusesEnum.pending
        }
      ]
    });
  });

  it('should create a completed transaction toast without progress state', () => {
    (getIsTransactionPending as jest.Mock).mockReturnValue(false);
    (getToastDataStateByStatus as jest.Mock).mockReturnValue({
      state: 'success'
    });
    (getToastTransactionsStatus as jest.Mock).mockReturnValue('Completed');

    const result = createTransactionToast({
      toastId: TOAST_IDS.SUCCESS,
      address: testAddress,
      status: TransactionServerStatusesEnum.success,
      transactions: [
        { ...baseTransaction, status: TransactionServerStatusesEnum.success }
      ],
      transactionsDisplayInfo: { successMessage: 'Successful Transaction' },
      startTime: 1000,
      endTime: 2000
    });

    expect(result).toEqual({
      toastId: TOAST_IDS.SUCCESS,
      toastDataState: { state: 'success' },
      processedTransactionsStatus: 'Completed',
      transactionProgressState: null,
      transactions: [
        {
          ...baseTransaction,
          status: TransactionServerStatusesEnum.success
        }
      ]
    });
  });

  it('should handle multiple transactions by creating explorer links for each', () => {
    (getIsTransactionPending as jest.Mock).mockReturnValue(false);
    (getToastDataStateByStatus as jest.Mock).mockReturnValue({
      state: 'success'
    });
    (getToastTransactionsStatus as jest.Mock).mockReturnValue('All Completed');

    const transactions: ITransactionListItem[] = [
      {
        ...baseTransaction,
        hash: 'tx-1',
        link: `${EXPLORER_ADDRESS}/tx/tx-1`,
        status: TransactionServerStatusesEnum.success
      },
      {
        ...baseTransaction,
        hash: 'tx-2',
        link: `${EXPLORER_ADDRESS}/tx/tx-2`,
        status: TransactionServerStatusesEnum.success
      }
    ];

    const result = createTransactionToast({
      toastId: TOAST_IDS.SUCCESS,
      address: testAddress,
      status: TransactionServerStatusesEnum.success,
      transactions,
      transactionsDisplayInfo: {
        processingMessage: 'Multiple Transactions',
        successMessage: 'Multiple Transactions Description'
      },
      startTime: 1000,
      endTime: 2000
    });

    expect(result.transactions).toHaveLength(2);
    expect(result.transactions[0].link).toBe(`${EXPLORER_ADDRESS}/tx/tx-1`);
    expect(result.transactions[1].link).toBe(`${EXPLORER_ADDRESS}/tx/tx-2`);
  });
});
