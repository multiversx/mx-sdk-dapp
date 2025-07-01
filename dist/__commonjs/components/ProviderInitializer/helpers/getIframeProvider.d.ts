import { IframeLoginTypes, IframeProvider } from 'lib/sdkWebWalletIframeProvider';
interface GetIframeProviderPropsType {
    address: string;
    walletUrl: string;
    loginType?: IframeLoginTypes;
}
export declare function getIframeProvider({ address, walletUrl, loginType }: GetIframeProviderPropsType): Promise<IframeProvider | null>;
export {};
//# sourceMappingURL=getIframeProvider.d.ts.map