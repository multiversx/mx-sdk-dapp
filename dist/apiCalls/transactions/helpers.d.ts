import { GetTransactionsType } from './getTransactions.types';
export declare const getTimeout: (apiTimeout?: string | number) => {
    timeout: number;
} | {
    timeout?: undefined;
};
export declare const getTransactionsParams: ({ sender, receiver, page, transactionSize, condition, withScResults, after, before, search, status, withUsername }: GetTransactionsType) => {
    withScResults: boolean;
    withUsername: boolean | undefined;
    status: import("../../types").TransactionServerStatusesEnum | undefined;
    size?: number | undefined;
    sender: string | undefined;
    receiver: string | undefined;
    condition: "must" | "should";
    after: number | undefined;
    before: number | undefined;
    search: string | undefined;
    from: number;
};
//# sourceMappingURL=helpers.d.ts.map