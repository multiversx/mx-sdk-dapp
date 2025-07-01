interface Options {
    retries: number;
    delay?: number;
}
export declare const retryMultipleTimes: (cb: (...args: any[]) => any, options?: Options) => (...args: any[]) => Promise<any>;
export {};
//# sourceMappingURL=retryMultipleTimes.d.ts.map