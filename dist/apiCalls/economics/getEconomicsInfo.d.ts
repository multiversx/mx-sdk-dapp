export interface EconomicsInfoType {
    totalSupply: number;
    circulatingSupply: number;
    staked: number;
    price: number;
    marketCap: number;
    apr: number;
    topUpApr: number;
}
export declare function getEconomics(url?: string): Promise<import("axios").AxiosResponse<EconomicsInfoType, any>>;
export declare function getEconomicsInfo(): Promise<EconomicsInfoType | null>;
//# sourceMappingURL=getEconomicsInfo.d.ts.map