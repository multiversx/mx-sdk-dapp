import { RootState } from '../store';
export declare const toastsSliceSelector: (state: RootState) => import("../slices").ToastsSliceState;
export declare const customToastsSelector: import("reselect").OutputSelector<import("redux").CombinedState<{
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
}>, import("../../types/toasts.types").CustomToastType[], (res: import("../slices").ToastsSliceState) => import("../../types/toasts.types").CustomToastType[]>;
export declare const transactionToastsSelector: import("reselect").OutputSelector<import("redux").CombinedState<{
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
}>, import("../../types/toasts.types").TransactionToastType[], (res: import("../slices").ToastsSliceState) => import("../../types/toasts.types").TransactionToastType[]>;
//# sourceMappingURL=toastsSelectors.d.ts.map