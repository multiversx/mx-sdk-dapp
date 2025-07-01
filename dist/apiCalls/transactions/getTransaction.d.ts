import { ServerTransactionType } from 'types/serverTransactions.types';
export interface GetTransactionType {
    apiAddress: string;
    apiTimeout?: string | number;
    hash: string;
}
export declare const getTransaction: ({ hash, apiAddress, apiTimeout }: GetTransactionType) => Promise<import("axios").AxiosResponse<ServerTransactionType[], any>>;
//# sourceMappingURL=getTransaction.d.ts.map