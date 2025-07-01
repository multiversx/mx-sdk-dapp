import { TokenArgumentType } from 'types/serverTransactions.types';
export interface TransactionActionTokenType {
    token: TokenArgumentType;
    noValue?: boolean;
    showLastNonZeroDecimal?: boolean;
}
export interface TransactionActionTokenReturnType {
    tokenExplorerLink: string;
    tokenFormattedAmount: string | null;
    showFormattedAmount: boolean;
    tokenLinkText: string;
    token: TokenArgumentType;
    showLastNonZeroDecimal?: boolean;
}
export declare function getTransactionActionTokenText({ token, noValue, showLastNonZeroDecimal }: TransactionActionTokenType): TransactionActionTokenReturnType;
//# sourceMappingURL=getTransactionActionTokenText.d.ts.map