import {
  ACCOUNTS_ENDPOINT,
  BLOCKS_ENDPOINT,
  CODE_ENDPOINT,
  COLLECTIONS_ENDPOINT,
  CONTRACTS_ENDPOINT,
  IDENTITIES_ENDPOINT,
  LOCKED_ACCOUNTS_ENDPOINT,
  LOGS_ENDPOINT,
  MINIBLOCKS_ENDPOINT,
  NFTS_ENDPOINT,
  NODES_ENDPOINT,
  PROVIDERS_ENDPOINT,
  ROLES_ENDPOINT,
  SC_RESULTS_ENDPOINT,
  TOKENS_ENDPOINT,
  TRANSACTIONS_ENDPOINT
} from 'apiCalls/endpoints';

export const explorerUrlBuilder = {
  shard: (shard: number | string) => `/${BLOCKS_ENDPOINT}?shard=${shard}`,
  receiverShard: (shard: number | string) =>
    `/${TRANSACTIONS_ENDPOINT}?receivershard=${shard}`,
  senderShard: (shard: number | string) =>
    `/${TRANSACTIONS_ENDPOINT}?sendershard=${shard}`,
  transactionDetails: (hash: number | string) =>
    `/${TRANSACTIONS_ENDPOINT}/${hash}`,
  transactionDetailsScResults: (hash: string) =>
    `/${TRANSACTIONS_ENDPOINT}/${hash}/${SC_RESULTS_ENDPOINT}`,
  transactionDetailsLogs: (hash: string) =>
    `/${TRANSACTIONS_ENDPOINT}/${hash}/${LOGS_ENDPOINT}`,
  nodeDetails: (publicKey: string) => `/${NODES_ENDPOINT}/${publicKey}`,
  accountDetails: (address: string) => `/${ACCOUNTS_ENDPOINT}/${address}`,
  accountDetailsContractCode: (address: string) =>
    `/${ACCOUNTS_ENDPOINT}/${address}/${CODE_ENDPOINT}`,
  accountDetailsTokens: (address: string) =>
    `/${ACCOUNTS_ENDPOINT}/${address}/${TOKENS_ENDPOINT}`,
  accountDetailsNfts: (address: string) =>
    `/${ACCOUNTS_ENDPOINT}/${address}/${NFTS_ENDPOINT}`,
  accountDetailsScResults: (address: string) =>
    `/${ACCOUNTS_ENDPOINT}/${address}/${SC_RESULTS_ENDPOINT}`,
  accountDetailsContracts: (address: string) =>
    `/${ACCOUNTS_ENDPOINT}/${address}/${CONTRACTS_ENDPOINT}`,
  identityDetails: (id: string) => `/${IDENTITIES_ENDPOINT}/${id}`,
  tokenDetails: (tokenId: string) => `/${TOKENS_ENDPOINT}/${tokenId}`,
  tokenDetailsAccounts: (tokenId: string) =>
    `/${TOKENS_ENDPOINT}/${tokenId}/${ACCOUNTS_ENDPOINT}`,
  tokenDetailsLockedAccounts: (tokenId: string) =>
    `/${TOKENS_ENDPOINT}/${tokenId}/${LOCKED_ACCOUNTS_ENDPOINT}`,
  tokenDetailsRoles: (tokenId: string) =>
    `/${TOKENS_ENDPOINT}/${tokenId}/${ROLES_ENDPOINT}`,
  collectionDetails: (identifier: string) =>
    `/${COLLECTIONS_ENDPOINT}/${identifier}`,
  nftDetails: (identifier: string) => `/${NFTS_ENDPOINT}/${identifier}`,
  providerDetails: (address: string) => `/${PROVIDERS_ENDPOINT}/${address}`,
  providerDetailsTransactions: (address: string) =>
    `/${PROVIDERS_ENDPOINT}/${address}/${TRANSACTIONS_ENDPOINT}`,
  miniblockDetails: (hash: string) => `/${MINIBLOCKS_ENDPOINT}/${hash}`
};
