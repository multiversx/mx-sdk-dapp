import { Transaction, SignableMessage } from '@multiversx/sdk-core';
import {
  CrossWindowProviderRequestEnums,
  CrossWindowProviderResponseEnums
} from '@multiversx/sdk-web-wallet-cross-window-provider/out/types';
import { loginWithNativeAuthToken } from 'services/nativeAuth/helpers/loginWithNativeAuthToken';
import { detectCurrentPlatform } from 'utils/platform/detectCurrentPlatform';
import { setExternalProviderAsAccountProvider } from '../accountProvider';
import { getTargetOrigin } from './targetOrigin';

export type ResponseTypeMap = {
  [CrossWindowProviderRequestEnums.signTransactionsRequest]: CrossWindowProviderResponseEnums.signTransactionsResponse;
  [CrossWindowProviderRequestEnums.signMessageRequest]: CrossWindowProviderResponseEnums.signMessageResponse;
  [CrossWindowProviderRequestEnums.loginRequest]: CrossWindowProviderResponseEnums.loginResponse;
  [CrossWindowProviderRequestEnums.logoutRequest]: CrossWindowProviderResponseEnums.disconnectResponse;
  [CrossWindowProviderRequestEnums.cancelAction]: CrossWindowProviderResponseEnums.cancelResponse;
};

export const responseTypeMap: ResponseTypeMap = {
  [CrossWindowProviderRequestEnums.signTransactionsRequest]:
    CrossWindowProviderResponseEnums.signTransactionsResponse,
  [CrossWindowProviderRequestEnums.signMessageRequest]:
    CrossWindowProviderResponseEnums.signMessageResponse,
  [CrossWindowProviderRequestEnums.loginRequest]:
    CrossWindowProviderResponseEnums.loginResponse,
  [CrossWindowProviderRequestEnums.logoutRequest]:
    CrossWindowProviderResponseEnums.disconnectResponse,
  [CrossWindowProviderRequestEnums.cancelAction]:
    CrossWindowProviderResponseEnums.cancelResponse
};

type SendPostMessageType<T extends CrossWindowProviderRequestEnums> = {
  type: T;
  payload?: any;
};

const notInitializedError = (caller: string) => () => {
  throw new Error(`Unable to perform ${caller}, Provider not initialized`);
};

export class NewWebviewProvider {
  private static instance: NewWebviewProvider;

  static getInstance() {
    if (!NewWebviewProvider.instance) {
      NewWebviewProvider.instance = new NewWebviewProvider();
    }
    return NewWebviewProvider.instance;
  }

  init = async () => {
    return true;
  };

  login = async () => {
    return true;
  };

  logout = async () => {
    this.sendPostMessage({
      type: CrossWindowProviderRequestEnums.logoutRequest
    });
    return true;
  };

  relogin = async () => {
    const response = await this.sendPostMessage({
      type: CrossWindowProviderRequestEnums.loginRequest
    });

    try {
      const { accessToken, error } = response.payload;
      if (!error) {
        loginWithNativeAuthToken(accessToken);
        setExternalProviderAsAccountProvider();
        return accessToken;
      } else {
        console.error('Unable to login', error);
        return null;
      }
    } catch (err) {
      throw new Error('Unable to login');
    }
  };

  signTransactions = async (
    transactionsToSign: Transaction[]
  ): Promise<Transaction[] | null> => {
    const response = await this.sendPostMessage({
      type: CrossWindowProviderRequestEnums.signTransactionsRequest,
      payload: transactionsToSign.map((tx) => tx.toPlainObject())
    });

    const transactions = response.payload;

    console.log({
      response,
      transactions
    });

    return transactions.map((tx: any) => Transaction.fromPlainObject(tx));
  };

  signTransaction = async (transaction: Transaction) => {
    const response = await this.signTransactions([transaction]);
    return response?.[0];
  };

  signMessage = async (message: SignableMessage) => {
    const response = await this.sendPostMessage({
      type: CrossWindowProviderRequestEnums.signMessageRequest,
      payload: message
    });

    const { signedMessage, error } = response.payload;

    if (!error) {
      return signedMessage;
    } else {
      throw new Error(error);
    }
  };

  async waitingForResponse<T extends CrossWindowProviderResponseEnums>(
    action: T
  ): Promise<{
    type: T;
    payload: any;
  }> {
    const currentPlatform = detectCurrentPlatform();

    return await new Promise((resolve) => {
      window.addEventListener(
        'message',
        async function eventHandler(
          event: MessageEvent<{
            type: T;
            payload: any;
          }>
        ) {
          const { type, payload } = event.data;

          if (event.origin != getTargetOrigin()) {
            console.log('event.origin not accepted', {
              eventOrigin: event.origin,
              targetOrigin: getTargetOrigin(),
              currentPlatform
            });
            return;
          }

          const isCurrentAction =
            action === type ||
            type === CrossWindowProviderResponseEnums.cancelResponse; // TODO: check if this is needed

          if (!isCurrentAction) {
            return;
          }

          window.removeEventListener('message', eventHandler);
          resolve({ type, payload });
        }
      );
    });
  }

  sendPostMessage = async <T extends CrossWindowProviderRequestEnums>(
    message: SendPostMessageType<T>
  ) => {
    const safeWindow = typeof window !== 'undefined' ? window : ({} as any);

    if (safeWindow.ReactNativeWebView) {
      safeWindow.ReactNativeWebView.postMessage(
        JSON.stringify(message),
        // TODO: check if this is needed
        getTargetOrigin()
      );
    } else if (safeWindow.webkit) {
      safeWindow.webkit.messageHandlers.postMessage(
        JSON.stringify(message),
        // TODO: check if this is needed
        getTargetOrigin()
      );
    } else if (safeWindow.parent) {
      console.log('sendPostMessage - parent', safeWindow.parent);
      console.log('sendPostMessage - message', message);
      safeWindow.parent.postMessage(message, getTargetOrigin());
    }

    const data = await this.waitingForResponse(responseTypeMap[message.type]);

    console.log('sendPostMessage - data', data);

    return data;
  };

  getTargetOrigin() {
    return Promise.resolve(true);
  }

  handleMessageReceived(event: {
    data: { type: CrossWindowProviderResponseEnums; payload: any };
  }) {
    console.log('handleMessageReceived', event);
    return Promise.resolve(true);
  }

  isInitialized = () => true;
  isConnected = async () => true;
  getAddress = notInitializedError('getAddress');
}
