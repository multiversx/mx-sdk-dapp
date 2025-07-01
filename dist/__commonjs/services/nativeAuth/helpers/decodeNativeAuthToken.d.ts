import { DecodedLoginTokenType } from './decodeLoginToken';
interface DecodedNativeAuthTokenType extends DecodedLoginTokenType {
    address: string;
    body: string;
    signature: string;
}
export declare const decodeNativeAuthToken: (accessToken?: string) => DecodedNativeAuthTokenType | null;
export {};
//# sourceMappingURL=decodeNativeAuthToken.d.ts.map