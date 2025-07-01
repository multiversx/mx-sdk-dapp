export interface AssetType {
    name: string;
    description: string;
    tags: string[];
    iconPng?: string;
    iconSvg?: string;
}
export interface AccountType {
    address: string;
    balance: string;
    nonce: number;
    txCount: number;
    scrCount: number;
    claimableRewards: string;
    code?: string;
    username?: string;
    shard?: number;
    ownerAddress?: string;
    developerReward?: string;
    deployedAt?: number;
    scamInfo?: ScamInfoType;
    isUpgradeable?: boolean;
    isReadable?: boolean;
    isPayable?: boolean;
    isPayableBySmartContract?: boolean;
    assets?: AssetType;
    isGuarded: boolean;
    activeGuardianActivationEpoch?: number;
    activeGuardianAddress?: string;
    activeGuardianServiceUid?: string;
    pendingGuardianActivationEpoch?: number;
    pendingGuardianAddress?: string;
    pendingGuardianServiceUid?: string;
}
export interface ScamInfoType {
    type: string;
    info: string;
}
//# sourceMappingURL=account.types.d.ts.map