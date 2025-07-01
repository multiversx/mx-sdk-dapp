import { RootState } from '../store';
export declare const batchTransactionsSelectors: (state: RootState) => import("../slices").BatchTransactionsSliceStateType;
export declare const batchesSelector: import("reselect").OutputSelector<import("redux").CombinedState<{
    account: import("../slices").AccountInfoSliceType;
    dappConfig: import("../../types").DappConfigType;
    loginInfo: import("../slices").LoginInfoStateType;
    modals: import("../slices").ModalsSliceState;
    networkConfig: import("../slices").NetworkConfigStateType;
    signedMessageInfo: import("../slices").SignedMessageInfoStateType;
    toasts: import("../slices").ToastsSliceState;
    transactionsInfo: import("../slices").StateType;
    transactions: import("../slices").TransactionsSliceStateType;
    batchTransactions: import("../slices").BatchTransactionsSliceStateType;
}>, {
    [x: string]: import("../../types").BatchTransactionsResponseType;
}, (res: import("../slices").BatchTransactionsSliceStateType) => {
    [x: string]: import("../../types").BatchTransactionsResponseType;
}>;
//# sourceMappingURL=batchTransactionsSelectors.d.ts.map