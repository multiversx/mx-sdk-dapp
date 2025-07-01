export declare const SAME_SHARD_MAX_TOAST_WIDTH_PERCENT_DECREASE = 75;
export declare const CROSS_SHARD_MAX_TOAST_WIDTH_PERCENT_DECREASE = 25;
export declare const PROGRESS_INTERVAL_DURATION_MS = 100;
interface GetRemainingValuePropsType {
    remaining: number;
    totalSeconds: number;
    isCrossShard: boolean;
}
export declare const getRemainingValue: ({ remaining, totalSeconds, isCrossShard }: GetRemainingValuePropsType) => number;
export {};
//# sourceMappingURL=getRemainingValue.d.ts.map