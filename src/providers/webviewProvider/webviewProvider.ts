import { Transaction } from '@multiversx/sdk-core';
import { loginWithNativeAuthToken } from 'services/nativeAuth/helpers/loginWithNativeAuthToken';
import { PlatformsEnum, WebViewProviderResponseEnums } from 'types/index';
import { detectCurrentPlatform } from 'utils/platform/detectCurrentPlatform';
import { setExternalProviderAsAccountProvider } from '../accountProvider';
import { requestMethods } from './requestMethods';
import { getTargetOrigin } from './targetOrigin';

const notInitializedError = (caller: string) => () => {
  throw new Error(`Unable to perform ${caller}, Provider not initialized`);
};

const currentPlatform = detectCurrentPlatform();

const messageType = 'message';

const handleWaitForMessage = (cb: (eventData: any) => void) => {
  const handleMessageReceived = (event: any) => {
    console.log('handleMessageReceived', event);
    let eventData = event.data;
    if (
      event.origin != getTargetOrigin() &&
      currentPlatform != PlatformsEnum.reactNative
    ) {
      console.log('event.origin != getTargetOrigin()');
      return;
    }
    try {
      if (typeof eventData === 'string') {
        console.log('typeof eventData === string');
        eventData = JSON.parse(eventData);
      } else {
        console.log('typeof eventData !== string');
        eventData = {
          type: WebViewProviderResponseEnums.signMessageResponse,
          message: eventData.payload
        };
      }

      cb(eventData);
    } catch (err) {
      console.error('error parsing response');
    }
  };
  if (document) {
    document.addEventListener(messageType, handleMessageReceived);
  }
  if (window) {
    console.log('window.addEventListener - messageType = ', messageType);
    window.addEventListener(messageType, handleMessageReceived);
  }
};

export const webviewProvider: any = {
  init: async () => {
    return true;
  },
  login: async () => {
    return true;
  },
  //relogin is called instead of logout if the user is not actively requiring to be logged out
  //for example, when the token expires, and this will regenerate the token, for a seamless experience
  relogin: async () => {
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
                  setExternalProviderAsAccountProvider();
                  resolve(accessToken);
                } else {
                  reject(error);
                }
              } catch (err) {
                reject('Unable to login');
              }
            }
            if (document) {
              document.removeEventListener(messageType, handleTokenReceived);
            }
          }
          handleWaitForMessage(handleTokenReceived);
        }
      );
      return await waitForNewToken;
    } catch (err) {
      console.error('error logging in', err);
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
  signMessage: async (message: string) => {
    try {
      requestMethods.signMessage[currentPlatform](message);
      const waitForSignedMessageResponse: Promise<string> = new Promise(
        (resolve, reject) => {
          (window as any).signMessageResponse = (
            signedMessage: string,
            error: string
          ) => {
            if (error) {
              reject(error);
              (window as any).signMessageResponse = null;
              return;
            }
            resolve(signedMessage);
            (window as any).signMessageResponse = null;
          };

          function handleSignMessageResponse(eventData: any) {
            const { message, type } = eventData;
            if (
              type === WebViewProviderResponseEnums.signMessageResponse &&
              message != null
            ) {
              const { signedMessage, error } = message;

              if (!error) {
                resolve(signedMessage);
              } else {
                reject(error);
              }
            }
            document?.removeEventListener(
              messageType,
              handleSignMessageResponse
            );
          }
          handleWaitForMessage(handleSignMessageResponse);
        }
      );
      return await waitForSignedMessageResponse;
    } catch (err) {
      console.error('error sending transaction', err);
      throw err;
    }
  },
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

          function handleSignTransactionResponse(eventData: any) {
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
            if (document) {
              document.removeEventListener(
                messageType,
                handleSignTransactionResponse
              );
            }
          }
          handleWaitForMessage(handleSignTransactionResponse);
        });
      return await waitForSignedTransactionsResponse;
    } catch (err) {
      console.error('error sending transaction', err);
      throw err;
    }
  },
  signTransaction: async function (transaction: Transaction[]) {
    const response = await this.signTransactions([transaction]);
    return response[0];
  }
};
