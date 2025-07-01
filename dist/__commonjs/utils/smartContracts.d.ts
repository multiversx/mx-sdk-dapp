export declare const ESDTTransferTypes: string[];
export declare function isContract(receiver: string, sender?: string, data?: string): boolean;
export declare function isSelfESDTContract(receiver: string, sender?: string, data?: string): boolean;
export declare function getAddressFromDataField({ receiver, data }: {
    receiver: string;
    data: string;
}): string | undefined;
//# sourceMappingURL=smartContracts.d.ts.map