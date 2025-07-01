import { Message } from '@multiversx/sdk-core';
import { NativeAuthConfigType, OnProviderLoginType } from 'types';
export declare const useLoginService: (config?: OnProviderLoginType['nativeAuth']) => {
    configuration: {
        origin: string;
        apiAddress: string;
        expirySeconds: number;
        tokenExpirationToastWarningSeconds: number;
    };
    setLoginToken: (loginToken: string) => void;
    getNativeAuthLoginToken: () => Promise<string> | undefined;
    setTokenLoginInfo: ({ address, signature }: {
        address: string;
        signature: string;
    }) => string | undefined;
    refreshNativeAuthTokenLogin: ({ signMessageCallback, nativeAuthClientConfig }: {
        signMessageCallback: (messageToSign: Message, options: Record<any, any>) => Promise<Message>;
        nativeAuthClientConfig?: NativeAuthConfigType | undefined;
    }) => Promise<string | undefined>;
};
//# sourceMappingURL=useLoginService.d.ts.map