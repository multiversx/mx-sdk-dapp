import { SignableMessage, Transaction } from '@multiversx/sdk-core';
import { providerNotInitializedError } from '@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError';
import {
  CrossWindowProviderRequestEnums,
  CrossWindowProviderResponseEnums
} from '@multiversx/sdk-web-wallet-cross-window-provider/out/types';
import { WebviewProvider } from '@multiversx/sdk-webview-provider/out/WebviewProvider';
import { webviewProviderEventHandler } from '@multiversx/sdk-webview-provider/out/webviewProviderEventHandler';
import { logoutAction } from 'reduxStore/commonActions';
import { store } from 'reduxStore/store';
import { loginWithNativeAuthToken } from 'services/nativeAuth/helpers/loginWithNativeAuthToken';
import { removeAllTransactionsToSign } from 'services/transactions';
import { IDappProvider } from 'types/dappProvider.types';
import { logout as logoutFromDapp } from 'utils/logout';
import { setExternalProviderAsAccountProvider } from '../accountProvider';

/**
 * This is an experimental provider that uses `postMessage` to communicate with the parent.
 * Please do not use this provider or use it with caution.
 * It will be renamed to WebviewProvider once it is stable.
 * */
export class ExperimentalWebviewProvider implements IDappProvider {
  private static instance: ExperimentalWebviewProvider;
  private _provider = WebviewProvider.getInstance();

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
              this._provider.sendPostMessage({
                type: CrossWindowProviderRequestEnums.finalizeResetStateRequest,
                payload: undefined
              });
            }, 500);
          }
        }
      )
    );
  };

  logout = async () => {
    const response = await this._provider.logout();
    await logoutFromDapp();
    return response;
  };

  relogin = async () => {
    const accessToken = await this._provider.relogin();

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
    const response = await this._provider.signTransactions(transactionsToSign);

    if (!response) {
      removeAllTransactionsToSign();
      this._provider.cancelAction();
      return null;
    }

    return response;
  };

  signTransaction = async (transaction: Transaction) => {
    return await this._provider.signTransaction(transaction);
  };

  signMessage = async (
    message: SignableMessage
  ): Promise<SignableMessage | null> => {
    return await this._provider.signMessage(message);
  };

  isConnected = this._provider.isConnected;

  isInitialized = this._provider.isInitialized;

  getAddress = providerNotInitializedError('getAddress');
}
