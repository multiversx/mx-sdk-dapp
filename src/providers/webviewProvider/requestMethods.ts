import { PlatformsEnum, WebViewProviderRequestEnums } from 'types/index';
import { getTargetOrigin } from './webviewProvider';

export const requestMethods = {
  signTransactions: {
    [PlatformsEnum.ios]: (transactions: any) =>
      (window as any).webkit.messageHandlers.signTransactions.postMessage(
        transactions,
        getTargetOrigin()
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
        getTargetOrigin()
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
        getTargetOrigin()
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
        getTargetOrigin()
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
        getTargetOrigin()
      )
  }
};
