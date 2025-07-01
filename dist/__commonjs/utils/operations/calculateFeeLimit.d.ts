export interface CalculateFeeLimitType {
    gasLimit: string;
    gasPrice: string;
    data: string;
    gasPerDataByte: string;
    gasPriceModifier: string;
    chainId: string;
    minGasLimit?: string;
    defaultGasPrice?: string;
}
export declare function calculateFeeLimit({ minGasLimit, gasLimit, gasPrice, data: inputData, gasPerDataByte, gasPriceModifier, defaultGasPrice, chainId }: CalculateFeeLimitType): string;
//# sourceMappingURL=calculateFeeLimit.d.ts.map