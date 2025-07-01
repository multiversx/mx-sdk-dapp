export declare const explorerUrlBuilder: {
    shard: (shard: number | string) => string;
    receiverShard: (shard: number | string) => string;
    senderShard: (shard: number | string) => string;
    transactionDetails: (hash: number | string) => string;
    transactionDetailsScResults: (hash: string) => string;
    transactionDetailsLogs: (hash: string) => string;
    nodeDetails: (publicKey: string) => string;
    accountDetails: (address: string) => string;
    accountDetailsContractCode: (address: string) => string;
    accountDetailsTokens: (address: string) => string;
    accountDetailsNfts: (address: string) => string;
    accountDetailsScResults: (address: string) => string;
    accountDetailsContracts: (address: string) => string;
    identityDetails: (id: string) => string;
    tokenDetails: (tokenId: string) => string;
    tokenDetailsAccounts: (tokenId: string) => string;
    tokenDetailsLockedAccounts: (tokenId: string) => string;
    tokenDetailsRoles: (tokenId: string) => string;
    collectionDetails: (identifier: string) => string;
    nftDetails: (identifier: string) => string;
    providerDetails: (address: string) => string;
    providerDetailsTransactions: (address: string) => string;
    miniblockDetails: (hash: string) => string;
};
//# sourceMappingURL=explorerUrlBuilder.d.ts.map