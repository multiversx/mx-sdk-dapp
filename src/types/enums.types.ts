export enum EnvironmentsEnum {
  testnet = 'testnet',
  devnet = 'devnet',
  mainnet = 'mainnet'
}

export enum TransactionServerStatusesEnum {
  pending = 'pending',
  fail = 'fail',
  invalid = 'invalid',
  success = 'success',
  executed = 'executed',
  notExecuted = 'not executed',
  rewardReverted = 'reward-reverted'
}

export enum TransactionTypesEnum {
  MultiESDTNFTTransfer = 'MultiESDTNFTTransfer',
  ESDTTransfer = 'ESDTTransfer',
  ESDTNFTBurn = 'ESDTNFTBurn',
  ESDTNFTTransfer = 'ESDTNFTTransfer',
  esdtTransaction = 'esdtTransaction',
  nftTransaction = 'nftTransaction',
  scCall = 'scCall'
}

export enum TransactionBatchStatusesEnum {
  signed = 'signed',
  cancelled = 'cancelled',
  success = 'success',
  sent = 'sent',
  fail = 'fail',
  timedOut = 'timedOut',
  invalid = 'invalid'
}

export enum TypesOfSmartContractCallsEnum {
  MultiESDTNFTTransfer = 'MultiESDTNFTTransfer',
  ESDTNFTTransfer = 'ESDTNFTTransfer'
}

export enum ESDTTransferTypesEnum {
  ESDTNFTTransfer = 'ESDTNFTTransfer',
  ESDTNFTBurn = 'ESDTNFTBurn',
  ESDTNFTAddQuantity = 'ESDTNFTAddQuantity',
  ESDTNFTCreate = 'ESDTNFTCreate',
  MultiESDTNFTTransfer = 'MultiESDTNFTTransfer',
  ESDTTransfer = 'ESDTTransfer',
  ESDTBurn = 'ESDTBurn',
  ESDTLocalMint = 'ESDTLocalMint',
  ESDTLocalBurn = 'ESDTLocalBurn',
  ESDTWipe = 'ESDTWipe',
  ESDTFreeze = 'ESDTFreeze'
}

export enum GuardianActionsEnum {
  SetGuardian = 'SetGuardian',
  GuardAccount = 'GuardAccount',
  UnGuardAccount = 'UnGuardAccount'
}

export enum SigningErrorsEnum {
  notInitialized = 'Provider not initialized',
  errorSigning = 'Error when signing',
  errorSigningTx = 'Error signing transaction',
  missingProviderMessage = 'You need a signer/valid signer to send a transaction, use either WalletProvider, LedgerProvider or WalletConnect',
  defaultTransactionStatusMessage = 'Undefined transaction status',
  secondLoginAttemptError = 'Action not allowed. User is logged in. Call logout() first',
  senderDifferentThanLoggedInAddress = 'You cannot sign transactions from a different account'
}
export enum SigningWarningsEnum {
  cancelled = 'Signing canceled',
  transactionCancelled = 'Transaction canceled'
}
