export interface DecodedLoginTokenType {
    blockHash: string;
    extraInfo?: {
        timestamp: number;
    };
    origin: string;
    ttl: number;
}
export declare const decodeLoginToken: (loginToken: string) => DecodedLoginTokenType | null;
//# sourceMappingURL=decodeLoginToken.d.ts.map