import { GetMultiSigLoginTokenType } from './getModifiedLoginToken';
interface SetMultisigLoginToken<T> extends GetMultiSigLoginTokenType {
    signature?: string;
    address: string;
    loginService: T;
}
export declare const processModifiedAccount: <T extends {
    setLoginToken: (loginToken: string) => void;
    setTokenLoginInfo: ({ address, signature }: {
        address: string;
        signature: string;
    }) => string | undefined;
}>({ loginToken: token, extraInfoData, address, signature, loginService }: SetMultisigLoginToken<T>) => Promise<any>;
export {};
//# sourceMappingURL=processModifiedAccount.d.ts.map