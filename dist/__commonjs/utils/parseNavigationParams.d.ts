interface ParseNavigationParamsOptionsType {
    search?: string;
    removeParams?: string[];
}
/**
 * @param preserveParams allows extracting params from URL search object
 * @param options.removeParams allows removing params from URL search object
 * @returns the selected params, search object with removed params, and the `clearNavigationHistory` helper
 */
export declare const parseNavigationParams: (preserveParams: string[], options?: ParseNavigationParamsOptionsType) => {
    remainingParams: Record<string, string>;
    params: Record<string, string>;
    clearNavigationHistory: () => void;
};
export {};
//# sourceMappingURL=parseNavigationParams.d.ts.map