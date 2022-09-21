import React from 'react';
import { render } from '@testing-library/react';
import { getMockTransactionByIndex } from 'UI/TransactionsTable/components/tests/getMockTransactionByIndex';
import { TransactionInfoFee } from '../TransactionInfoFee';

describe('TransactionInfoFee tests', () => {
  it('should display fee', () => {
    const methods = render(
      <TransactionInfoFee transaction={getMockTransactionByIndex(0)} />
    );

    const transactionInfoFee = methods.getByTestId('transactionInfoFee');

    expect(transactionInfoFee.textContent).toContain(
      '0.000122 EGLD (≈ $0.0294)'
    );
  });
});
