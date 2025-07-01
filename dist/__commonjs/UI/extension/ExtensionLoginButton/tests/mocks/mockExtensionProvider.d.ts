export declare const ExtensionProvider: {
    getInstance: () => {
        init: () => Promise<boolean>;
        login: ({ token }: {
            token?: string | undefined;
        }) => Promise<{
            address: string;
            signature: string | undefined;
        }>;
        setAddress: () => any;
        logout: () => boolean;
    };
};
//# sourceMappingURL=mockExtensionProvider.d.ts.map