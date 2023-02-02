import { Transaction } from '@multiversx/sdk-core';
import { WebViewProviderResponseEnums } from 'types/index';
import { detectCurrentPlatform } from 'utils/platform/detectCurrentPlatform';
import { requestMethods } from './requestMethods';

const notInitializedError = (caller: string) => () => {
  throw new Error(`Unable to perform ${caller}, Provider not initialized`);
};

const currentPlatform = detectCurrentPlatform();

export const webviewProvider: any = {
  init: async () => {
    return true;
  },
  login: notInitializedError('login'),
  logout: () => {
    return new Promise((resolve) => {
      resolve(true);

      // reject("TODO: implement");
    });
  },
  getAddress: notInitializedError('getAddress'),
  isInitialized: () => true,
  isConnected: async () => true,
  sendTransaction: notInitializedError('sendTransaction'),
  signMessage: notInitializedError('signMessage'),
  signTransactions: async (transactions: Transaction[]) => {
    try {
      const plainTransactions = transactions.map((tx) => tx.toPlainObject());
      requestMethods.signTransactions[currentPlatform](plainTransactions);
      const waitForSignedTransactionsResponse: Promise<Transaction[]> =
        new Promise((resolve, reject) => {
          document.addEventListener('message', handleSignResponse);
          window.addEventListener('message', handleSignResponse);

          (window as any).transactionsSigned = (txs: any, error: string) => {
            txs = JSON.parse(txs);
            if (error) {
              reject(error);
              (window as any).transactionsSigned = null;
              return;
            }
            resolve(txs.map((tx: any) => Transaction.fromPlainObject(tx)));
            (window as any).transactionsSigned = null;
          };

          function handleSignResponse(event: any) {
            let eventData = event.data;
            try {
              eventData = JSON.parse(eventData);
            } catch (err) {
              console.error('error parsing response');
            }
            const { message, type } = eventData;
            if (
              type === WebViewProviderResponseEnums.signTransactionsResponse
            ) {
              const { transactions, error } = message;

              try {
                if (!error) {
                  resolve(
                    transactions.map((tx: any) =>
                      Transaction.fromPlainObject(tx)
                    )
                  );
                }
              } catch (err) {
                alert(err);
                reject('Unable to sign');
              }
            }
            document.removeEventListener('message', handleSignResponse);
          }
        });
      return await waitForSignedTransactionsResponse;
    } catch (err) {
      console.log('error sending transaction', err);
      throw err;
    }
  },
  signTransaction: async function (transaction: Transaction[]) {
    const response = await this.signTransactions([transaction]);
    return response[0];
  }
};

export default webviewProvider;
