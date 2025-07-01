import { RootState } from '../store';
export declare const dappConfigSelector: (state: RootState) => import("../../types").DappConfigType;
export declare const shouldUseWebViewProviderSelector: import("reselect").OutputSelector<import("redux").CombinedState<{
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
}>, boolean | undefined, (res: import("../../types").DappConfigType) => boolean | undefined>;
//# sourceMappingURL=dappConfigSelector.d.ts.map