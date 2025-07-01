import { NativeAuthConfigType } from 'types';
import { LatestBlockHashType } from './helpers/getLatestBlockHash';
interface NativeAuthInitType {
    extraInfo?: {
        [key: string]: string;
    };
    latestBlockInfo?: LatestBlockHashType;
    noCache?: boolean;
}
export declare const nativeAuth: (config?: NativeAuthConfigType) => {
    getNativeAuthConfig: (config?: true | NativeAuthConfigType | undefined) => {
        origin: string;
        apiAddress: string;
        expirySeconds: number;
        tokenExpirationToastWarningSeconds: number;
    };
    initialize: (initProps?: NativeAuthInitType) => Promise<string>;
    getToken: ({ address, token, signature }: {
        address: string;
        token: string;
        signature: string;
    }) => string;
    getTokenExpiration: (token?: string | undefined) => import("./methods").GetTokenExpirationReturnType;
};
export {};
//# sourceMappingURL=nativeAuth.d.ts.map