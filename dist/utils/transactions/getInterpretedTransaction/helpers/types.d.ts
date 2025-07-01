import { TokenArgumentType } from 'types';
export interface ESDTValueDataType {
    tokenFormattedAmount: string | null;
    tokenExplorerLink: string;
    tokenLinkText: string;
    transactionTokens: TokenArgumentType[];
    token: TokenArgumentType;
    value: string | null;
    decimals: number | null;
    titleText: string;
}
export interface NFTValueDataType extends ESDTValueDataType {
    badgeText: string | null;
}
export interface TokenValueDataType extends ESDTValueDataType {
    showFormattedAmount: boolean;
}
export interface EgldValueDataType {
    value: string;
    formattedValue: string;
    decimals: number;
}
//# sourceMappingURL=types.d.ts.map