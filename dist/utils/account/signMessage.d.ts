import { Message } from '@multiversx/sdk-core';
export interface SignMessageType {
    message: string;
    callbackRoute?: string;
    options?: {
        hasConsentPopup?: boolean;
    };
}
export declare const signMessage: ({ message, callbackRoute, options }: SignMessageType) => Promise<import("@multiversx/sdk-dapp-utils/out").Nullable<Message>>;
//# sourceMappingURL=signMessage.d.ts.map