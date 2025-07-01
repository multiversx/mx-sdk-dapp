import { NftEnumType } from 'types/tokens.types';
export interface TokenAssets {
    description: string;
    status: string;
    svgUrl: string;
    website?: string;
    pngUrl?: string;
    social?: any;
    extraTokens?: string[];
    lockedAccounts?: {
        [key: string]: string;
    };
}
export interface TokenMediaType {
    url?: string;
    originalUrl?: string;
    thumbnailUrl?: string;
    fileType?: string;
    fileSize?: number;
}
export interface TokenOptionType {
    tokenLabel: string;
    tokenDecimals: number;
    tokenAvatar: string;
    assets?: TokenAssets;
    type?: NftEnumType;
    error?: string;
    esdtPrice?: number;
    ticker?: string;
    identifier?: string;
    name?: string;
    isLoading?: boolean;
}
export declare function useGetTokenDetails({ tokenId }: {
    tokenId: string;
}): TokenOptionType;
//# sourceMappingURL=useGetTokenDetails.d.ts.map