export interface DenominateType {
    input: string;
    denomination?: number;
    decimals?: number;
    showIsLessThanDecimalsLabel?: boolean;
    showLastNonZeroDecimal?: boolean;
    addCommas?: boolean;
}
/**
 * !!! This function is deprecated. Please use formatAmount instead.
 * */
export declare function denominate({ input, denomination, decimals, showLastNonZeroDecimal, showIsLessThanDecimalsLabel, addCommas }: DenominateType): string;
//# sourceMappingURL=denominate.d.ts.map