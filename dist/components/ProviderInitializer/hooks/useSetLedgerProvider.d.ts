import { HWProvider } from '@multiversx/sdk-hw-provider';
declare type SetLedgerProviderType = {
    isRelogin?: boolean;
};
export declare const useSetLedgerProvider: () => {
    setLedgerProvider: (props?: SetLedgerProviderType) => Promise<HWProvider | null | undefined>;
    ledgerData: {
        version: string;
        dataEnabled: boolean;
    } | undefined;
};
export {};
//# sourceMappingURL=useSetLedgerProvider.d.ts.map