export * from './errorsMessages';
export * from './network';
export * from './ledgerErrorCodes';
export * from './mnemonicWords';
export * from './transaction-status';
export * from './transaction-interpreter';

export const gasPriceModifier = '0.01';
export const gasPerDataByte = '1500';
export const gasLimit = '50000';
export const gasPrice = 1_000_000_000;
export const denomination = 18;
export const decimals = 4;
export const version = 1;

export const ledgerContractDataEnabledValue = 1;

export const dappInitRoute = '/dapp/init';
export const WALLET_SIGN_SESSION = 'signSession';

export const logoutActionName = 'logout';
export const loginActionName = 'login';
