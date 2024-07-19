import { addressSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';
import { getWindowLocation } from 'utils/window/getWindowLocation';
import { sendBatchTransactions } from './sendBatchTransactions';
import { signTransactions } from './signTransactions';
import { transformTransactionsToSign } from './utils/transformTransactionsToSign';

jest.mock('reduxStore/selectors', () => ({
  addressSelector: jest.fn()
}));

jest.mock('reduxStore/store', () => ({
  store: {
    getState: jest.fn()
  }
}));

jest.mock('utils/window/getWindowLocation', () => ({
  getWindowLocation: jest.fn()
}));

jest.mock('./signTransactions', () => ({
  signTransactions: jest.fn()
}));

jest.mock('./utils/transformTransactionsToSign', () => ({
  transformTransactionsToSign: jest.fn()
}));

describe('sendBatchTransactions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call all the dependencies and return the expected result', async () => {
    const address =
      'erd1axhx4kenjlae6sknq7zjg2g4fvzavv979r2fg425p62wkl84avtqsf7vvv';
    const sessionId = '12345';
    const transactions = [
      [
        {
          receiver: address,
          sender: address,
          value: '0',
          data: '1'
        },
        {
          receiver: address,
          sender: address,
          value: '0',
          data: '2'
        }
      ],
      [
        {
          receiver: address,
          sender: address,
          value: '0',
          data: '3'
        }
      ],
      [
        {
          receiver: address,
          sender: address,
          value: '0',
          data: '4'
        },
        {
          receiver: address,
          sender: address,
          value: '0',
          data: '5'
        },
        {
          receiver: address,
          sender: address,
          value: '0',
          data: '6'
        }
      ]
    ];
    const transactionsDisplayInfo = {};
    const callbackRoute = '/callback';
    const minGasLimit = 21000;

    // Mock the dependencies
    (addressSelector as unknown as jest.Mock).mockReturnValue(address);
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    (store.getState as unknown as jest.Mock).mockReturnValue(() => {});
    (getWindowLocation as unknown as jest.Mock).mockReturnValue({
      pathname: callbackRoute
    });
    (signTransactions as unknown as jest.Mock).mockResolvedValue({ sessionId });
    (transformTransactionsToSign as unknown as jest.Mock).mockResolvedValue([]);

    const result = await sendBatchTransactions({
      transactions,
      transactionsDisplayInfo,
      minGasLimit
    });

    expect(addressSelector).toHaveBeenCalled();
    expect(store.getState).toHaveBeenCalled();
    expect(getWindowLocation).toHaveBeenCalled();
    expect(transformTransactionsToSign).toHaveBeenCalledWith({
      transactions: expect.any(Array),
      minGasLimit
    });
    expect(signTransactions).toHaveBeenCalledWith({
      transactions: expect.any(Array),
      minGasLimit,
      callbackRoute,
      transactionsDisplayInfo,
      customTransactionInformation: {
        grouping: expect.any(Array),
        redirectAfterSign: true,
        completedTransactionsDelay: undefined,
        sessionInformation: undefined,
        skipGuardian: undefined,
        signWithoutSending: false
      }
    });

    expect(result).toEqual({
      error: undefined,
      batchId: `${sessionId}-${address}`
    });
  });

  it('should prepare the grouping field with the indexes from the flat transactions array', async () => {
    const address =
      'erd1axhx4kenjlae6sknq7zjg2g4fvzavv979r2fg425p62wkl84avtqsf7vvv';
    const sessionId = '12345';
    const transactions = [
      [
        {
          receiver: address,
          sender: address,
          value: '0',
          data: '1'
        },
        {
          receiver: address,
          sender: address,
          value: '0',
          data: '2'
        }
      ],
      [
        {
          receiver: address,
          sender: address,
          value: '0',
          data: '3'
        }
      ],
      [
        {
          receiver: address,
          sender: address,
          value: '0',
          data: '4'
        },
        {
          receiver: address,
          sender: address,
          value: '0',
          data: '5'
        },
        {
          receiver: address,
          sender: address,
          value: '0',
          data: '6'
        }
      ]
    ];
    const transactionsDisplayInfo = {}; // Your test display info
    const callbackRoute = '/callback';
    const minGasLimit = 21000;

    // Mock the dependencies
    (addressSelector as unknown as jest.Mock).mockReturnValue(address);
    (store.getState as unknown as jest.Mock).mockReturnValue({});
    (getWindowLocation as unknown as jest.Mock).mockReturnValue({
      pathname: callbackRoute
    });
    (signTransactions as unknown as jest.Mock).mockResolvedValue({ sessionId });
    (transformTransactionsToSign as unknown as jest.Mock).mockResolvedValue(
      transactions
    );

    await sendBatchTransactions({
      transactions,
      transactionsDisplayInfo,
      minGasLimit
    });

    expect(signTransactions).toHaveBeenCalledWith({
      transactions,
      minGasLimit,
      callbackRoute,
      transactionsDisplayInfo,
      customTransactionInformation: {
        grouping: [[0, 1], [2], [3, 4, 5]],
        redirectAfterSign: true,
        completedTransactionsDelay: undefined,
        sessionInformation: undefined,
        skipGuardian: undefined,
        signWithoutSending: false
      }
    });
  });
});
