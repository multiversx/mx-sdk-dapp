import React from 'react';
import { render } from '@testing-library/react';
import { getMockTransactionByIndex } from 'UI/TransactionsTable/components/tests/getMockTransactionByIndex';
import { TransactionAction } from '../TransactionAction';

describe('TransactionAction tests', () => {
  it('should display fee', () => {
    const methods = render(
      <TransactionAction transaction={getMockTransactionByIndex(0)} />
    );

    const transactionAction = methods.getByTestId('transactionAction');

    expect(transactionAction.textContent).toContain(
      'Delegate14.167802221131358682 xEGLDto staking providerARC Stake'
    );
  });
});
