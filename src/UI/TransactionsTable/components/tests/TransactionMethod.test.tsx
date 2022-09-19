import React from 'react';
import { render } from '@testing-library/react';
import { TransactionMethod } from '../TransactionMethod';
import { getMockTransactionByIndex } from './getMockTransactionByIndex';

describe('TransactionsSender tests', () => {
  it('should display hash', () => {
    const methods = render(
      <TransactionMethod transaction={getMockTransactionByIndex(0)} />
    );

    const transactionMethod = methods.getByTestId('transactionMethod');

    const value = 'delegate';

    expect(transactionMethod.textContent).toContain(value);
    expect(transactionMethod.getAttribute('title')).toBe(
      'Delegate 14.167802221131358682 eGLD to staking provider ARC Stake'
    );
  });
});
