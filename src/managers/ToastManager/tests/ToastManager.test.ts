import { testAddress } from '__mocks__';
import { mockTransaction } from 'managers/ToastManager/helpers/tests/mocks/transactions';
import type { StoreApi } from 'store/store';
import { ToastManager } from '../ToastManager';

// Mock toast actions used by ToastManager (track side-effects only)
jest.mock('store/actions/toasts/toastsActions', () => ({
  addTransactionToast: jest.fn().mockImplementation(({ toastId }) => toastId),
  removeTransactionToast: jest.fn(),
  createCustomToast: jest.fn().mockReturnValue('custom-toast-1'),
  removeCustomToast: jest.fn(),
  removeAllCustomToasts: jest.fn(),
  customToastCloseHandlersDictionary: {},
  customToastComponentDictionary: {}
}));

// Mock createToastsFromTransactions as a pure stub (no logic)
const SESSION_ID = '1760451058752';

jest.mock('../helpers/createToastsFromTransactions', () => ({
  createToastsFromTransactions: jest.fn()
}));

const {
  createToastsFromTransactions
} = require('../helpers/createToastsFromTransactions');

// Fakes for collaborators
class FakeLifetimeManager {
  init = jest.fn();
  start = jest.fn();
  startWithCustomDuration = jest.fn();
  stop = jest.fn();
  destroy = jest.fn();
}

class FakeUICoordinator {
  init = jest.fn().mockResolvedValue(undefined);
  publishTransactionToasts = jest.fn().mockResolvedValue(undefined);
  publishCustomToasts = jest.fn().mockResolvedValue(undefined);
  showToasts = jest.fn();
  hideToasts = jest.fn();
  destroy = jest.fn();
}

// Minimal zustand-like store stub sufficient for ToastManager
function createStoreStub(initialState: any): StoreApi {
  let state = initialState;
  const subscribers = new Set<(s: any, prev: any) => void>();

  return {
    getState: () => state,
    setState: (partial: any) => {
      const prev = state;
      state =
        typeof partial === 'function'
          ? { ...state, ...partial(state) }
          : { ...state, ...partial };
      subscribers.forEach((fn) => fn(state, prev));
    },
    subscribe: (fn: any) => {
      subscribers.add(fn);
      return () => subscribers.delete(fn);
    }
  } as unknown as StoreApi;
}

describe('ToastManager subscription reacts to transaction completion', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('moves toast from pending to completed when status changes to success and starts lifetime', async () => {
    // Control helper outputs explicitly per invocation: pending on init, completed after state change
    (createToastsFromTransactions as jest.Mock)
      .mockResolvedValueOnce({
        pendingTransactionToasts: [{ toastId: SESSION_ID }],
        completedTransactionToasts: []
      })
      .mockResolvedValueOnce({
        pendingTransactionToasts: [],
        completedTransactionToasts: [{ toastId: SESSION_ID }]
      });
    const startTime = 1_700_000_000_000; // arbitrary
    const endTime = startTime + 10_000;

    const initialStore = {
      toasts: {
        transactionToasts: [
          {
            toastId: SESSION_ID,
            startTime,
            endTime
          }
        ],
        customToasts: []
      },
      transactions: {
        [SESSION_ID]: {
          status: 'sent',
          transactions: [
            {
              nonce: 1214,
              value: '0',
              receiver: testAddress,
              sender: testAddress,
              gasPrice: 1000000000,
              gasLimit: 6000000,
              chainID: 'D',
              version: 1,
              signature:
                '6e9851b889b7cdd31f4f8bf2a1a75be5d5c486f4e52139510939ac87b5073ab8080882dd54bb848214a918a46d0faf0883eb8b3a1227779bcd7176da95f0840d',
              txHash: mockTransaction.hash,
              receiverShard: 1,
              senderShard: 1,
              status: 'pending',
              hash: mockTransaction.hash
            }
          ],
          transactionsDisplayInfo: {
            processingMessage: 'Processing Self transaction',
            errorMessage: 'An error has occured during Self',
            successMessage: 'Self transaction successful'
          },
          interpretedTransactions: {}
        }
      }
    };

    const store = createStoreStub(initialStore);
    const lifetime = new FakeLifetimeManager();
    const ui = new FakeUICoordinator();

    const manager = new ToastManager({
      store,
      lifetimeManager: lifetime as any,
      uiCoordinator: ui as any
    });
    await manager.init();

    // Initial publish should contain pending toast (from first mocked return)
    expect(ui.publishTransactionToasts).toHaveBeenCalledWith([
      { toastId: SESSION_ID }
    ]);

    // Change transaction session to success (as provided by user scenario)
    store.setState({
      transactions: {
        [SESSION_ID]: {
          status: 'success',
          transactions: [
            {
              nonce: 1214,
              value: '0',
              receiver: testAddress,
              sender: testAddress,
              gasPrice: 1000000000,
              gasLimit: 6000000,
              chainID: 'D',
              version: 1,
              signature:
                '6e9851b889b7cdd31f4f8bf2a1a75be5d5c486f4e52139510939ac87b5073ab8080882dd54bb848214a918a46d0faf0883eb8b3a1227779bcd7176da95f0840d',
              txHash: mockTransaction.hash,
              receiverShard: 1,
              senderShard: 1,
              status: 'success',
              hash: mockTransaction.hash,
              invalidTransaction: false,
              results: [],
              previousStatus: 'pending',
              hasStatusChanged: true
            } as any
          ],
          transactionsDisplayInfo: {
            processingMessage: 'Processing Self transaction',
            errorMessage: 'An error has occured during Self',
            successMessage: 'Self transaction successful'
          },
          interpretedTransactions: {},
          errorMessage: 'An error has occured during Self'
        }
      }
    });

    // Allow async subscriber to complete
    await Promise.resolve();

    // On completion, lifetime should start for this toast id
    expect(lifetime.start).toHaveBeenCalledWith(SESSION_ID);

    // And UI should publish the completed toast state (second mocked return)
    const calls = (ui.publishTransactionToasts as jest.Mock).mock.calls;
    expect(calls[calls.length - 1][0]).toEqual([{ toastId: SESSION_ID }]);
  });
});
