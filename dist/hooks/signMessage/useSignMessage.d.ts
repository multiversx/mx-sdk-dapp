import { Message } from '@multiversx/sdk-core';
import { SignedMessageStatusesEnum } from 'types';
import { SignMessageType } from 'utils/account/signMessage';
export interface CancelPropsType {
    callbackRoute?: string;
    errorMessage: string;
}
export interface SignedMessageParamsType {
    status: SignedMessageStatusesEnum;
    signature: string;
}
/**
 * Used to sign message with providers
 * 1. Signing simply from dapp without redirect (with providers)
 * 2. Signing from dapp logged in with web wallet (redirect to web wallet)
 * 3. Signing from web wallet as hook after redirect and replying back with signature
 */
export declare const useSignMessage: (options?: {
    hasConsentPopup?: boolean;
}) => {
    onAbort: () => Record<string, string>;
    onCancel: ({ callbackRoute, errorMessage }: CancelPropsType) => void;
    signMessage: (props: SignMessageType) => Promise<import("@multiversx/sdk-dapp-utils/out").Nullable<Message>>;
    sessionId: string;
};
//# sourceMappingURL=useSignMessage.d.ts.map