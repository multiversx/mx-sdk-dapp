import { ServerTransactionType } from 'types';
import { GetTransactionsByHashesReturnType, PendingTransactionsType } from 'types/transactions.types';
export declare const getTransactionsByHashes: (pendingTransactions: PendingTransactionsType) => Promise<GetTransactionsByHashesReturnType>;
export declare const getTransactionByHashPromise: (hash: string) => Promise<import("axios").AxiosResponse<ServerTransactionType, any>>;
//# sourceMappingURL=getTransactionsByHashes.d.ts.map