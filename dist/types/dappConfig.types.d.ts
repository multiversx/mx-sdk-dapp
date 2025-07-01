export declare type DappConfigType = {
    logoutRoute?: string;
    shouldUseWebViewProvider?: boolean;
    cancelTransactionToastDuration?: number;
    /**
     * @param {boolean} shouldFetchWalletUrlOnLoad if set,
     * `useParseSignedTransactions` will read the walletUrl
     * at application boot instead of hook mount time
     */
    shouldFetchWalletUrlOnLoad?: boolean;
    isSSR?: boolean;
};
//# sourceMappingURL=dappConfig.types.d.ts.map