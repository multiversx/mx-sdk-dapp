import { ServerTransactionType } from 'types/serverTransactions.types';
import { baseTransactionMock } from 'utils/transactions/getInterpretedTransaction/helpers/tests/base-transaction-mock';
import { getFormattedAmount } from '../getFormattedAmount';

describe('getFormattedAmount', () => {
  describe('get transaction denominated value using default format amount config', () => {
    it('formatted amount for "102000000000000000" is "0.102"', () => {
      const transaction: ServerTransactionType = {
        ...baseTransactionMock,
        value: '102000000000000000'
      };
      const output = '0.102';

      const formattedAmount = getFormattedAmount(transaction);

      expect(formattedAmount).toEqual(output);
    });

    it('formatted amount for "0" is "0"', () => {
      const transaction: ServerTransactionType = {
        ...baseTransactionMock,
        value: '0'
      };
      const output = '0';

      const formattedAmount = getFormattedAmount(transaction);

      expect(formattedAmount).toEqual(output);
    });
  });

  describe('get transaction formatted amount using custom format amount config', () => {
    const customDenominationConfig = {
      decimals: 4,
      digits: 3
    };

    it('formatted amount for "102000000000000000" is "10200000000000"', () => {
      const transaction: ServerTransactionType = {
        ...baseTransactionMock,
        value: '102000000000000000'
      };
      const output = '10200000000000';

      const formattedAmount = getFormattedAmount(
        transaction,
        customDenominationConfig
      );

      expect(formattedAmount).toEqual(output);
    });

    it('formatted amount for "10221334511" is "1022133.4511"', () => {
      const transaction: ServerTransactionType = {
        ...baseTransactionMock,
        value: '10221334511'
      };
      const output = '1022133.4511';

      const formattedAmount = getFormattedAmount(
        transaction,
        customDenominationConfig
      );

      expect(formattedAmount).toEqual(output);
    });
  });
});
