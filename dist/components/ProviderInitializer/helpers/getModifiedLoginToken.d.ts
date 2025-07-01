export interface GetMultiSigLoginTokenType {
    loginToken?: string;
    extraInfoData: {
        multisig?: string;
        impersonate?: string;
    };
}
export declare const getModifiedLoginToken: ({ loginToken, extraInfoData }: GetMultiSigLoginTokenType) => Promise<string | null>;
//# sourceMappingURL=getModifiedLoginToken.d.ts.map