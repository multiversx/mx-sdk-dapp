export declare const useGetLoginInfo: () => {
    isLoggedIn: boolean;
    loginMethod: import("../../types").LoginMethodsEnum;
    iframeLoginType?: import("@multiversx/sdk-web-wallet-iframe-provider/out/constants").IframeLoginTypes | undefined;
    walletConnectLogin: import("../../reduxStore/slices").WalletConnectLoginType | null;
    ledgerLogin: import("../../reduxStore/slices").LedgerLoginType | null;
    tokenLogin: import("../../types").TokenLoginType | null;
    walletLogin: import("../../reduxStore/slices").LoginInfoType | null;
    extensionLogin: import("../../reduxStore/slices").LoginInfoType | null;
    passkeyLogin: import("../../reduxStore/slices").LoginInfoType | null;
    operaLogin: import("../../reduxStore/slices").LoginInfoType | null;
    crossWindowLogin: import("../../reduxStore/slices").LoginInfoType | null;
    iframeWindowLogin: import("../../reduxStore/slices").LoginInfoType | null;
    webviewLogin: import("../../reduxStore/slices").LoginInfoType | null;
    isLoginSessionInvalid: boolean;
    logoutRoute?: string | undefined;
    isWalletConnectV2Initialized?: boolean | undefined;
};
//# sourceMappingURL=useGetLoginInfo.d.ts.map