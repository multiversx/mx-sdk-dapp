export enum TransactionServerStatusesEnum {
  'pending' = 'pending',
  'fail' = 'fail',
  'invalid' = 'invalid',
  'success' = 'success',
  'executed' = 'executed'
}

export enum TransactionBatchStatusesEnum {
  'signed' = 'signed',
  'cancelled' = 'cancelled',
  'success' = 'success',
  'sent' = 'sent',
  'fail' = 'fail',
  'timedOut' = 'timedOut'
}

export enum LoginMethodsEnum {
  ledger = 'ledger',
  walletconnect = 'walletconnect',
  wallet = 'wallet',
  extension = 'extension',
  extra = 'extra',
  none = ''
}

export enum NotificationTypesEnum {
  warning = 'warning',
  error = 'error',
  success = 'success'
}

export enum TypesOfSmartContractCallsEnum {
  MultiESDTNFTTransfer = 'MultiESDTNFTTransfer',
  ESDTNFTTransfer = 'ESDTNFTTransfer'
}

export enum EnvironmentsEnum {
  testnet = 'testnet',
  devnet = 'devnet',
  mainnet = 'mainnet'
}

export enum ToastsEnum {
  custom = 'custom',
  transaction = 'transaction'
}

export enum TransactionTypesEnum {
  MultiESDTNFTTransfer = 'MultiESDTNFTTransfer',
  ESDTTransfer = 'ESDTTransfer',
  ESDTNFTTransfer = 'ESDTNFTTransfer',
  esdtTransaction = 'esdtTransaction',
  nftTransaction = 'nftTransaction',
  scCall = 'scCall'
}

export enum TransactionsDefaultTitles {
  success = 'Transaction successful',
  failed = 'Transaction failed',
  pending = 'Processing transaction',
  timedOut = 'Transaction timed out'
}
