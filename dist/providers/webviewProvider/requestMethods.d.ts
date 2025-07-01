export declare type CustomRequestPayloadType = {
    request: {
        method: string;
        params: any;
    };
};
export declare const requestMethods: {
    signTransactions: {
        ios: (transactions: any) => any;
        reactNative: (message: any) => any;
        web: (message: any) => any;
    };
    sendCustomRequest: {
        ios: (payload: CustomRequestPayloadType) => any;
        reactNative: (payload: CustomRequestPayloadType) => any;
        web: (payload: CustomRequestPayloadType) => any;
    };
    signMessage: {
        ios: (message: string) => any;
        reactNative: (message: any) => any;
        web: (message: any) => any;
    };
    logout: {
        ios: () => any;
        reactNative: () => any;
        web: () => any;
    };
    login: {
        ios: () => any;
        reactNative: () => any;
        web: () => any;
    };
};
//# sourceMappingURL=requestMethods.d.ts.map