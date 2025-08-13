import { Message, Transaction } from '@multiversx/sdk-core';
import { IDAppProviderAccount } from '@multiversx/sdk-dapp-utils/out';
import { providerNotInitializedError } from '@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError';
import { WebviewProvider } from '@multiversx/sdk-webview-provider/out/WebviewProvider';
import { logoutAction } from 'reduxStore/commonActions';
import { persistor, store } from 'reduxStore/store';
import { loginWithNativeAuthToken } from 'services/nativeAuth/helpers/loginWithNativeAuthToken';
import { removeAllTransactionsToSign } from 'services/transactions';
import { IDappProvider } from 'types/dappProvider.types';
import { WebViewProviderRequestEnums } from 'types/index';
import { setExternalProviderAsAccountProvider } from '../accountProvider';

// Type definition for valid WebView provider request methods
type ValidWebViewMethod =
  typeof WebViewProviderRequestEnums[keyof typeof WebViewProviderRequestEnums];

// Type guard function to validate WebView provider methods
const isValidWebViewMethod = (method: string): method is ValidWebViewMethod => {
  return Object.values(WebViewProviderRequestEnums).includes(
    method as ValidWebViewMethod
  );
};

/**
 * This is an experimental provider that uses @multiversx/webview-provider to handle the communication between .
 * Please do not use this provider or use it with caution.
 * It will be renamed to WebviewProvider once it is stable.
 * */
export class ExperimentalWebviewProvider implements IDappProvider {
  private static _instance: ExperimentalWebviewProvider;
  private readonly _provider: WebviewProvider;

  static getInstance() {
    if (!ExperimentalWebviewProvider._instance) {
      ExperimentalWebviewProvider._instance = new ExperimentalWebviewProvider();
    }
    return ExperimentalWebviewProvider._instance;
  }

  getAccount(): IDAppProviderAccount | null {
    const data = this._provider.getAccount();
    return { address: data?.address ?? '' };
  }

  setAccount(account: IDAppProviderAccount): void {
    this._provider.setAccount(account);
  }

  constructor() {
    this._provider = WebviewProvider.getInstance({
      resetStateCallback: () => {
        store.dispatch(logoutAction());
        this.logout();
      }
    });
    this._provider.setHandshakeResponseTimeout(2000);
  }

  init = async (version?: string) => {
    return await this._provider.init(version);
  };

  login = async (options?: { token?: string }) => {
    const data = await this._provider.login(options);
    return {
      address: data?.address ?? '',
      signature: data?.signature ?? '',
      accessToken: data?.accessToken ?? ''
    };
  };

  logout = async () => {
    persistor.purge(); // clear the storage
    return await this._provider.logout();
  };

  relogin = async () => {
    const accessToken = await this._provider.relogin();

    if (!accessToken) {
      const errorMessage =
        'Unable to re-login. Missing accessToken from webview provider.';
      console.error(errorMessage);
      throw new Error(errorMessage);
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

      try {
        await this._provider.cancelAction();
      } catch (error) {
        console.error('Error cancelling action:', error);
      }
      return null;
    }

    return response;
  };

  signTransaction = async (transaction: Transaction) => {
    return await this._provider.signTransaction(transaction);
  };

  signMessage = async (message: Message): Promise<Message | null> => {
    return await this._provider.signMessage(message);
  };

  cancelAction = async () => {
    return await this._provider.cancelAction();
  };

  isInitialized = () => {
    return this._provider.isInitialized();
  };

  isConnected = () => {
    return this._provider.isConnected();
  };

  sendCustomRequest = async (payload: {
    request: { method: string; params: any };
  }) => {
    const method = payload.request.method;

    if (!isValidWebViewMethod(method)) {
      const validMethods = Object.values(WebViewProviderRequestEnums);
      const errorMessage = `Invalid method "${method}". Allowed methods are: ${validMethods.join(
        ', '
      )}`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }

    this._provider.sendPostMessage({
      type: method as any,
      payload: payload.request.params
    });
  };

  getAddress = providerNotInitializedError('getAddress');
}
