export declare const useGetAccountInfo: () => {
    address: string;
    account: import("../../types").AccountType;
    shard?: number | undefined;
    publicKey: string;
    ledgerAccount: import("../../reduxStore/slices").LedgerAccountType | null;
    walletConnectAccount: string | null;
    isAccountLoading: boolean;
    websocketEvent: {
        timestamp: number;
        message: string;
    } | null;
    websocketBatchEvent: {
        timestamp: number;
        data: import("../../types").BatchTransactionsWSResponseType;
    } | null;
    accountLoadingError: string | null;
};
//# sourceMappingURL=useGetAccountInfo.d.ts.map