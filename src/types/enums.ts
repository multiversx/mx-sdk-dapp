export enum TransactionServerStatusesEnum {
  'pending' = 'pending',
  'fail' = 'fail',
  'invalid' = 'invalid',
  'success' = 'success',
  'executed' = 'executed',
  'completed' = 'completed'
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
