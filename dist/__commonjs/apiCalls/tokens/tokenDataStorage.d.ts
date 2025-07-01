export declare let tokenDataStorage: {
    setItem: <T>(key: string, tokenData: T) => Promise<void>;
    getItem: (key: string) => Promise<any>;
    clear: () => Promise<void>;
    removeItem: (key: string) => Promise<void>;
};
export declare const setTokenDataStorage: (tokenDataCacheStorage: typeof tokenDataStorage) => void;
//# sourceMappingURL=tokenDataStorage.d.ts.map