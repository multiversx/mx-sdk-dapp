export type BatchTransactionsWSResponseType = {
  batchId: string;
  txHashes: string[];
};

export enum WebsocketTransactionEventsEnum {
  transactionCompleted = 'transactionCompleted',
  transactionPendingResults = 'transactionPendingResults',
  batchUpdated = 'batchUpdated'
}

export type WebsocketTransactionEventType = {
  eventName: `${WebsocketTransactionEventsEnum}`;
  hashes: string[];
};
