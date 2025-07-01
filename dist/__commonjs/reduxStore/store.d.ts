/// <reference types="typings" />
export declare const store: import("@reduxjs/toolkit").EnhancedStore<any, import("redux").AnyAction, import("@reduxjs/toolkit").MiddlewareArray<[import("redux-thunk").ThunkMiddleware<any, import("redux").AnyAction, undefined>, ...any[]]>>;
export declare const subscription: import("react-redux/lib/utils/Subscription").Subscription;
export declare const persistor: any;
declare const fakeStore: import("@reduxjs/toolkit").EnhancedStore<import("redux").Reducer<import("redux").CombinedState<{
    account: import("reduxStore/slices").AccountInfoSliceType;
    dappConfig: import("../types").DappConfigType;
    loginInfo: import("reduxStore/slices").LoginInfoStateType;
    modals: import("reduxStore/slices").ModalsSliceState;
    networkConfig: import("reduxStore/slices").NetworkConfigStateType;
    signedMessageInfo: import("reduxStore/slices").SignedMessageInfoStateType;
    toasts: import("reduxStore/slices").ToastsSliceState;
    transactionsInfo: import("reduxStore/slices").StateType;
    transactions: import("reduxStore/slices").TransactionsSliceStateType;
    batchTransactions: import("reduxStore/slices").BatchTransactionsSliceStateType;
}>, import("redux").AnyAction>, import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<import("redux").Reducer<import("redux").CombinedState<{
    account: import("reduxStore/slices").AccountInfoSliceType;
    dappConfig: import("../types").DappConfigType;
    loginInfo: import("reduxStore/slices").LoginInfoStateType;
    modals: import("reduxStore/slices").ModalsSliceState;
    networkConfig: import("reduxStore/slices").NetworkConfigStateType;
    signedMessageInfo: import("reduxStore/slices").SignedMessageInfoStateType;
    toasts: import("reduxStore/slices").ToastsSliceState;
    transactionsInfo: import("reduxStore/slices").StateType;
    transactions: import("reduxStore/slices").TransactionsSliceStateType;
    batchTransactions: import("reduxStore/slices").BatchTransactionsSliceStateType;
}>, import("redux").AnyAction>, import("redux").AnyAction, undefined>]>;
export declare type StoreType = typeof fakeStore;
export declare type RootState = ReturnType<ReturnType<typeof fakeStore.getState>>;
export declare type AppDispatch = typeof store.dispatch;
export {};
//# sourceMappingURL=store.d.ts.map