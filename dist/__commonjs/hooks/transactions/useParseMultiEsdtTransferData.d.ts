import { Transaction } from '@multiversx/sdk-core';
import { MultiSignTransactionType, TransactionDataTokenType, TransactionsDataTokensType } from 'types';
interface UseParseMultiEsdtTransferDataPropsType {
    transactions?: Transaction[];
}
interface UseParseMultiEsdtTransferDataReturnType {
    parsedTransactionsByDataField: TransactionsDataTokensType;
    getTxInfoByDataField: (data: string, multiTransactionData?: string) => TransactionDataTokenType;
    allTransactions: MultiSignTransactionType[];
}
export declare function useParseMultiEsdtTransferData({ transactions }: UseParseMultiEsdtTransferDataPropsType): UseParseMultiEsdtTransferDataReturnType;
export {};
//# sourceMappingURL=useParseMultiEsdtTransferData.d.ts.map