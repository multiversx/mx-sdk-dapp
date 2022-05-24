import ledgerErrorCodes from 'constants/ledgerErrorCodes';

const ledgerAppErrorText = 'Check if Elrond app is open on Ledger';
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
  return {
    errorMessage,
    defaultErrorMessage: ledgerAppErrorText
  };
}

export default getLedgerErrorCodes;
