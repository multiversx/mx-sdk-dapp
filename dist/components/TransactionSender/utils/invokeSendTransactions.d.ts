import { SignedTransactionsBodyType } from 'types';
import { TransactionSenderType } from '../types/transactionSender.types';
export declare const invokeSendTransactions: ({ session, sessionId, clearSignInfo, sendSignedBatchTransactionsAsync, sendSignedTransactionsAsync }: {
    session: SignedTransactionsBodyType;
    sessionId: string;
    clearSignInfo?: (() => void) | undefined;
} & TransactionSenderType) => Promise<string[] | null | undefined>;
//# sourceMappingURL=invokeSendTransactions.d.ts.map