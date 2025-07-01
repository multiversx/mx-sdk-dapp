import { ReactNode } from 'react';
import { ServerTransactionType } from 'types/serverTransactions.types';
import { WithClassnameType } from '../types';
export interface TransactionsTableType extends WithClassnameType {
    transactions: ServerTransactionType[];
    title?: ReactNode;
    directionCol?: boolean;
    showLockedAccounts?: boolean;
}
export declare const TransactionsTable: (props: TransactionsTableType) => JSX.Element;
//# sourceMappingURL=TransactionsTable.d.ts.map