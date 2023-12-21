import { PlatformsEnum, WebViewProviderRequestEnums } from 'types/index';
import { targetOrigin } from './webviewProvider';

export type CustomRequestPayloadType = {
  request: { method: string; params: any };
};

export const requestMethods = {
  signTransactions: {
    [PlatformsEnum.ios]: (transactions: any) =>
      (window as any).webkit.messageHandlers.signTransactions.postMessage(
        transactions,
        targetOrigin
      ),
    [PlatformsEnum.reactNative]: (message: any) =>
      (window as any)?.ReactNativeWebView.postMessage(
        JSON.stringify({
          type: WebViewProviderRequestEnums.signTransactionsRequest,
          message
        })
      ),

    [PlatformsEnum.web]: (message: any) =>
      (window as any)?.postMessage(
        JSON.stringify({
          type: WebViewProviderRequestEnums.signTransactionsRequest,
          message
        }),
        targetOrigin
      )
  },
  sendCustomRequest: {
    [PlatformsEnum.ios]: (payload: CustomRequestPayloadType) =>
      (window as any).webkit.messageHandlers.signMessage.postMessage({
        type: payload.request.method,
        payload: payload.request.params
      }),
    [PlatformsEnum.reactNative]: (payload: CustomRequestPayloadType) =>
      (window as any)?.ReactNativeWebView.postMessage(
        JSON.stringify({
          type: payload.request.method,
          payload: payload.request.params
        })
      ),
    [PlatformsEnum.web]: (payload: CustomRequestPayloadType) =>
      (window as any)?.postMessage(
        JSON.stringify({
          type: payload.request.method,
          payload: payload.request.params
        }),
        targetOrigin
      )
  },

  signMessage: {
    [PlatformsEnum.ios]: (message: string) =>
      (window as any).webkit.messageHandlers.signMessage.postMessage(message),
    [PlatformsEnum.reactNative]: (message: any) =>
      (window as any)?.ReactNativeWebView.postMessage(
        JSON.stringify({
          type: WebViewProviderRequestEnums.signMessageRequest,
          message
        })
      ),
    [PlatformsEnum.web]: (message: any) =>
      (window as any)?.postMessage(
        JSON.stringify({
          type: WebViewProviderRequestEnums.signMessageRequest,
          message
        }),
        targetOrigin
      )
  },
  logout: {
    [PlatformsEnum.ios]: () =>
      (window as any).webkit.messageHandlers.logout.postMessage(),
    [PlatformsEnum.reactNative]: () =>
      (window as any)?.ReactNativeWebView.postMessage(
        JSON.stringify({
          type: WebViewProviderRequestEnums.logoutRequest
        })
      ),
    [PlatformsEnum.web]: () =>
      (window as any)?.postMessage(
        JSON.stringify({
          type: WebViewProviderRequestEnums.logoutRequest
        }),
        targetOrigin
      )
  },
  login: {
    [PlatformsEnum.ios]: () =>
      (window as any).webkit.messageHandlers.login.postMessage(),
    [PlatformsEnum.reactNative]: () =>
      (window as any)?.ReactNativeWebView.postMessage(
        JSON.stringify({
          type: WebViewProviderRequestEnums.loginRequest
        })
      ),
    [PlatformsEnum.web]: () =>
      (window as any)?.postMessage(
        JSON.stringify({
          type: WebViewProviderRequestEnums.loginRequest
        }),
        targetOrigin
      )
  }
};
