import { Transaction } from '@multiversx/sdk-core';
import { WebViewProviderResponseEnums } from 'types/index';
import { detectCurrentPlatform } from 'utils/platform/detectCurrentPlatform';
import { loginWithNativeAuthToken } from '../../services/nativeAuth/helpers/loginWithNativeAuthToken';
import { requestMethods } from './requestMethods';

const notInitializedError = (caller: string) => () => {
  throw new Error(`Unable to perform ${caller}, Provider not initialized`);
};

const currentPlatform = detectCurrentPlatform();

export const webviewProvider: any = {
  init: async () => {
    return true;
  },
  login: async () => {
    try {
      requestMethods.login[currentPlatform]();
      const waitForNewToken: Promise<string> = new Promise(
        (resolve, reject) => {
          document.addEventListener('message', handleTokenReceived);
          window.addEventListener('message', handleTokenReceived);

          function handleTokenReceived(event: any) {
            let eventData = event.data;
            try {
              eventData = JSON.parse(eventData);
            } catch (err) {
              console.error('error parsing response');
            }
            const { message, type } = eventData;
            if (type === WebViewProviderResponseEnums.loginResponse) {
              const { accessToken, error } = message;
              loginWithNativeAuthToken(accessToken);
              resolve(accessToken);
              try {
                if (!error) {
                }
              } catch (err) {
                alert(err);
                reject('Unable to liogin');
              }
            }
            document.removeEventListener('message', handleTokenReceived);
          }
        }
      );
      return await waitForNewToken;
    } catch (err) {
      alert('error');
      console.log('error loggin in', err);
      throw err;
    }
  },
  logout: () => {
    requestMethods.logout[currentPlatform]();
    return new Promise((resolve) => {
      resolve(true);
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
