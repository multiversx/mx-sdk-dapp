import { UpdateSignedTransactionsPayloadType, UpdateSignedTransactionStatusPayloadType, MoveTransactionsToSignedStatePayloadType, SetTransactionsInfoPayloadType } from 'reduxStore/slices';
import { CustomTransactionInformation } from 'types';
export declare function setTransactionsToSignedState(payload: MoveTransactionsToSignedStatePayloadType): void;
export declare function updateSignedTransactionsState(payload: UpdateSignedTransactionsPayloadType): void;
export declare function updateSignedTransactionStatusState(payload: UpdateSignedTransactionStatusPayloadType): void;
export declare function setTransactionsDisplayInfoState(payload: SetTransactionsInfoPayloadType): void;
export declare function updateSignedTransactionsCustomTransactionInformationState(payload: {
    sessionId: string;
    customTransactionInformationOverrides: Partial<CustomTransactionInformation>;
}): void;
//# sourceMappingURL=updateSignedTransactions.d.ts.map