export declare const OperaProvider: {
    getInstance: () => {
        init: () => Promise<boolean>;
        login: ({ token }: {
            token?: string | undefined;
        }) => Promise<{
            address: string;
        }>;
        setAddress: () => any;
        logout: () => boolean;
    };
};
//# sourceMappingURL=mockOperaProvider.d.ts.map