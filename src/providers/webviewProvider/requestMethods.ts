import { PlatformsEnum, WebViewProviderRequestEnums } from "types/index";

export const requestMethods = {
  signTransactions: {
    [PlatformsEnum.ios]: (transactions: any) =>
      (window as any).webkit.messageHandlers.signTransactions.postMessage(
        transactions
      ),
    [PlatformsEnum.reactNative]: (message: any) =>
      (window as any)?.ReactNativeWebView.postMessage(
        JSON.stringify({
          type: WebViewProviderRequestEnums.signTransactionsRequest,
          message,
        })
      ),

    [PlatformsEnum.web]: (message: any) =>
      (window as any)?.postMessage(
        JSON.stringify({
          type: WebViewProviderRequestEnums.signTransactionsRequest,
          message,
        })
      ),
  },
  signMessage: {
    [PlatformsEnum.ios]: (message: string) =>
      (window as any).webkit.messageHandlers.signMessage.postMessage(message),
    [PlatformsEnum.reactNative]: (message: any) =>
      (window as any)?.ReactNativeWebView.postMessage(
        JSON.stringify({
          type: WebViewProviderRequestEnums.signMessageRequest,
          message,
        })
      ),
    [PlatformsEnum.web]: (message: any) =>
      (window as any)?.postMessage(
        JSON.stringify({
          type: WebViewProviderRequestEnums.signMessageRequest,
          message,
        })
      ),
  },
  logout: {
    [PlatformsEnum.ios]: () =>
      (window as any).webkit.messageHandlers.logout.postMessage(),
    [PlatformsEnum.reactNative]: (message: any) =>
      (window as any)?.ReactNativeWebView.postMessage(
        JSON.stringify({
          type: WebViewProviderRequestEnums.logoutRequest,
          message,
        })
      ),
    [PlatformsEnum.web]: (message: any) =>
      (window as any)?.postMessage(
        JSON.stringify({
          type: WebViewProviderRequestEnums.logoutRequest,
          message,
        })
      ),
  },
  login: {
    [PlatformsEnum.ios]: () =>
      (window as any).webkit.messageHandlers.login.postMessage(),
    [PlatformsEnum.reactNative]: (message: any) =>
      (window as any)?.ReactNativeWebView.postMessage(
        JSON.stringify({
          type: WebViewProviderRequestEnums.loginRequest,
          message,
        })
      ),
    [PlatformsEnum.web]: (message: any) =>
      (window as any)?.postMessage(
        JSON.stringify({
          type: WebViewProviderRequestEnums.loginRequest,
          message,
        })
      ),
  },
};
