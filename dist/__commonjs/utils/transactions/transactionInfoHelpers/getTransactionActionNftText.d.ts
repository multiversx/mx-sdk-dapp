import { TokenArgumentType } from 'types/serverTransactions.types';
export interface TransactionActionNftType {
    token: TokenArgumentType;
    noValue?: boolean;
    showLastNonZeroDecimal?: boolean;
}
export interface TransactionActionNftReturnType {
    badgeText: string | null;
    tokenFormattedAmount: string | null;
    tokenExplorerLink: string;
    tokenLinkText: string;
    token: TokenArgumentType;
    showLastNonZeroDecimal?: boolean;
    noValue?: boolean;
}
export declare function getTransactionActionNftText({ token, noValue, showLastNonZeroDecimal }: TransactionActionNftType): TransactionActionNftReturnType;
//# sourceMappingURL=getTransactionActionNftText.d.ts.map