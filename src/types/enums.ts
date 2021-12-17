export enum TransactionStatusesEnum {
  'pending' = 'pending',
  'signed' = 'signed',
  'failed' = 'failed',
  'cancelled' = 'cancelled',
  'sent' = 'sent',
  'executed' = 'executed'
}

export enum LoginMethodsEnum {
  ledger = 'ledger',
  walletconnect = 'walletconnect',
  wallet = 'wallet',
  extension = 'extension',
  none = ''
}
