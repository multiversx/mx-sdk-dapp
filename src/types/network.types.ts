export interface BaseNetworkType {
  id: string;
  chainId: string;
  name: string;
  egldLabel: string;
  decimals: string;
  digits: string;
  gasPerDataByte: string;
  walletConnectDeepLink: string;
  walletAddress: string;
  apiAddress: string;
  extrasApiAddress?: string;
  explorerAddress: string;
  apiTimeout: string;
  walletConnectV2ProjectId?: string;
  walletConnectV2Options?: Record<string, any>;
  xAliasAddress?: string;
  roundDuration: number;
  metamaskSnapWalletAddress?: string;
  websocketUrl?: string;
  gasStationMetadata?: {
    fast: number;
    faster: number;
    excellentJustLikeMoveBalance?: number;
  }[];
}

export interface AccountInfoSliceNetworkType extends BaseNetworkType {
  walletConnectBridgeAddress: string;
  walletConnectV2RelayAddress: string;
  customWalletAddress?: string;
}

export interface NetworkType extends BaseNetworkType {
  walletConnectBridgeAddresses: string[];
  walletConnectV2RelayAddresses: string[];
}

export interface CustomNetworkType {
  id?: string;
  chainId?: string;
  name?: string;
  egldLabel?: string;
  decimals?: string;
  digits?: string;
  gasPerDataByte?: string;
  walletConnectDeepLink?: string;
  walletConnectBridgeAddresses?: string[];
  walletAddress?: string;
  apiAddress?: string;
  /**
   * If set, allow editing gasPrice
   */
  ppuForGasPrice?: {
    fast: number;
    faster: number;
  };
  explorerAddress?: string;
  skipFetchFromServer?: boolean;
  apiTimeout?: string | number;
  walletConnectV2ProjectId?: string;
  walletConnectV2Options?: any;
  metamaskSnapWalletAddress?: string;
  websocketUrl?: string;
}

export interface ApiNetworkConfigType {
  erd_chain_id: string;
  erd_denomination: number;
  erd_gas_per_data_byte: number;
  erd_gas_price_modifier: string;
  erd_latest_tag_software_version: string;
  erd_max_gas_per_transaction: number;
  erd_meta_consensus_group_size: number;
  erd_min_gas_limit: number;
  erd_min_gas_price: number;
  erd_min_transaction_version: number;
  erd_num_metachain_nodes: number;
  erd_num_nodes_in_shard: number;
  erd_num_shards_without_meta: number;
  erd_rewards_top_up_gradient_point: string;
  erd_round_duration: number;
  erd_rounds_per_epoch: number;
  erd_shard_consensus_group_size: number;
  erd_start_time: number;
  erd_top_up_factor: string;
}
