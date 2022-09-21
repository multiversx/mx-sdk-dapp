import React from 'react';
import { render } from '@testing-library/react';
import { getMockTransactionByIndex } from 'UI/TransactionsTable/components/tests/getMockTransactionByIndex';
import { TransactionInfoValue } from '../TransactionInfoValue';

describe('TransactionInfoValue tests', () => {
  it('should display value', () => {
    const methods = render(
      <TransactionInfoValue transaction={getMockTransactionByIndex(0)} />
    );

    const transactionInfoValue = methods.getByTestId('transactionInfoValue');

    expect(transactionInfoValue.textContent).toContain(
      '14.167802221131358682 EGLD (≈ $3,410.90)'
    );
  });
});
