import {
  ACCOUNTS_ENDPOINT,
  BLOCKS_ENDPOINT,
  COLLECTIONS_ENDPOINT,
  IDENTITIES_ENDPOINT,
  NFTS_ENDPOINT,
  NODES_ENDPOINT,
  PROVIDERS_ENDPOINT,
  TOKENS_ENDPOINT,
  TRANSACTIONS_ENDPOINT
} from 'apiCalls/endpoints';

export const urlBuilder = {
  shard: (shard: number | string) => `/${BLOCKS_ENDPOINT}?shard=${shard}`,
  receiverShard: (shard: number | string) =>
    `/${TRANSACTIONS_ENDPOINT}?receivershard=${shard}`,
  senderShard: (shard: number | string) =>
    `/${TRANSACTIONS_ENDPOINT}?sendershard=${shard}`,
  transactionDetails: (hash: number | string) =>
    `/${TRANSACTIONS_ENDPOINT}/${hash}`,
  transactionDetailsScResults: (hash: string) =>
    `/${TRANSACTIONS_ENDPOINT}/${hash}/sc-results`,
  transactionDetailsLogs: (hash: string) =>
    `/${TRANSACTIONS_ENDPOINT}/${hash}/logs`,
  nodeDetails: (publicKey: string) => `/${NODES_ENDPOINT}/${publicKey}`,
  accountDetails: (address: string) => `/${ACCOUNTS_ENDPOINT}/${address}`,
  accountDetailsContractCode: (address: string) =>
    `/${ACCOUNTS_ENDPOINT}/${address}/code`,
  accountDetailsTokens: (address: string) =>
    `/${ACCOUNTS_ENDPOINT}/${address}/${TOKENS_ENDPOINT}`,
  accountDetailsNfts: (address: string) =>
    `/${ACCOUNTS_ENDPOINT}/${address}/nfts`,
  accountDetailsScResults: (address: string) =>
    `/${ACCOUNTS_ENDPOINT}/${address}/sc-results`,
  accountDetailsContracts: (address: string) =>
    `/${ACCOUNTS_ENDPOINT}/${address}/contracts`,
  identityDetails: (id: string) => `/${IDENTITIES_ENDPOINT}/${id}`,
  tokenDetails: (tokenId: string) => `/${TOKENS_ENDPOINT}/${tokenId}`,
  tokenDetailsAccounts: (tokenId: string) =>
    `/${TOKENS_ENDPOINT}/${tokenId}/${ACCOUNTS_ENDPOINT}`,
  tokenDetailsLockedAccounts: (tokenId: string) =>
    `/${TOKENS_ENDPOINT}/${tokenId}/locked-accounts`,
  tokenDetailsRoles: (tokenId: string) =>
    `/${TOKENS_ENDPOINT}/${tokenId}/roles`,
  collectionDetails: (identifier: string) =>
    `/${COLLECTIONS_ENDPOINT}/${identifier}`,
  nftDetails: (identifier: string) => `/${NFTS_ENDPOINT}/${identifier}`,
  providerDetails: (address: string) => `/${PROVIDERS_ENDPOINT}/${address}`,
  providerDetailsTransactions: (address: string) =>
    `/${PROVIDERS_ENDPOINT}/${address}/${TRANSACTIONS_ENDPOINT}`
};
