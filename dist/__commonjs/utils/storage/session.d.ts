export declare type SessionKeyType = 'address' | 'shard' | 'toasts' | 'toastProgress';
declare type ExpiresType = number | false;
export interface SetItemType {
    key: SessionKeyType;
    data: any;
    expires: ExpiresType;
}
export declare const setItem: ({ key, data, expires }: SetItemType) => void;
export declare const getItem: (key: SessionKeyType) => any;
export declare const removeItem: (key: SessionKeyType) => void;
export declare const clear: () => void;
export declare const storage: {
    setItem: ({ key, data, expires }: SetItemType) => void;
    getItem: (key: SessionKeyType) => any;
    removeItem: (key: SessionKeyType) => void;
    clear: () => void;
};
export {};
//# sourceMappingURL=session.d.ts.map