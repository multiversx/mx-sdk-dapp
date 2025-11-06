import { EventBus } from '@multiversx/sdk-dapp-ui/utils/EventBus';
import { account, testNetwork } from '__mocks__';
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

describe('signTransactions tests', () => {
  const startSigning = async () => {
    const signPromise = signTransactions({
      ...mockSignTransactionsInputData,
      handleSign: mockHandleSign
    });

    // wait for the manager to be initialized
    await new Promise((resolve) => setTimeout(resolve));

    return { signPromise };
  };

  it('should sign a single transaction', async () => {
    const { signPromise } = await startSigning();

    const [confirmHandler] = manager.getEventHandlers(SignEventsEnum.CONFIRM);

    await confirmHandler();

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
    await setGasPriceOptionHandler(fastGasPrice);

    const [confirmHandler] = manager.getEventHandlers(SignEventsEnum.CONFIRM);
    await confirmHandler();

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
});
