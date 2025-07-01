import { PayloadAction } from '@reduxjs/toolkit';
import { CustomToastType, TransactionToastType } from 'types/toasts.types';
export interface ToastsSliceState {
    customToasts: CustomToastType[];
    transactionToasts: TransactionToastType[];
}
export declare const toastsSlice: import("@reduxjs/toolkit").Slice<ToastsSliceState, {
    addCustomToast: (state: ToastsSliceState, action: PayloadAction<CustomToastType>) => void;
    removeCustomToast: (state: ToastsSliceState, action: PayloadAction<string>) => void;
    addTransactionToast: (state: ToastsSliceState, action: PayloadAction<string>) => void;
    removeTransactionToast: (state: ToastsSliceState, action: PayloadAction<string>) => void;
}, "toastsSlice">;
export declare const addCustomToast: import("@reduxjs/toolkit").ActionCreatorWithPayload<CustomToastType, string>, removeCustomToast: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, string>, addTransactionToast: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, string>, removeTransactionToast: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, string>;
declare const _default: import("redux").Reducer<ToastsSliceState, import("redux").AnyAction>;
export default _default;
//# sourceMappingURL=toastsSlice.d.ts.map