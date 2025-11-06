import { EventBus } from '@multiversx/sdk-dapp-ui/utils/EventBus';
import { account, testNetwork } from '__mocks__';
import { Transaction } from 'lib/sdkCore';
import { SignTransactionsStateManager } from 'managers/internal/SignTransactionsStateManager';
import { SignEventsEnum } from 'managers/internal/SignTransactionsStateManager/types';
import { ComponentFactory } from 'utils/ComponentFactory';
import { signTransactions } from '../signTransactions';
import {
  mockPlainTransactionObject,
  mockSignTransactionsInputData
} from './mocks';

jest.mock('methods/network/getEgldLabel', () => ({
  getEgldLabel: () => testNetwork.egldLabel
}));

jest.mock('methods/account/getAccount', () => ({
  getAccount: () => account
}));

jest.mock('store/selectors/networkSelectors', () => ({
  networkSelector: () => testNetwork
}));

jest.spyOn(ComponentFactory, 'create').mockResolvedValue({
  getEventBus: async () => new EventBus()
});

const mockHandleSign = jest.fn((txs) => Promise.resolve(txs));

const manager = SignTransactionsStateManager.getInstance();

const executeHandler = async (handler: Function) => {
  handler();
  await new Promise((resolve) => setTimeout(resolve));
};

describe('signTransactions tests', () => {
  const startSigning = async (
    transactions = mockSignTransactionsInputData.transactions
  ) => {
    const signPromise = signTransactions({
      ...mockSignTransactionsInputData,
      transactions,
      handleSign: mockHandleSign
    });

    // wait for the manager to be initialized
    await new Promise((resolve) => setTimeout(resolve));

    return { signPromise };
  };

  it('should sign a single transaction', async () => {
    const { signPromise } = await startSigning();

    const [confirmHandler] = manager.getEventHandlers(SignEventsEnum.CONFIRM);

    confirmHandler();

    const signedTransactions = await signPromise;

    expect(signedTransactions.map((el) => el.toPlainObject())).toEqual(
      expect.arrayContaining([
        expect.objectContaining(mockPlainTransactionObject)
      ])
    );
  });
  it('should sign a single transaction with a faster gas price', async () => {
    const { signPromise } = await startSigning();

    const fastGasPrice = 1050000000;

    const [setGasPriceOptionHandler] = manager.getEventHandlers(
      SignEventsEnum.SET_GAS_PRICE_OPTION
    );
    setGasPriceOptionHandler(fastGasPrice);

    const [confirmHandler] = manager.getEventHandlers(SignEventsEnum.CONFIRM);
    confirmHandler();

    const signedTransactions = await signPromise;

    const plainSignedTransactions = signedTransactions.map((el) =>
      el.toPlainObject()
    );

    expect(plainSignedTransactions).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          ...mockPlainTransactionObject,
          gasPrice: fastGasPrice
        })
      ])
    );
  });
  it('should sign first transaction, then back, then sign second transaction', async () => {
    const { signPromise } = await startSigning([
      Transaction.newFromPlainObject(mockPlainTransactionObject),
      Transaction.newFromPlainObject({
        ...mockPlainTransactionObject,
        nonce: 1346
      })
    ]);

    const [firstTxConfirm] = manager.getEventHandlers(SignEventsEnum.CONFIRM);
    expect(manager.currentScreenIndex).toBe(0); // user arrives at the first transaction
    await executeHandler(firstTxConfirm); // user signs the first transaction
    expect(manager.currentScreenIndex).toBe(1); // user is on the second transaction
    const [backHandler] = manager.getEventHandlers(SignEventsEnum.BACK);
    await executeHandler(backHandler); // user goes back to the first transaction
    expect(manager.currentScreenIndex).toBe(0); // user is on the first transaction
    expect(manager.getEventHandlers(SignEventsEnum.CONFIRM).length).toBe(1);
    const [nextHandler] = manager.getEventHandlers(SignEventsEnum.NEXT);
    await executeHandler(nextHandler); // user reconfirms the first transaction without signing
    expect(manager.currentScreenIndex).toBe(1); // user is again on the second transaction screen
    const [secondTxConfirm] = manager.getEventHandlers(SignEventsEnum.CONFIRM);
    secondTxConfirm();
    const signedTransactions = await signPromise;
    expect(signedTransactions.length).toBe(2);
  });
});
