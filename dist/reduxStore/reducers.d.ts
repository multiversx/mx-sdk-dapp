declare const getRootReducer: (customReducers?: {}) => import("redux").Reducer<import("redux").CombinedState<{
    account: import("./slices/accountInfoSlice").AccountInfoSliceType;
    dappConfig: import("../types").DappConfigType;
    loginInfo: import("./slices/loginInfoSlice").LoginInfoStateType;
    modals: import("./slices/modalsSlice").ModalsSliceState;
    networkConfig: import("./slices/networkConfigSlice").NetworkConfigStateType;
    signedMessageInfo: import("./slices/signedMessageInfoSlice").SignedMessageInfoStateType;
    toasts: import("./slices/toastsSlice").ToastsSliceState;
    transactionsInfo: import("./slices/transactionsInfoSlice").StateType;
    transactions: import("./slices/transactionsSlice").TransactionsSliceStateType;
    batchTransactions: import("./slices/batchTransactionsSlice").BatchTransactionsSliceStateType;
}>, import("redux").AnyAction>;
export default getRootReducer;
//# sourceMappingURL=reducers.d.ts.map