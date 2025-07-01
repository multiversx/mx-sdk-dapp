import { Transaction } from '@multiversx/sdk-core';
import { SendBatchTransactionsPropsType, SendSignedBatchTransactionsReturnType, SendSignedTransactionsReturnType } from 'apiCalls/transactions';
export interface TransactionSenderType {
    sendSignedTransactionsAsync?: (signedTransactions: Transaction[]) => Promise<SendSignedTransactionsReturnType>;
    sendSignedBatchTransactionsAsync?: (props: SendBatchTransactionsPropsType) => Promise<SendSignedBatchTransactionsReturnType>;
}
//# sourceMappingURL=transactionSender.types.d.ts.map