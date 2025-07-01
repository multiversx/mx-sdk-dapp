import { PayloadAction } from '@reduxjs/toolkit';
import { CustomTransactionInformation, ServerTransactionType, SignedTransactionsBodyType, SignedTransactionsType, SignedTransactionType, TransactionsToSignType } from 'types';
import { TransactionBatchStatusesEnum, TransactionServerStatusesEnum } from 'types/enums.types';
export interface UpdateSignedTransactionsPayloadType {
    sessionId: string;
    status: TransactionBatchStatusesEnum;
    errorMessage?: string;
    transactions?: SignedTransactionType[];
    customTransactionInformationOverrides?: Partial<CustomTransactionInformation>;
}
export interface MoveTransactionsToSignedStatePayloadType extends SignedTransactionsBodyType {
    sessionId: string;
    customTransactionInformation?: CustomTransactionInformation;
}
export interface UpdateSignedTransactionStatusPayloadType {
    sessionId: string;
    transactionHash: string;
    status: TransactionServerStatusesEnum;
    serverTransaction?: ServerTransactionType;
    errorMessage?: string;
    inTransit?: boolean;
}
export interface TransactionsSliceStateType {
    signedTransactions: SignedTransactionsType;
    transactionsToSign: TransactionsToSignType | null;
    signTransactionsError: string | null;
    signTransactionsCancelMessage: string | null;
    customTransactionInformationForSessionId: {
        [sessionId: string]: CustomTransactionInformation;
    };
}
export declare const transactionsSlice: import("@reduxjs/toolkit").Slice<TransactionsSliceStateType, {
    moveTransactionsToSignedState: (state: TransactionsSliceStateType, action: PayloadAction<MoveTransactionsToSignedStatePayloadType>) => void;
    clearSignedTransaction: (state: TransactionsSliceStateType, action: PayloadAction<string>) => void;
    clearTransactionToSign: (state: TransactionsSliceStateType) => void;
    updateSignedTransaction: (state: TransactionsSliceStateType, action: PayloadAction<SignedTransactionsType>) => void;
    updateSignedTransactions: (state: TransactionsSliceStateType, action: PayloadAction<UpdateSignedTransactionsPayloadType>) => void;
    updateSignedTransactionStatus: (state: TransactionsSliceStateType, action: PayloadAction<UpdateSignedTransactionStatusPayloadType>) => void;
    setTransactionsToSign: (state: TransactionsSliceStateType, action: PayloadAction<TransactionsToSignType>) => void;
    clearAllTransactionsToSign: (state: TransactionsSliceStateType) => void;
    clearAllSignedTransactions: (state: TransactionsSliceStateType) => void;
    setSignTransactionsError: (state: TransactionsSliceStateType, action: PayloadAction<string | null>) => void;
    setSignTransactionsCancelMessage: (state: TransactionsSliceStateType, action: PayloadAction<string | null>) => void;
    updateSignedTransactionsCustomTransactionInformation: (state: TransactionsSliceStateType, action: PayloadAction<{
        sessionId: string;
        customTransactionInformationOverrides: Partial<CustomTransactionInformation>;
    }>) => void;
}, "transactionsSlice">;
export declare const updateSignedTransactionStatus: import("@reduxjs/toolkit").ActionCreatorWithPayload<UpdateSignedTransactionStatusPayloadType, string>, updateSignedTransactions: import("@reduxjs/toolkit").ActionCreatorWithPayload<UpdateSignedTransactionsPayloadType, string>, setTransactionsToSign: import("@reduxjs/toolkit").ActionCreatorWithPayload<TransactionsToSignType, string>, clearAllTransactionsToSign: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, clearAllSignedTransactions: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, clearSignedTransaction: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, string>, clearTransactionToSign: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, setSignTransactionsError: import("@reduxjs/toolkit").ActionCreatorWithPayload<string | null, string>, setSignTransactionsCancelMessage: import("@reduxjs/toolkit").ActionCreatorWithPayload<string | null, string>, moveTransactionsToSignedState: import("@reduxjs/toolkit").ActionCreatorWithPayload<MoveTransactionsToSignedStatePayloadType, string>, updateSignedTransactionsCustomTransactionInformation: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    sessionId: string;
    customTransactionInformationOverrides: Partial<CustomTransactionInformation>;
}, string>;
declare const _default: import("redux").Reducer<TransactionsSliceStateType, import("redux").AnyAction>;
export default _default;
//# sourceMappingURL=transactionsSlice.d.ts.map