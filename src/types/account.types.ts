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
}

export interface ScamInfoType {
  type: string;
  info: string;
}

export interface GuardianDataType {
  activeGuardian?: {
    activationEpoch: number;
    address: string;
    serviceUID: string;
  };
  pendingGuardian?: {
    activationEpoch: number;
    address: string;
    serviceUID: string;
  };
  guarded?: boolean | null;
}
