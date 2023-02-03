import { Transaction } from '@multiversx/sdk-core';
import { loginWithNativeAuthToken } from 'services/nativeAuth/helpers/loginWithNativeAuthToken';
import { WebViewProviderResponseEnums } from 'types/index';
import { detectCurrentPlatform } from 'utils/platform/detectCurrentPlatform';
import { requestMethods } from './requestMethods';

const notInitializedError = (caller: string) => () => {
  throw new Error(`Unable to perform ${caller}, Provider not initialized`);
};

const currentPlatform = detectCurrentPlatform();
export const targetOrigin = window.parent.origin;

const handleWaitForMessage = (cb: (eventData: any) => void) => {
  const handleMessageReceived = (event: any) => {
    let eventData = event.data;
    if (event.target.origin != targetOrigin) {
      return;
    }
    try {
      eventData = JSON.parse(eventData);
      cb(eventData);
    } catch (err) {
      console.error('error parsing response');
    }
  };
  document.addEventListener('message', handleMessageReceived);
  window.addEventListener('message', handleMessageReceived);
};

export const webviewProvider: any = {
  init: async () => {
    return true;
  },
  login: async () => {
    try {
      requestMethods.login[currentPlatform]();
      const waitForNewToken: Promise<string> = new Promise(
        (resolve, reject) => {
          function handleTokenReceived(eventData: any) {
            const { message, type } = eventData;
            if (type === WebViewProviderResponseEnums.loginResponse) {
              try {
                const { accessToken, error } = message;
                if (!error) {
                  loginWithNativeAuthToken(accessToken);
                  resolve(accessToken);
                } else {
                  reject(error);
                }
              } catch (err) {
                reject('Unable to login');
              }
            }
            document.removeEventListener('message', handleTokenReceived);
          }
          handleWaitForMessage(handleTokenReceived);
        }
      );
      return await waitForNewToken;
    } catch (err) {
      console.log('error logging in', err);
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

          function handleSignResponse(eventData: any) {
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
                } else {
                  reject(error);
                }
              } catch (err) {
                reject('Unable to sign');
              }
            }
            document.removeEventListener('message', handleSignResponse);
          }
          handleWaitForMessage(handleSignResponse);
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
