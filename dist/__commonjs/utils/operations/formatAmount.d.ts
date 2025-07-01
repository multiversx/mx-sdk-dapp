export interface FormatAmountType {
    input: string;
    decimals?: number;
    digits?: number;
    showIsLessThanDecimalsLabel?: boolean;
    showLastNonZeroDecimal?: boolean;
    addCommas?: boolean;
}
export declare function formatAmount({ input, decimals, digits, showLastNonZeroDecimal, showIsLessThanDecimalsLabel, addCommas }: FormatAmountType): string;
//# sourceMappingURL=formatAmount.d.ts.map