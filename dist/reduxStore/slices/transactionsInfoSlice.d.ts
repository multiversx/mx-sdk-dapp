import { PayloadAction } from '@reduxjs/toolkit';
import { TransactionsDisplayInfoType } from 'types';
export interface StateType {
    [sessionId: string]: TransactionsDisplayInfoType;
}
export interface SetTransactionsInfoPayloadType {
    sessionId: string;
    transactionsDisplayInfo: TransactionsDisplayInfoType;
}
export declare const defaultTransactionErrorMessage = "Transaction failed";
export declare const defaultTransactionSuccessMessage = "Transaction successful";
export declare const defaultTransactionProcessingMessage = "Processing transaction";
export declare const defaultTransactionSubmittedMessage = "Transaction submitted";
export declare const signTransactionsSlice: import("@reduxjs/toolkit").Slice<StateType, {
    setTransactionsDisplayInfo(state: StateType, action: PayloadAction<SetTransactionsInfoPayloadType>): void;
    clearTransactionsInfoForSessionId(state: StateType, action: PayloadAction<string | undefined>): void;
    clearTransactionsInfo: () => StateType;
}, "transactionsInfo">;
export declare const clearTransactionsInfo: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, setTransactionsDisplayInfo: import("@reduxjs/toolkit").ActionCreatorWithPayload<SetTransactionsInfoPayloadType, string>, clearTransactionsInfoForSessionId: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<string | undefined, string>;
declare const _default: import("redux").Reducer<StateType, import("redux").AnyAction>;
export default _default;
//# sourceMappingURL=transactionsInfoSlice.d.ts.map