import { PayloadAction } from '@reduxjs/toolkit';
import { BatchTransactionsResponseType } from 'types';
export interface BatchTransactionsSliceStateType {
    [batchId: string]: BatchTransactionsResponseType;
}
export declare const batchTransactionsSlice: import("@reduxjs/toolkit").Slice<BatchTransactionsSliceStateType, {
    setBatchTransactions: (state: BatchTransactionsSliceStateType, action: PayloadAction<BatchTransactionsResponseType>) => void;
    updateBatchTransactions: (state: BatchTransactionsSliceStateType, action: PayloadAction<BatchTransactionsResponseType>) => void;
    clearBatchTransactions: (state: BatchTransactionsSliceStateType, action: PayloadAction<{
        batchId: string;
    }>) => void;
    clearAllBatchTransactions: () => BatchTransactionsSliceStateType;
}, "batchTransactionsSlice">;
export declare const setBatchTransactions: import("@reduxjs/toolkit").ActionCreatorWithPayload<BatchTransactionsResponseType, string>, updateBatchTransactions: import("@reduxjs/toolkit").ActionCreatorWithPayload<BatchTransactionsResponseType, string>, clearBatchTransactions: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    batchId: string;
}, string>, clearAllBatchTransactions: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>;
declare const _default: import("redux").Reducer<BatchTransactionsSliceStateType, import("redux").AnyAction>;
export default _default;
//# sourceMappingURL=batchTransactionsSlice.d.ts.map