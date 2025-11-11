import { getLedgerErrorCodes } from '../getLedgerErrorCodes';

describe('getLedgerErrorCodes tests', () => {
  it('returns app-open message for inactive app status codes', () => {
    const err = { statusCode: 0x6e00 }; // wrong CLA

    const result = getLedgerErrorCodes(err);

    expect(result).toEqual({
      errorMessage: 'Check if the MultiversX app is open on Ledger',
      defaultErrorMessage: 'Check if the MultiversX app is open on Ledger'
    });
  });

  it('returns disconnected message when device was disconnected', () => {
    const err = new Error('The device was disconnected.');

    const result = getLedgerErrorCodes(err);

    expect(result).toEqual({
      errorMessage: 'The device was disconnected',
      defaultErrorMessage: 'Check if the MultiversX app is open on Ledger'
    });
  });
});
