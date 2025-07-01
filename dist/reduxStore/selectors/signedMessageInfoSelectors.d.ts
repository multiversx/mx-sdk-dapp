import { SignedMessageInfoStateType } from 'reduxStore/slices';
import { RootState } from '../store';
export declare const signedMessageInfoSliceSelector: (state: RootState) => SignedMessageInfoStateType;
export declare const signedMessageIsSigningSelector: import("reselect").OutputSelector<import("redux").CombinedState<{
    account: import("reduxStore/slices").AccountInfoSliceType;
    dappConfig: import("../../types").DappConfigType;
    loginInfo: import("reduxStore/slices").LoginInfoStateType;
    modals: import("reduxStore/slices").ModalsSliceState;
    networkConfig: import("reduxStore/slices").NetworkConfigStateType;
    signedMessageInfo: SignedMessageInfoStateType;
    toasts: import("reduxStore/slices").ToastsSliceState;
    transactionsInfo: import("reduxStore/slices").StateType;
    transactions: import("reduxStore/slices").TransactionsSliceStateType;
    batchTransactions: import("reduxStore/slices").BatchTransactionsSliceStateType;
}>, boolean, (res: SignedMessageInfoStateType) => boolean>;
export declare const signedMessageErrorSelector: import("reselect").OutputSelector<import("redux").CombinedState<{
    account: import("reduxStore/slices").AccountInfoSliceType;
    dappConfig: import("../../types").DappConfigType;
    loginInfo: import("reduxStore/slices").LoginInfoStateType;
    modals: import("reduxStore/slices").ModalsSliceState;
    networkConfig: import("reduxStore/slices").NetworkConfigStateType;
    signedMessageInfo: SignedMessageInfoStateType;
    toasts: import("reduxStore/slices").ToastsSliceState;
    transactionsInfo: import("reduxStore/slices").StateType;
    transactions: import("reduxStore/slices").TransactionsSliceStateType;
    batchTransactions: import("reduxStore/slices").BatchTransactionsSliceStateType;
}>, string | undefined, (res: SignedMessageInfoStateType) => string | undefined>;
export declare const lastSignedSessionSelector: import("reselect").OutputSelector<import("redux").CombinedState<{
    account: import("reduxStore/slices").AccountInfoSliceType;
    dappConfig: import("../../types").DappConfigType;
    loginInfo: import("reduxStore/slices").LoginInfoStateType;
    modals: import("reduxStore/slices").ModalsSliceState;
    networkConfig: import("reduxStore/slices").NetworkConfigStateType;
    signedMessageInfo: SignedMessageInfoStateType;
    toasts: import("reduxStore/slices").ToastsSliceState;
    transactionsInfo: import("reduxStore/slices").StateType;
    transactions: import("reduxStore/slices").TransactionsSliceStateType;
    batchTransactions: import("reduxStore/slices").BatchTransactionsSliceStateType;
}>, import("reduxStore/slices").SignedSessionType, (res: SignedMessageInfoStateType) => import("reduxStore/slices").SignedSessionType>;
export declare const lastSignedSessionId: import("reselect").OutputSelector<import("redux").CombinedState<{
    account: import("reduxStore/slices").AccountInfoSliceType;
    dappConfig: import("../../types").DappConfigType;
    loginInfo: import("reduxStore/slices").LoginInfoStateType;
    modals: import("reduxStore/slices").ModalsSliceState;
    networkConfig: import("reduxStore/slices").NetworkConfigStateType;
    signedMessageInfo: SignedMessageInfoStateType;
    toasts: import("reduxStore/slices").ToastsSliceState;
    transactionsInfo: import("reduxStore/slices").StateType;
    transactions: import("reduxStore/slices").TransactionsSliceStateType;
    batchTransactions: import("reduxStore/slices").BatchTransactionsSliceStateType;
}>, string, (res: SignedMessageInfoStateType) => string>;
//# sourceMappingURL=signedMessageInfoSelectors.d.ts.map