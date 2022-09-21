import React from 'react';
import { render } from '@testing-library/react';
import { getMockTransactionByIndex } from 'UI/TransactionsTable/components/tests/getMockTransactionByIndex';
import { TransactionInfoAge } from '../TransactionInfoAge';

describe('TransactionInfoAge tests', () => {
  it('should display time and date', () => {
    const methods = render(
      <TransactionInfoAge transaction={getMockTransactionByIndex(0)} />
    );

    const transactionAge = methods.getByTestId('transactionAge');

    expect(transactionAge.textContent).toContain(
      '(Dec 28, 2021 14:38:24 PM UTC)'
    );
  });
});
