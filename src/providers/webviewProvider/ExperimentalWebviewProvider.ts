import { Transaction, SignableMessage } from '@multiversx/sdk-core';
import { responseTypeMap } from '@multiversx/sdk-web-wallet-cross-window-provider/out/constants';
import {
  CrossWindowProviderRequestEnums,
  CrossWindowProviderResponseEnums,
  ReplyWithPostMessageType,
  RequestPayloadType,
  ResponseTypeMap,
  SignMessageStatusEnum
} from '@multiversx/sdk-web-wallet-cross-window-provider/out/types';
import { loginWithNativeAuthToken } from 'services/nativeAuth/helpers/loginWithNativeAuthToken';
import { IDappProvider } from 'types/dappProvider.types';
import { setExternalProviderAsAccountProvider } from '../accountProvider';
import { getTargetOrigin } from './targetOrigin';

type SendPostMessageType<T extends CrossWindowProviderRequestEnums> = {
  type: T;
  payload?: RequestPayloadType[keyof RequestPayloadType];
};

const notInitializedError = (caller: string) => () => {
  throw new Error(`Unable to perform ${caller}, Provider not initialized`);
};

export class ExperimentalWebviewProvider implements IDappProvider {
  private static instance: ExperimentalWebviewProvider;

  static getInstance() {
    if (!ExperimentalWebviewProvider.instance) {
      ExperimentalWebviewProvider.instance = new ExperimentalWebviewProvider();
    }
    return ExperimentalWebviewProvider.instance;
  }

  init = async () => {
    return true;
  };

  login = async () => {
    return true;
  };

  logout = async () => {
    const response = await this.sendPostMessage({
      type: CrossWindowProviderRequestEnums.logoutRequest
    });

    return Boolean(response.payload.data);
  };

  relogin = async () => {
    const response = await this.sendPostMessage({
      type: CrossWindowProviderRequestEnums.loginRequest
    });

    const { data, error } = response.payload;

    if (error || !data) {
      throw new Error('Unable to re-login');
    }

    const { accessToken } = data;

    if (!accessToken) {
      console.error('Unable to re-login. Missing accessToken.');
      return null;
    }

    loginWithNativeAuthToken(accessToken);
    setExternalProviderAsAccountProvider();
    return accessToken;
  };

  signTransactions = async (
    transactionsToSign: Transaction[]
  ): Promise<Transaction[] | null> => {
    const response = await this.sendPostMessage({
      type: CrossWindowProviderRequestEnums.signTransactionsRequest,
      payload: transactionsToSign.map((tx) => tx.toPlainObject())
    });

    const { data, error } = response.payload;

    if (error || !data) {
      console.error('Unable to sign transactions');
      return null;
    }

    const transactions = data;
    return transactions.map((tx) => Transaction.fromPlainObject(tx));
  };

  signTransaction = async (transaction: Transaction) => {
    const response = await this.signTransactions([transaction]);
    return response?.[0];
  };

  async signMessage(message: SignableMessage): Promise<SignableMessage | null> {
    const response = await this.sendPostMessage({
      type: CrossWindowProviderRequestEnums.signMessageRequest
    });

    const { data, error } = response.payload;

    if (error || !data) {
      console.error('Unable to sign message');
      return null;
    }

    if (data.status !== SignMessageStatusEnum.signed) {
      console.error('Could not sign message');
      return null;
    }

    message.applySignature(Buffer.from(String(data.signature), 'hex'));

    return message;
  }

  async waitingForResponse<T extends CrossWindowProviderResponseEnums>(
    action: T
  ): Promise<{
    type: T;
    payload: ReplyWithPostMessageType<T>['payload'];
  }> {
    return await new Promise((resolve) => {
      window.addEventListener(
        'message',
        async function eventHandler(
          event: MessageEvent<{
            type: T;
            payload: ReplyWithPostMessageType<T>['payload'];
          }>
        ) {
          const { type, payload } = event.data;

          if (event.origin != getTargetOrigin()) {
            console.error('origin not accepted', {
              eventOrigin: event.origin
            });
            return;
          }

          const isCurrentAction =
            action === type ||
            type === CrossWindowProviderResponseEnums.cancelResponse;

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
  ): Promise<{
    type: ResponseTypeMap[T] | CrossWindowProviderResponseEnums.cancelResponse;
    payload: ReplyWithPostMessageType<ResponseTypeMap[T]>['payload'];
  }> => {
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
      safeWindow.parent.postMessage(message, getTargetOrigin());
    }

    return await this.waitingForResponse(responseTypeMap[message.type]);
  };

  getTargetOrigin() {
    return Promise.resolve(true);
  }

  isInitialized = () => true;
  isConnected = async () => true;
  getAddress = notInitializedError('getAddress');
}
