import { ledgerErrorCodes } from 'constants/ledger.constants';

const ledgerAppErrorText = 'Check if the MultiversX app is open on Ledger';
const notConnectedCode = 0x6e01;
const wrongClaCode = 0x6e00;
const inactiveAppCodes = [notConnectedCode, wrongClaCode];

export function getLedgerErrorCodes(err?: any) {
  let errorMessage: string | null = null;
  if (err?.statusCode in ledgerErrorCodes) {
    const statusCode: keyof typeof ledgerErrorCodes = err?.statusCode;
    const { message } = ledgerErrorCodes[statusCode];
    errorMessage = inactiveAppCodes.includes(statusCode)
      ? ledgerAppErrorText
      : message;
  }

  if (!errorMessage && String(err).includes('The device was disconnected.')) {
    errorMessage = 'The device was disconnected';
  }

  return {
    errorMessage,
    defaultErrorMessage: ledgerAppErrorText
  };
}
