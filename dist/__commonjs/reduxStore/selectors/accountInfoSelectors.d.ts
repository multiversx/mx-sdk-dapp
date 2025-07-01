export declare const addressSelector: import("reselect").OutputSelector<import("redux").CombinedState<{
    account: import("reduxStore/slices").AccountInfoSliceType;
    dappConfig: import("../../types").DappConfigType;
    loginInfo: import("reduxStore/slices").LoginInfoStateType;
    modals: import("reduxStore/slices").ModalsSliceState;
    networkConfig: import("reduxStore/slices").NetworkConfigStateType;
    signedMessageInfo: import("reduxStore/slices").SignedMessageInfoStateType;
    toasts: import("reduxStore/slices").ToastsSliceState;
    transactionsInfo: import("reduxStore/slices").StateType;
    transactions: import("reduxStore/slices").TransactionsSliceStateType;
    batchTransactions: import("reduxStore/slices").BatchTransactionsSliceStateType;
}>, string, (res: import("reduxStore/slices").AccountInfoSliceType) => string>;
export declare const accountSelector: import("reselect").OutputSelector<import("redux").CombinedState<{
    account: import("reduxStore/slices").AccountInfoSliceType;
    dappConfig: import("../../types").DappConfigType;
    loginInfo: import("reduxStore/slices").LoginInfoStateType;
    modals: import("reduxStore/slices").ModalsSliceState;
    networkConfig: import("reduxStore/slices").NetworkConfigStateType;
    signedMessageInfo: import("reduxStore/slices").SignedMessageInfoStateType;
    toasts: import("reduxStore/slices").ToastsSliceState;
    transactionsInfo: import("reduxStore/slices").StateType;
    transactions: import("reduxStore/slices").TransactionsSliceStateType;
    batchTransactions: import("reduxStore/slices").BatchTransactionsSliceStateType;
}>, import("../../types").AccountType, (res1: import("reduxStore/slices").AccountInfoSliceType, res2: string) => import("../../types").AccountType>;
export declare const accountInfoSelector: import("reselect").OutputSelector<import("redux").CombinedState<{
    account: import("reduxStore/slices").AccountInfoSliceType;
    dappConfig: import("../../types").DappConfigType;
    loginInfo: import("reduxStore/slices").LoginInfoStateType;
    modals: import("reduxStore/slices").ModalsSliceState;
    networkConfig: import("reduxStore/slices").NetworkConfigStateType;
    signedMessageInfo: import("reduxStore/slices").SignedMessageInfoStateType;
    toasts: import("reduxStore/slices").ToastsSliceState;
    transactionsInfo: import("reduxStore/slices").StateType;
    transactions: import("reduxStore/slices").TransactionsSliceStateType;
    batchTransactions: import("reduxStore/slices").BatchTransactionsSliceStateType;
}>, {
    address: string;
    account: import("../../types").AccountType;
    shard?: number | undefined;
    publicKey: string;
    ledgerAccount: import("reduxStore/slices").LedgerAccountType | null;
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
}, (res1: import("reduxStore/slices").AccountInfoSliceType, res2: import("../../types").AccountType) => {
    address: string;
    account: import("../../types").AccountType;
    shard?: number | undefined;
    publicKey: string;
    ledgerAccount: import("reduxStore/slices").LedgerAccountType | null;
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
}>;
export declare const accountBalanceSelector: import("reselect").OutputSelector<import("redux").CombinedState<{
    account: import("reduxStore/slices").AccountInfoSliceType;
    dappConfig: import("../../types").DappConfigType;
    loginInfo: import("reduxStore/slices").LoginInfoStateType;
    modals: import("reduxStore/slices").ModalsSliceState;
    networkConfig: import("reduxStore/slices").NetworkConfigStateType;
    signedMessageInfo: import("reduxStore/slices").SignedMessageInfoStateType;
    toasts: import("reduxStore/slices").ToastsSliceState;
    transactionsInfo: import("reduxStore/slices").StateType;
    transactions: import("reduxStore/slices").TransactionsSliceStateType;
    batchTransactions: import("reduxStore/slices").BatchTransactionsSliceStateType;
}>, string, (res: import("../../types").AccountType) => string>;
export declare const accountNonceSelector: import("reselect").OutputSelector<import("redux").CombinedState<{
    account: import("reduxStore/slices").AccountInfoSliceType;
    dappConfig: import("../../types").DappConfigType;
    loginInfo: import("reduxStore/slices").LoginInfoStateType;
    modals: import("reduxStore/slices").ModalsSliceState;
    networkConfig: import("reduxStore/slices").NetworkConfigStateType;
    signedMessageInfo: import("reduxStore/slices").SignedMessageInfoStateType;
    toasts: import("reduxStore/slices").ToastsSliceState;
    transactionsInfo: import("reduxStore/slices").StateType;
    transactions: import("reduxStore/slices").TransactionsSliceStateType;
    batchTransactions: import("reduxStore/slices").BatchTransactionsSliceStateType;
}>, number, (res: import("../../types").AccountType) => number>;
export declare const shardSelector: import("reselect").OutputSelector<import("redux").CombinedState<{
    account: import("reduxStore/slices").AccountInfoSliceType;
    dappConfig: import("../../types").DappConfigType;
    loginInfo: import("reduxStore/slices").LoginInfoStateType;
    modals: import("reduxStore/slices").ModalsSliceState;
    networkConfig: import("reduxStore/slices").NetworkConfigStateType;
    signedMessageInfo: import("reduxStore/slices").SignedMessageInfoStateType;
    toasts: import("reduxStore/slices").ToastsSliceState;
    transactionsInfo: import("reduxStore/slices").StateType;
    transactions: import("reduxStore/slices").TransactionsSliceStateType;
    batchTransactions: import("reduxStore/slices").BatchTransactionsSliceStateType;
}>, number | undefined, (res: import("reduxStore/slices").AccountInfoSliceType) => number | undefined>;
export declare const ledgerAccountSelector: import("reselect").OutputSelector<import("redux").CombinedState<{
    account: import("reduxStore/slices").AccountInfoSliceType;
    dappConfig: import("../../types").DappConfigType;
    loginInfo: import("reduxStore/slices").LoginInfoStateType;
    modals: import("reduxStore/slices").ModalsSliceState;
    networkConfig: import("reduxStore/slices").NetworkConfigStateType;
    signedMessageInfo: import("reduxStore/slices").SignedMessageInfoStateType;
    toasts: import("reduxStore/slices").ToastsSliceState;
    transactionsInfo: import("reduxStore/slices").StateType;
    transactions: import("reduxStore/slices").TransactionsSliceStateType;
    batchTransactions: import("reduxStore/slices").BatchTransactionsSliceStateType;
}>, import("reduxStore/slices").LedgerAccountType | null, (res: import("reduxStore/slices").AccountInfoSliceType) => import("reduxStore/slices").LedgerAccountType | null>;
export declare const walletConnectAccountSelector: import("reselect").OutputSelector<import("redux").CombinedState<{
    account: import("reduxStore/slices").AccountInfoSliceType;
    dappConfig: import("../../types").DappConfigType;
    loginInfo: import("reduxStore/slices").LoginInfoStateType;
    modals: import("reduxStore/slices").ModalsSliceState;
    networkConfig: import("reduxStore/slices").NetworkConfigStateType;
    signedMessageInfo: import("reduxStore/slices").SignedMessageInfoStateType;
    toasts: import("reduxStore/slices").ToastsSliceState;
    transactionsInfo: import("reduxStore/slices").StateType;
    transactions: import("reduxStore/slices").TransactionsSliceStateType;
    batchTransactions: import("reduxStore/slices").BatchTransactionsSliceStateType;
}>, string | null, (res: import("reduxStore/slices").AccountInfoSliceType) => string | null>;
export declare const isAccountLoadingSelector: import("reselect").OutputSelector<import("redux").CombinedState<{
    account: import("reduxStore/slices").AccountInfoSliceType;
    dappConfig: import("../../types").DappConfigType;
    loginInfo: import("reduxStore/slices").LoginInfoStateType;
    modals: import("reduxStore/slices").ModalsSliceState;
    networkConfig: import("reduxStore/slices").NetworkConfigStateType;
    signedMessageInfo: import("reduxStore/slices").SignedMessageInfoStateType;
    toasts: import("reduxStore/slices").ToastsSliceState;
    transactionsInfo: import("reduxStore/slices").StateType;
    transactions: import("reduxStore/slices").TransactionsSliceStateType;
    batchTransactions: import("reduxStore/slices").BatchTransactionsSliceStateType;
}>, boolean, (res: import("reduxStore/slices").AccountInfoSliceType) => boolean>;
export declare const isAccountLoadingErrorSelector: import("reselect").OutputSelector<import("redux").CombinedState<{
    account: import("reduxStore/slices").AccountInfoSliceType;
    dappConfig: import("../../types").DappConfigType;
    loginInfo: import("reduxStore/slices").LoginInfoStateType;
    modals: import("reduxStore/slices").ModalsSliceState;
    networkConfig: import("reduxStore/slices").NetworkConfigStateType;
    signedMessageInfo: import("reduxStore/slices").SignedMessageInfoStateType;
    toasts: import("reduxStore/slices").ToastsSliceState;
    transactionsInfo: import("reduxStore/slices").StateType;
    transactions: import("reduxStore/slices").TransactionsSliceStateType;
    batchTransactions: import("reduxStore/slices").BatchTransactionsSliceStateType;
}>, string | null, (res: import("reduxStore/slices").AccountInfoSliceType) => string | null>;
export declare const websocketEventSelector: import("reselect").OutputSelector<import("redux").CombinedState<{
    account: import("reduxStore/slices").AccountInfoSliceType;
    dappConfig: import("../../types").DappConfigType;
    loginInfo: import("reduxStore/slices").LoginInfoStateType;
    modals: import("reduxStore/slices").ModalsSliceState;
    networkConfig: import("reduxStore/slices").NetworkConfigStateType;
    signedMessageInfo: import("reduxStore/slices").SignedMessageInfoStateType;
    toasts: import("reduxStore/slices").ToastsSliceState;
    transactionsInfo: import("reduxStore/slices").StateType;
    transactions: import("reduxStore/slices").TransactionsSliceStateType;
    batchTransactions: import("reduxStore/slices").BatchTransactionsSliceStateType;
}>, {
    timestamp: number;
    message: string;
} | null, (res: import("reduxStore/slices").AccountInfoSliceType) => {
    timestamp: number;
    message: string;
} | null>;
export declare const websocketBatchEventSelector: import("reselect").OutputSelector<import("redux").CombinedState<{
    account: import("reduxStore/slices").AccountInfoSliceType;
    dappConfig: import("../../types").DappConfigType;
    loginInfo: import("reduxStore/slices").LoginInfoStateType;
    modals: import("reduxStore/slices").ModalsSliceState;
    networkConfig: import("reduxStore/slices").NetworkConfigStateType;
    signedMessageInfo: import("reduxStore/slices").SignedMessageInfoStateType;
    toasts: import("reduxStore/slices").ToastsSliceState;
    transactionsInfo: import("reduxStore/slices").StateType;
    transactions: import("reduxStore/slices").TransactionsSliceStateType;
    batchTransactions: import("reduxStore/slices").BatchTransactionsSliceStateType;
}>, {
    timestamp: number;
    data: import("../../types").BatchTransactionsWSResponseType;
} | null, (res: import("reduxStore/slices").AccountInfoSliceType) => {
    timestamp: number;
    data: import("../../types").BatchTransactionsWSResponseType;
} | null>;
//# sourceMappingURL=accountInfoSelectors.d.ts.map