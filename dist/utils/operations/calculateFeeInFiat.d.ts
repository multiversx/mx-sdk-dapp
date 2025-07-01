export interface CalculateFeeInFiatType {
    feeLimit: string;
    egldPriceInUsd: number;
    hideEqualSign?: boolean;
}
export declare const calculateFeeInFiat: ({ feeLimit, egldPriceInUsd, hideEqualSign }: CalculateFeeInFiatType) => string;
//# sourceMappingURL=calculateFeeInFiat.d.ts.map