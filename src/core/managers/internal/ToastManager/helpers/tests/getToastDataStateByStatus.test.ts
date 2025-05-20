import {
  getIsTransactionFailed,
  getIsTransactionPending,
  getIsTransactionSuccessful,
  getIsTransactionTimedOut
} from 'store/actions/transactions/transactionStateByStatus';
import { TransactionServerStatusesEnum } from 'types/enums.types';
import { getToastDataStateByStatus } from '../getToastDataStateByStatus';

jest.mock('store/actions/transactions/transactionStateByStatus', () => ({
  getIsTransactionPending: jest.fn(),
  getIsTransactionTimedOut: jest.fn(),
  getIsTransactionFailed: jest.fn(),
  getIsTransactionSuccessful: jest.fn()
}));

describe('getToastDataStateByStatus', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (getIsTransactionPending as jest.Mock).mockReturnValue(false);
    (getIsTransactionTimedOut as jest.Mock).mockReturnValue(false);
    (getIsTransactionFailed as jest.Mock).mockReturnValue(false);
    (getIsTransactionSuccessful as jest.Mock).mockReturnValue(false);
  });

  it('should return pending state when transaction is pending', () => {
    (getIsTransactionPending as jest.Mock).mockReturnValue(true);

    const params = {
      address: 'user-address',
      sender: 'user-address',
      toastId: 'toast-123',
      status: TransactionServerStatusesEnum.pending,
      transactionsDisplayInfo: {
        successMessage: '',
        errorMessage: '',
        processingMessage: '',
        pendingMessage: ''
      }
    };

    const result = getToastDataStateByStatus(params);
    expect(result).toHaveProperty('icon');
    expect(result).toHaveProperty('hasCloseButton', false);
  });

  it('should return successful state when transaction is successful', () => {
    (getIsTransactionSuccessful as jest.Mock).mockReturnValue(true);

    const params = {
      address: 'user-address',
      sender: 'user-address',
      toastId: 'toast-123',
      status: TransactionServerStatusesEnum.success,
      transactionsDisplayInfo: {
        successMessage: 'Transaction completed successfully!',
        errorMessage: '',
        processingMessage: '',
        pendingMessage: ''
      }
    };

    const result = getToastDataStateByStatus(params);
    expect(result).toHaveProperty('icon');
    expect(result).toHaveProperty('hasCloseButton', true);
    expect(result).toHaveProperty('iconClassName');
  });

  it('should return failed state when transaction fails', () => {
    (getIsTransactionFailed as jest.Mock).mockReturnValue(true);

    const params = {
      address: 'user-address',
      sender: 'user-address',
      toastId: 'toast-123',
      status: TransactionServerStatusesEnum.fail,
      transactionsDisplayInfo: {
        successMessage: '',
        errorMessage: 'Transaction failed!',
        processingMessage: '',
        pendingMessage: ''
      }
    };

    const result = getToastDataStateByStatus(params);
    expect(result).toHaveProperty('icon');
    expect(result).toHaveProperty('hasCloseButton', true);
    expect(result).toHaveProperty('iconClassName');
  });

  it('should return timed out state when transaction times out', () => {
    (getIsTransactionTimedOut as jest.Mock).mockReturnValue(true);

    const params = {
      address: 'user-address',
      sender: 'user-address',
      toastId: 'toast-123',
      status: TransactionServerStatusesEnum.fail,
      transactionsDisplayInfo: {
        successMessage: '',
        errorMessage: '',
        processingMessage: '',
        pendingMessage: ''
      }
    };

    const result = getToastDataStateByStatus(params);
    expect(result).toHaveProperty('icon');
    expect(result).toHaveProperty('hasCloseButton', true);
  });

  it('should handle case when sender is different from user address', () => {
    (getIsTransactionPending as jest.Mock).mockReturnValue(true);

    const params = {
      address: 'user-address',
      sender: 'different-address',
      toastId: 'toast-123',
      status: TransactionServerStatusesEnum.pending,
      transactionsDisplayInfo: {
        successMessage: '',
        errorMessage: '',
        processingMessage: '',
        pendingMessage: ''
      }
    };

    const result = getToastDataStateByStatus(params);
    expect(result).toBeTruthy();
  });
});
