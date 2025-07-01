export interface GetTokenExpirationReturnType {
    isExpired: boolean;
    expiresAt?: number;
    secondsUntilExpires?: number;
}
export declare const getTokenExpiration: (token?: string) => GetTokenExpirationReturnType;
//# sourceMappingURL=getTokenExpiration.d.ts.map