import { account, testNetwork } from '__mocks__';
import { SignTransactionsStateManager } from 'managers/internal/SignTransactionsStateManager';
import { signTransactions } from '../signTransactions';
import { mockSignTransactionsInputData } from './mocks';

jest.mock('methods/account/getAccountInfo', () => ({
  getAccountInfo: () => ({
    account: {
      address: account.address,
      shard: account.shard
    }
  })
}));

jest.mock('methods/network/getEgldLabel', () => ({
  getEgldLabel: () => testNetwork.egldLabel
}));

jest.mock('store/selectors/networkSelectors', () => ({
  networkSelector: () => testNetwork
}));

const callbacks = new Map();
jest.mock(
  'managers/internal/SignTransactionsStateManager/SignTransactionsStateManager',
  () => {
    const subscribeToEventBus = jest.fn((event, handler) => {
      callbacks.set(event, handler);
    });
    const instance = {
      openUI: jest.fn(async () => {}),
      closeUI: jest.fn(() => {}),
      subscribeToEventBus,
      notifyDataUpdate: jest.fn(() => {}),
      initializeGasPriceMap: jest.fn(() => {}),
      updateIsLoading: jest.fn(() => {}),
      getGasPriceOptionMap: {
        [1345]: {
          gasPriceOption: 1000000000
        }
      },
      updateTokenTransaction: jest.fn(() => {}),
      updateNonFungibleTransaction: jest.fn(() => {}),
      updateCommonData: jest.fn(() => {})
      // updateGasPriceMap: jest.fn(() => {}),
      // updateData: jest.fn(() => {}),
    };

    return {
      SignTransactionsStateManager: { getInstance: () => instance }
    };
  }
);

const mockHandleSign = jest.fn(() => Promise.resolve([]));

describe('signTransactions tests', () => {
  it('should sign transactions', async () => {
    const transactionsPromise = signTransactions({
      ...mockSignTransactionsInputData,
      handleSign: mockHandleSign
    });
    const subscribed = SignTransactionsStateManager.getInstance()
      .subscribeToEventBus as jest.Mock;
    // allow async setup to register subscriptions
    await new Promise((r) => setTimeout(r, 0));
    expect(subscribed).toHaveBeenCalled();
    const confirmCall =
      subscribed.mock.calls.find((c) => String(c[0]).includes('CONFIRM')) ||
      subscribed.mock.calls[1];
    const confirmHandler = confirmCall[1];
    await confirmHandler();

    const result = await transactionsPromise;
    expect(Array.isArray(result)).toBe([1]);
  });
});
