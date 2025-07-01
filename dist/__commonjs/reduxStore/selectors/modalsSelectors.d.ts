import { RootState } from '../store';
export declare const modalsSliceSelector: (state: RootState) => import("../slices").ModalsSliceState;
export declare const txSubmittedModalSelector: import("reselect").OutputSelector<import("redux").CombinedState<{
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
}>, import("../slices").TxSubmittedModal | undefined, (res: import("../slices").ModalsSliceState) => import("../slices").TxSubmittedModal | undefined>;
export declare const notificationModalSelector: import("reselect").OutputSelector<import("redux").CombinedState<{
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
}>, import("../slices").NotificationModal | undefined, (res: import("../slices").ModalsSliceState) => import("../slices").NotificationModal | undefined>;
//# sourceMappingURL=modalsSelectors.d.ts.map