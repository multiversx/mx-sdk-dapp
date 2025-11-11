jest.mock('methods/account/getIsLoggedIn', () => ({
  getIsLoggedIn: jest.fn(() => false)
}));

jest.mock('../getLedgerProvider/getLedgerProvider', () => ({
  getLedgerProvider: jest.fn()
}));

import { getIsLoggedIn } from 'methods/account/getIsLoggedIn';
import { getLedgerProvider } from '../getLedgerProvider/getLedgerProvider';
import { initializeLedgerProvider } from '../initializeLedgerProvider';

const mockGetIsLoggedIn = getIsLoggedIn as jest.MockedFunction<
  typeof getIsLoggedIn
>;
const mockGetLedgerProvider = getLedgerProvider as jest.MockedFunction<
  typeof getLedgerProvider
>;

describe('initializeLedgerProvider tests', () => {
  it('should wire handleCancel to reject and handleRetry to re-invoke initialize', async () => {
    // create a deferred promise so initialize flow doesn't complete before we inspect handlers
    type DeferredProps = Awaited<ReturnType<typeof getLedgerProvider>>;
    let deferredResolve: (props: DeferredProps) => void;

    const deferred = new Promise<DeferredProps>((resolve) => {
      deferredResolve = resolve;
    });

    const manager = {
      updateAccountScreen: jest.fn(),
      subscribeToProviderInit: jest.fn(),
      unsubscribeFromProviderInit: jest.fn()
    } as any;

    const resolve = jest.fn();
    const reject = jest.fn();

    // ensure shouldInitiateLogin === true to subscribe
    mockGetIsLoggedIn.mockReturnValue(false);
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
});
