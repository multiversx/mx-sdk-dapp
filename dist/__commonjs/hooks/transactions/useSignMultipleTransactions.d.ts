import { Transaction } from '@multiversx/sdk-core';
import { Nullable, ScamInfoType } from 'types';
import { UseSignTransactionsWithDeviceReturnType } from './useSignTransactionsWithDevice';
export interface UseSignMultipleTransactionsPropsType {
    egldLabel: string;
    address: string;
    activeGuardianAddress?: string;
    hasGuardianScreen?: boolean;
    verifyReceiverScam?: boolean;
    isLedger?: boolean;
    transactionsToSign?: Transaction[];
    onCancel?: () => void;
    onSignTransaction: (transaction: Nullable<Transaction>) => Promise<Nullable<Transaction | undefined>>;
    onTransactionsSignSuccess: (transactions: Transaction[]) => void;
    onTransactionsSignError: (errorMessage: string) => void;
    onGetScamAddressData?: ((address: string) => Promise<{
        scamInfo?: ScamInfoType;
    }>) | null;
}
export interface UseSignMultipleTransactionsReturnType extends Omit<UseSignTransactionsWithDeviceReturnType, 'callbackRoute'> {
    shouldContinueWithoutSigning: boolean;
    isFirstTransaction: boolean;
    hasMultipleTransactions: boolean;
}
export declare const useSignMultipleTransactions: ({ isLedger, transactionsToSign, egldLabel, address, activeGuardianAddress, hasGuardianScreen, onCancel, onSignTransaction, onTransactionsSignError, onTransactionsSignSuccess, onGetScamAddressData }: UseSignMultipleTransactionsPropsType) => UseSignMultipleTransactionsReturnType;
//# sourceMappingURL=useSignMultipleTransactions.d.ts.map