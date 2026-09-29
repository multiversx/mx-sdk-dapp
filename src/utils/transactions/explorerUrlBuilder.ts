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

// a `#` anchor (e.g. `${originalTxHash}#${scResultHash}`) is kept as a fragment
const encode = (value: number | string) => {
  const [segment, ...fragment] = String(value).split('#');
  const encodedSegment = encodeURIComponent(segment);

  if (fragment.length === 0) {
    return encodedSegment;
  }

  return `${encodedSegment}#${encodeURIComponent(fragment.join('#'))}`;
};

export const explorerUrlBuilder = {
  shard: (shard: number | string) =>
    `/${BLOCKS_ENDPOINT}?shard=${encode(shard)}`,
  receiverShard: (shard: number | string) =>
    `/${TRANSACTIONS_ENDPOINT}?receivershard=${encode(shard)}`,
  senderShard: (shard: number | string) =>
    `/${TRANSACTIONS_ENDPOINT}?sendershard=${encode(shard)}`,
  transactionDetails: (hash: number | string) =>
    `/${TRANSACTIONS_ENDPOINT}/${encode(hash)}`,
  transactionDetailsScResults: (hash: string) =>
    `/${TRANSACTIONS_ENDPOINT}/${encode(hash)}/${SC_RESULTS_ENDPOINT}`,
  transactionDetailsLogs: (hash: string) =>
    `/${TRANSACTIONS_ENDPOINT}/${encode(hash)}/${LOGS_ENDPOINT}`,
  nodeDetails: (publicKey: string) => `/${NODES_ENDPOINT}/${encode(publicKey)}`,
  accountDetails: (address: string) =>
    `/${ACCOUNTS_ENDPOINT}/${encode(address)}`,
  accountDetailsContractCode: (address: string) =>
    `/${ACCOUNTS_ENDPOINT}/${encode(address)}/${CODE_ENDPOINT}`,
  accountDetailsTokens: (address: string) =>
    `/${ACCOUNTS_ENDPOINT}/${encode(address)}/${TOKENS_ENDPOINT}`,
  accountDetailsNfts: (address: string) =>
    `/${ACCOUNTS_ENDPOINT}/${encode(address)}/${NFTS_ENDPOINT}`,
  accountDetailsScResults: (address: string) =>
    `/${ACCOUNTS_ENDPOINT}/${encode(address)}/${SC_RESULTS_ENDPOINT}`,
  accountDetailsContracts: (address: string) =>
    `/${ACCOUNTS_ENDPOINT}/${encode(address)}/${CONTRACTS_ENDPOINT}`,
  identityDetails: (id: string) => `/${IDENTITIES_ENDPOINT}/${encode(id)}`,
  tokenDetails: (tokenId: string) => `/${TOKENS_ENDPOINT}/${encode(tokenId)}`,
  tokenDetailsAccounts: (tokenId: string) =>
    `/${TOKENS_ENDPOINT}/${encode(tokenId)}/${ACCOUNTS_ENDPOINT}`,
  tokenDetailsLockedAccounts: (tokenId: string) =>
    `/${TOKENS_ENDPOINT}/${encode(tokenId)}/${LOCKED_ACCOUNTS_ENDPOINT}`,
  tokenDetailsRoles: (tokenId: string) =>
    `/${TOKENS_ENDPOINT}/${encode(tokenId)}/${ROLES_ENDPOINT}`,
  collectionDetails: (identifier: string) =>
    `/${COLLECTIONS_ENDPOINT}/${encode(identifier)}`,
  nftDetails: (identifier: string) => `/${NFTS_ENDPOINT}/${encode(identifier)}`,
  providerDetails: (address: string) =>
    `/${PROVIDERS_ENDPOINT}/${encode(address)}`,
  providerDetailsTransactions: (address: string) =>
    `/${PROVIDERS_ENDPOINT}/${encode(address)}/${TRANSACTIONS_ENDPOINT}`,
  miniblockDetails: (hash: string) => `/${MINIBLOCKS_ENDPOINT}/${encode(hash)}`
};
