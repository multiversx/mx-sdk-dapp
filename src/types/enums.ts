export enum TransactionStatusesEnum {
  'pending' = 'pending',
  'signed' = 'signed',
  'failed' = 'failed',
  'cancelled' = 'cancelled',
  'invalid' = 'invalid',
  'successful' = 'successful',
  'sent' = 'sent',
  'executed' = 'executed',
  'timedOut' = 'timedOut'
}

export enum LoginMethodsEnum {
  ledger = 'ledger',
  walletconnect = 'walletconnect',
  wallet = 'wallet',
  extension = 'extension',
  none = ''
}
