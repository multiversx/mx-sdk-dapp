import { IPlainTransactionObject } from '@multiversx/sdk-core/out/interface';
import {
  CrossWindowProviderRequestEnums,
  CrossWindowProviderResponseEnums
} from '@multiversx/sdk-web-wallet-cross-window-provider/out/types';
import { detectCurrentPlatform } from 'utils/platform/detectCurrentPlatform';
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

export class NewWebviewProvider {
  init = async () => {
    return true;
  };

  login = async () => {
    return true;
  };

  logout = async () => {
    return await this.sendPostMessage({
      type: CrossWindowProviderRequestEnums.logoutRequest
    });
  };

  relogin = async () => {
    return await this.sendPostMessage({
      type: CrossWindowProviderRequestEnums.loginRequest
    });
  };

  signTransactions = async (transactions: IPlainTransactionObject[]) => {
    return await this.sendPostMessage({
      type: CrossWindowProviderRequestEnums.signTransactionsRequest,
      payload: transactions
    });
  };

  signMessage = async (message: string) => {
    return await this.sendPostMessage({
      type: CrossWindowProviderRequestEnums.signMessageRequest,
      payload: message
    });
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
      safeWindow.parent.postMessage(JSON.stringify(message), getTargetOrigin());
    }

    const data = await this.waitingForResponse(responseTypeMap[message.type]);
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
}
