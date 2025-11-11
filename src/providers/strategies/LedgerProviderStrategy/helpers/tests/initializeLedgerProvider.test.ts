jest.mock('methods/account/getIsLoggedIn', () => ({
  getIsLoggedIn: jest.fn(() => false)
}));

jest.mock('../getLedgerProvider/getLedgerProvider', () => ({
  getLedgerProvider: jest.fn()
}));

jest.mock('../getLedgerErrorCodes', () => ({
  getLedgerErrorCodes: jest.fn()
}));

import { getIsLoggedIn } from 'methods/account/getIsLoggedIn';
import { getLedgerErrorCodes } from '../getLedgerErrorCodes';
import { getLedgerProvider } from '../getLedgerProvider/getLedgerProvider';
import { initializeLedgerProvider } from '../initializeLedgerProvider';

const mockGetIsLoggedIn = getIsLoggedIn as jest.MockedFunction<
  typeof getIsLoggedIn
>;
const mockGetLedgerProvider = getLedgerProvider as jest.MockedFunction<
  typeof getLedgerProvider
>;
const mockGetLedgerErrorCodes = getLedgerErrorCodes as jest.MockedFunction<
  typeof getLedgerErrorCodes
>;

type DeferredProps = Awaited<ReturnType<typeof getLedgerProvider>>;

describe('initializeLedgerProvider tests', () => {
  let manager: any;
  let resolve: jest.Mock;
  let reject: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
    manager = {
      updateAccountScreen: jest.fn(),
      updateConnectScreen: jest.fn(),
      subscribeToProviderInit: jest.fn(),
      unsubscribeFromProviderInit: jest.fn()
    } as any;
    resolve = jest.fn();
    reject = jest.fn();
    // ensure shouldInitiateLogin === true (user not logged in) by default
    mockGetIsLoggedIn.mockReturnValue(false);
  });

  it('should wire handleCancel to reject and handleRetry to re-invoke initialize', async () => {
    // create a deferred promise so initialize flow doesn't complete before we inspect handlers
    let deferredResolve: (props: DeferredProps) => void;
    const deferred = new Promise<DeferredProps>((innerResolve) => {
      deferredResolve = innerResolve;
    });
    // keep provider init pending so subscribe stays active
    mockGetLedgerProvider.mockReturnValue(deferred);

    // start initialization (do not `await` resolution)
    const initPromise = initializeLedgerProvider({
      manager,
      resolve,
      reject,
      shouldInitProvider: true
    });

    // handlers captured in first subscribe call
    expect(manager.subscribeToProviderInit).toHaveBeenCalledWith({
      handleRetry: expect.any(Function),
      handleCancel: expect.any(Function)
    });
    const subscribeMock = manager.subscribeToProviderInit as jest.Mock;
    const [{ handleRetry, handleCancel }] = subscribeMock.mock.calls[0];

    // handleCancel should reject with specific message
    handleCancel();
    expect(reject).toHaveBeenCalledWith('Device unavailable');

    // handleRetry should re-call initialize (subscribe again)
    handleRetry();
    expect(manager.subscribeToProviderInit).toHaveBeenCalledTimes(2);
    expect(manager.subscribeToProviderInit).toHaveBeenLastCalledWith({
      handleRetry: expect.any(Function),
      handleCancel: expect.any(Function)
    });

    // cleanup: allow pending promise to resolve to avoid unhandled promise rejections
    deferredResolve!({
      ledgerProvider: {} as any,
      ledgerConfig: { version: '1.0.0', dataEnabled: false } as any
    });
    await initPromise.catch();
  });

  it('should handle errors when user is not logged in by updating connect screen and subscribing', async () => {
    const testError = new Error('Ledger connection failed');
    const errorMessage = 'Custom error message';

    // make provider init fail
    mockGetLedgerProvider.mockRejectedValue(testError);
    // mock error codes to return a custom error message
    mockGetLedgerErrorCodes.mockReturnValue({
      errorMessage,
      defaultErrorMessage: 'Check if the MultiversX app is open on Ledger'
    });

    await initializeLedgerProvider({
      manager,
      resolve,
      reject,
      shouldInitProvider: true
    });

    // should set loading state initially
    expect(manager.updateAccountScreen).toHaveBeenCalledWith({
      isLoading: true
    });

    // should call getLedgerErrorCodes with the error
    expect(mockGetLedgerErrorCodes).toHaveBeenCalledWith(testError);

    // should update connect screen with error message
    expect(manager.updateConnectScreen).toHaveBeenCalledWith({
      error: errorMessage
    });

    // should subscribe to provider init with handlers
    expect(manager.subscribeToProviderInit).toHaveBeenCalledWith({
      handleRetry: expect.any(Function),
      handleCancel: expect.any(Function)
    });

    // should not resolve or reject (error is handled internally)
    expect(resolve).not.toHaveBeenCalled();
    expect(reject).not.toHaveBeenCalled();
  });
});
