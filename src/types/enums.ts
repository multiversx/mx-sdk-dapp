export enum TransactionStatusesEnum {
  'pending' = 'pending',
  'failed' = 'failed',
  'invalid' = 'invalid',
  'successful' = 'successful',
  'executed' = 'executed'
}

export enum TransactionBatchStatusesEnum {
  'signed' = 'signed',
  'cancelled' = 'cancelled',
  'successful' = 'successful',
  'sent' = 'sent',
  'failed' = 'failed',
  'timedOut' = 'timedOut'
}

export enum LoginMethodsEnum {
  ledger = 'ledger',
  walletconnect = 'walletconnect',
  wallet = 'wallet',
  extension = 'extension',
  none = ''
}
