import { Transaction } from '@multiversx/sdk-core';
import { CustomTransactionInformation, SignedTransactionsType } from '../../types';
import { RootState } from '../store';
export interface TransactionsToSignReturnType {
    callbackRoute?: string;
    sessionId: string;
    transactions: Transaction[];
    customTransactionInformation: CustomTransactionInformation;
}
export declare const transactionsSelectors: (state: RootState) => import("../slices").TransactionsSliceStateType;
export declare const signedTransactionsSelector: import("reselect").OutputSelector<import("redux").CombinedState<{
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
}>, SignedTransactionsType, (res: import("../slices").TransactionsSliceStateType) => SignedTransactionsType>;
export declare const signTransactionsErrorSelector: import("reselect").OutputSelector<import("redux").CombinedState<{
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
}>, string | null, (res: import("../slices").TransactionsSliceStateType) => string | null>;
export declare const signTransactionsCancelMessageSelector: import("reselect").OutputSelector<import("redux").CombinedState<{
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
}>, string | null, (res: import("../slices").TransactionsSliceStateType) => string | null>;
export declare const pendingSignedTransactionsSelector: import("reselect").OutputSelector<import("redux").CombinedState<{
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
}>, SignedTransactionsType, (res: SignedTransactionsType) => SignedTransactionsType>;
export declare const successfulTransactionsSelector: import("reselect").OutputSelector<import("redux").CombinedState<{
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
}>, SignedTransactionsType, (res: SignedTransactionsType) => SignedTransactionsType>;
export declare const failedTransactionsSelector: import("reselect").OutputSelector<import("redux").CombinedState<{
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
}>, SignedTransactionsType, (res: SignedTransactionsType) => SignedTransactionsType>;
export declare const timedOutTransactionsSelector: import("reselect").OutputSelector<import("redux").CombinedState<{
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
}>, SignedTransactionsType, (res: SignedTransactionsType) => SignedTransactionsType>;
export declare const transactionsToSignSelector: import("reselect").OutputSelector<import("redux").CombinedState<{
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
}>, TransactionsToSignReturnType | null, (res: import("../slices").TransactionsSliceStateType) => TransactionsToSignReturnType | null>;
export declare const transactionStatusSelector: import("reselect").OutputParametricSelector<import("redux").CombinedState<{
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
}>, string | null, import("../../types").SignedTransactionsBodyType, (res1: SignedTransactionsType, res2: string | null) => import("../../types").SignedTransactionsBodyType>;
//# sourceMappingURL=transactionsSelectors.d.ts.map