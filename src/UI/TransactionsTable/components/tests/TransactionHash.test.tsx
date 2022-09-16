import React from 'react';
import { render } from '@testing-library/react';
import { TransactionHash } from '../TransactionHash';
import { getMockTransactionByIndex } from './getMockTransactionByIndex';

describe('TransactionsRow tests', () => {
  it('should display fields', () => {
    const methods = render(
      <TransactionHash transaction={getMockTransactionByIndex(0)} />
    );

    const hash = methods.getByTestId('transactionHash');
    const transactionLink = methods.getByTestId('transactionLink');

    const resultHash =
      '5996572de1fc5df2c456602467e8cc1a446b8145ae79df8f6c670e0732ab3b04';

    expect(hash.textContent).toContain(resultHash);
    expect(transactionLink.getAttribute('href')).toBe(
      'http://devnet-explorer.elrond.com/transactions/' + resultHash
    );
  });
});
