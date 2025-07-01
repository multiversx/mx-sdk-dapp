/// <reference types="node" />
export declare function logout(callbackUrl?: string, onRedirect?: (callbackUrl?: string) => void, shouldAttemptReLogin?: boolean, options?: {
    shouldBroadcastLogoutAcrossTabs: boolean;
    hasConsentPopup: boolean;
}): Promise<NodeJS.Timeout | import("types").Nullable<string | void>>;
//# sourceMappingURL=logout.d.ts.map