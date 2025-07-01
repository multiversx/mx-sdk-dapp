import { Transaction } from '@multiversx/sdk-core';
interface SendTransactionsToGuardianType {
    transactions: Transaction[];
    hasGuardianScreen?: boolean;
    isGuarded?: boolean;
    callbackRoute?: string;
    sessionId?: string;
    walletAddress?: string;
}
export declare const checkNeedsGuardianSigning: ({ transactions, hasGuardianScreen, callbackRoute, sessionId, walletAddress, isGuarded }: SendTransactionsToGuardianType) => {
    needs2FaSigning: string | false | undefined;
    sendTransactionsToGuardian: () => void;
    guardTransactions: () => Promise<Transaction[] | undefined>;
};
export {};
//# sourceMappingURL=checkNeedsGuardianSigning.d.ts.map