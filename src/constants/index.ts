import * as ledgerErrorCodes from './ledgerErrorCodes';
import * as networkConstants from './network';

export { networkConstants, ledgerErrorCodes };

export const gasPriceModifier = '0.01';
export const gasPerDataByte = '1500';
export const gasLimit = '50000';
export const defaultGasPrice = 1_000_000_000;
export const defaultGasLimit = 60_000_000;
export const denomination = 18;
export const decimals = 4;
