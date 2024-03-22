import { SignableMessage, Transaction } from '@multiversx/sdk-core';
import { responseTypeMap } from '@multiversx/sdk-web-wallet-cross-window-provider/out/constants';
import {
  CrossWindowProviderRequestEnums,
  CrossWindowProviderResponseEnums,
  PostMessageParamsType,
  PostMessageReturnType,
  ReplyWithPostMessagePayloadType,
  SignMessageStatusEnum
} from '@multiversx/sdk-web-wallet-cross-window-provider/out/types';
import { logoutAction } from 'reduxStore/commonActions';
import { store } from 'reduxStore/store';
import { loginWithNativeAuthToken } from 'services/nativeAuth/helpers/loginWithNativeAuthToken';
import { removeAllTransactionsToSign } from 'services/transactions';
import { IDappProvider } from 'types/dappProvider.types';
import { logout } from 'utils/logout';
import { setExternalProviderAsAccountProvider } from '../accountProvider';
import { getTargetOrigin } from './helpers/getTargetOrigin';
import { notInitializedError } from './helpers/notInitializedError';
import { webviewProviderEventHandler } from './helpers/webviewProviderEventHandler';

/**
 * This is an experimental provider that uses `postMessage` to communicate with the parent.
 * Please do not use this provider or use it with caution.
 * It will be renamed to WebviewProvider once it is stable.
 * */
export class ExperimentalWebviewProvider implements IDappProvider {
  private static instance: ExperimentalWebviewProvider;

  static getInstance() {
    if (!ExperimentalWebviewProvider.instance) {
      ExperimentalWebviewProvider.instance = new ExperimentalWebviewProvider();
    }
    return ExperimentalWebviewProvider.instance;
  }

  constructor() {
    this.resetState();
  }

  private resetState = () => {
    const safeWindow = typeof window !== 'undefined' ? window : ({} as any);

    safeWindow.addEventListener(
      'message',
      webviewProviderEventHandler(
        CrossWindowProviderResponseEnums.resetStateResponse,
        (data) => {
          if (
            data.type === CrossWindowProviderResponseEnums.resetStateResponse
          ) {
            store.dispatch(logoutAction());

            setTimeout(() => {
              this.sendPostMessage({
                type: CrossWindowProviderRequestEnums.finalizeResetStateRequest,
                payload: undefined
              });
            }, 500);
          }
        }
      )
    );
  };

  init = async () => {
    this.sendPostMessage({
      type: CrossWindowProviderRequestEnums.finalizeHandshakeRequest,
      payload: undefined
    });

    return true;
  };

  login = async () => {
    return true;
  };

  logout = async () => {
    const response = await this.sendPostMessage({
      type: CrossWindowProviderRequestEnums.logoutRequest,
      payload: undefined
    });

    await logout();

    return Boolean(response.payload.data);
  };

  relogin = async () => {
    const response = await this.sendPostMessage({
      type: CrossWindowProviderRequestEnums.loginRequest,
      payload: undefined
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

    const { data: signedTransactions, error } = response.payload;

    if (error || !signedTransactions) {
      console.error('Unable to sign transactions');
      return null;
    }

    if (response.type == CrossWindowProviderResponseEnums.cancelResponse) {
      console.warn('Cancelled the transactions signing action');
      await this.cancelAction();
      return null;
    }

    return signedTransactions.map((tx) => Transaction.fromPlainObject(tx));
  };

  signTransaction = async (transaction: Transaction) => {
    const response = await this.signTransactions([transaction]);
    return response?.[0];
  };

  async signMessage(message: SignableMessage): Promise<SignableMessage | null> {
    const response = await this.sendPostMessage({
      type: CrossWindowProviderRequestEnums.signMessageRequest,
      payload: { message: message.message.toString() }
    });

    const { data, error } = response.payload;

    if (error || !data) {
      console.error('Unable to sign message');
      return null;
    }

    if (response.type == CrossWindowProviderResponseEnums.cancelResponse) {
      console.warn('Cancelled the message signing action');
      return null;
    }

    if (data.status !== SignMessageStatusEnum.signed) {
      console.error('Could not sign message');
      return null;
    }

    message.applySignature(Buffer.from(String(data.signature), 'hex'));

    return message;
  }

  async cancelAction() {
    removeAllTransactionsToSign();
    return this.sendPostMessage({
      type: CrossWindowProviderRequestEnums.cancelAction,
      payload: undefined
    });
  }

  isInitialized = () => true;

  isConnected = async () => true;

  getAddress = notInitializedError('getAddress');

  private async waitingForResponse<T extends CrossWindowProviderResponseEnums>(
    action: T
  ): Promise<{
    type: T;
    payload: ReplyWithPostMessagePayloadType<T>;
  }> {
    return await new Promise((resolve) => {
      window.addEventListener(
        'message',
        webviewProviderEventHandler(action, resolve)
      );
    });
  }

  private sendPostMessage = async <T extends CrossWindowProviderRequestEnums>(
    message: PostMessageParamsType<T>
  ): Promise<PostMessageReturnType<T>> => {
    const safeWindow = typeof window !== 'undefined' ? window : ({} as any);

    if (safeWindow.ReactNativeWebView) {
      safeWindow.ReactNativeWebView.postMessage(
        JSON.stringify(message),
        getTargetOrigin()
      );
    } else if (safeWindow.webkit) {
      safeWindow.webkit.messageHandlers.postMessage(
        JSON.stringify(message),
        getTargetOrigin()
      );
    } else if (safeWindow.parent) {
      safeWindow.parent.postMessage(message, getTargetOrigin());
    }

    return await this.waitingForResponse(responseTypeMap[message.type]);
  };
}
