import { RootState } from 'reduxStore/store';
import { TransactionsDisplayInfoType } from 'types';
export declare const transactionsInfoSelectors: (state: RootState) => import("reduxStore/slices").StateType;
export declare const transactionDisplayInfoSelector: import("reselect").OutputParametricSelector<import("redux").CombinedState<{
    account: import("reduxStore/slices").AccountInfoSliceType;
    dappConfig: import("types").DappConfigType;
    loginInfo: import("reduxStore/slices").LoginInfoStateType;
    modals: import("reduxStore/slices").ModalsSliceState;
    networkConfig: import("reduxStore/slices").NetworkConfigStateType;
    signedMessageInfo: import("reduxStore/slices").SignedMessageInfoStateType;
    toasts: import("reduxStore/slices").ToastsSliceState;
    transactionsInfo: import("reduxStore/slices").StateType;
    transactions: import("reduxStore/slices").TransactionsSliceStateType;
    batchTransactions: import("reduxStore/slices").BatchTransactionsSliceStateType;
}>, string | null, any, (res1: TransactionsDisplayInfoType, res2: string | null) => any>;
//# sourceMappingURL=transactionsInfoSelectors.d.ts.map