import React from 'react';
import { render } from '@testing-library/react';
import { TransactionReceiver } from '../TransactionReceiver';
import { getMockTransactionByIndex } from './getMockTransactionByIndex';

describe('TransactionReceiver tests', () => {
  it('should display provider name', () => {
    const methods = render(
      <TransactionReceiver transaction={getMockTransactionByIndex(0)} />
    );

    const transactionReceiver = methods.getByTestId('transactionReceiver');
    const scIcon = methods.getByTestId('scIcon');

    const value = 'Smart ContractStaking: ARC Stake';

    const iconTitle = methods.getByTitle('Smart Contract');

    expect(transactionReceiver.textContent).toContain(value);
    expect(scIcon).toBeDefined();
    expect(iconTitle).toBeDefined();
  });
  it('should display plain receiver', () => {
    const methods = render(
      <TransactionReceiver transaction={getMockTransactionByIndex(7)} />
    );

    const transactionReceiver = methods.getByTestId('transactionReceiver');
    const scIcon = methods.queryByTestId('scIcon');

    const value =
      'erd1enlpj6rm6lgjsrn953lzjsjg57ytv807rg3yf7q2gyq3yq08cq2sfphazl';

    expect(transactionReceiver.textContent).toContain(value);
    expect(scIcon).toBe(null);
  });
});
