import React from 'react';
import { render } from '@testing-library/react';
import { TransactionShardsTransition } from '../TransactionShardsTransition';
import { getMockTransactionByIndex } from './getMockTransactionByIndex';

describe('TransactionShardsTransition tests', () => {
  it('should display hash', () => {
    const methods = render(
      <TransactionShardsTransition transaction={getMockTransactionByIndex(0)} />
    );

    const shardFromLink = methods.getByTestId('shardFromLink');
    const shardToLink = methods.getByTestId('shardToLink');

    expect(shardFromLink.textContent).toBe('Shard 1');

    expect(shardFromLink.getAttribute('href')).toBe(
      'http://devnet-explorer.multiversx.com/transactions?sendershard=1'
    );

    expect(shardToLink.textContent).toBe('Metachain');
    expect(shardToLink.getAttribute('href')).toBe(
      'http://devnet-explorer.multiversx.com/transactions?receivershard=4294967295'
    );
  });
});
