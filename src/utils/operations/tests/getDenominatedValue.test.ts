import { baseTransactionMock } from 'components/TransactionsInterpreter/helpers/tests/base-transaction-mock';
import { TransactionType } from 'types/server-transations';
import { getDenominatedValue } from '../getDenominatedValue';

describe('getDenominatedValue', () => {
  describe('get transaction denominated value using default denomination config', () => {
    it('denominated value for "102000000000000000" is "0.102"', () => {
      const transaction: TransactionType = {
        ...baseTransactionMock!,
        value: '102000000000000000'
      };
      const output = '0.102';

      const denominatedValue = getDenominatedValue(transaction);

      expect(denominatedValue).toEqual(output);
    });

    it('denominated value for "0" is "0"', () => {
      const transaction: TransactionType = {
        ...baseTransactionMock!,
        value: '0'
      };
      const output = '0';

      const denominatedValue = getDenominatedValue(transaction);

      expect(denominatedValue).toEqual(output);
    });
  });

  describe('get transaction denominated value using custom denomination config', () => {
    const customDenominationConfig = {
      denomination: 4,
      decimals: 3
    };

    it('denominated value for "102000000000000000" is "10200000000000"', () => {
      const transaction: TransactionType = {
        ...baseTransactionMock!,
        value: '102000000000000000'
      };
      const output = '10200000000000';

      const denominatedValue = getDenominatedValue(
        transaction,
        customDenominationConfig
      );

      expect(denominatedValue).toEqual(output);
    });

    it('denominated value for "10221334511" is "1022133.4511"', () => {
      const transaction: TransactionType = {
        ...baseTransactionMock!,
        value: '10221334511'
      };
      const output = '1022133.4511';

      const denominatedValue = getDenominatedValue(
        transaction,
        customDenominationConfig
      );

      expect(denominatedValue).toEqual(output);
    });
  });
});
