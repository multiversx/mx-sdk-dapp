import ledgerErrorCodes from 'constants/ledgerErrorCodes';

const ledgerAppErrorText = 'Check if Elrond app is open on Ledger';
const notConnectedCode = 0x6e01;

export function getLedgerErrorCodes(err?: any) {
  let errorMessage: string | null = null;
  debugger;
  if (err?.statusCode in ledgerErrorCodes) {
    const statusCode: keyof typeof ledgerErrorCodes = err?.statusCode;
    const { message } = ledgerErrorCodes[statusCode];
    errorMessage =
      statusCode === notConnectedCode ? ledgerAppErrorText : message;
  }
  return {
    errorMessage,
    defaultErrorMessage: ledgerAppErrorText
  };
}

export default getLedgerErrorCodes;
