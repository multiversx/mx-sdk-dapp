/// <reference types="react" />
import { ActiveLedgerTransactionType, DeviceSignedTransactions, MultiSignTransactionType } from 'types';
export interface UseSignTransactionsWithDevicePropsType {
    onCancel: () => void;
    verifyReceiverScam?: boolean;
    hasGuardianScreen?: boolean;
}
export interface UseSignTransactionsWithDeviceReturnType {
    allTransactions: MultiSignTransactionType[];
    onSignTransaction: () => Promise<void>;
    onNext: () => void;
    onPrev: () => void;
    onAbort: () => void;
    waitingForDevice: boolean;
    isLastTransaction: boolean;
    currentStep: number;
    signedTransactions?: DeviceSignedTransactions;
    setSignedTransactions?: React.Dispatch<React.SetStateAction<DeviceSignedTransactions | undefined>>;
    currentTransaction: ActiveLedgerTransactionType | null;
    callbackRoute?: string;
}
export declare function useSignTransactionsWithDevice(props: UseSignTransactionsWithDevicePropsType): UseSignTransactionsWithDeviceReturnType;
//# sourceMappingURL=useSignTransactionsWithDevice.d.ts.map