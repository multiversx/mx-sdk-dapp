export interface LatestBlockHashType {
    hash: string;
    timestamp: number;
}
export declare function getLatestBlockHash(apiUrl: string, blockHashShard?: number, getBlockHash?: () => Promise<string>, noCache?: boolean): Promise<LatestBlockHashType>;
//# sourceMappingURL=getLatestBlockHash.d.ts.map