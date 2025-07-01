/// <reference types="redux-persist/types/persistreducer" />
export declare const sessionStorageReducers: {
    toasts: import("redux").Reducer<import("reduxStore/slices").ToastsSliceState & import("redux-persist/es/persistReducer").PersistPartial, import("redux").AnyAction>;
    transactions: import("redux").Reducer<import("reduxStore/slices").TransactionsSliceStateType & import("redux-persist/es/persistReducer").PersistPartial, import("redux").AnyAction>;
    transactionsInfo: import("redux").Reducer<import("reduxStore/slices").StateType & import("redux-persist/es/persistReducer").PersistPartial, import("redux").AnyAction>;
    batchTransactions: import("redux").Reducer<import("reduxStore/slices").BatchTransactionsSliceStateType & import("redux-persist/es/persistReducer").PersistPartial, import("redux").AnyAction>;
    signedMessageInfo: import("redux").Reducer<import("reduxStore/slices").SignedMessageInfoStateType & import("redux-persist/es/persistReducer").PersistPartial, import("redux").AnyAction>;
};
declare const persistedReducer: import("redux").Reducer<any, import("redux").AnyAction>;
export default persistedReducer;
//# sourceMappingURL=persistedRootReducer.d.ts.map