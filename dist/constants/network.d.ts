import { EnvironmentsEnum, NetworkType } from 'types';
export declare const fallbackNetworkConfigurations: Record<keyof typeof EnvironmentsEnum, NetworkType>;
declare const DEVNET_CHAIN_ID: string, DEVNET_EGLD_LABEL: string;
declare const TESTNET_CHAIN_ID: string, TESTNET_EGLD_LABEL: string;
declare const MAINNET_CHAIN_ID: string, MAINNET_EGLD_LABEL: string;
export { DEVNET_CHAIN_ID, TESTNET_CHAIN_ID, MAINNET_CHAIN_ID, DEVNET_EGLD_LABEL, TESTNET_EGLD_LABEL, MAINNET_EGLD_LABEL };
export declare const chainIdByEnvironment: Record<EnvironmentsEnum, string>;
export declare const chainIdToEnvironment: Record<string, EnvironmentsEnum>;
export declare const MULTIVERSX_ORIGIN = "multiversx://";
export declare const TIMEOUT = 3000;
//# sourceMappingURL=network.d.ts.map