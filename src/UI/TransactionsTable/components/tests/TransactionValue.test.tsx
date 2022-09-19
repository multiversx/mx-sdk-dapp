import React from 'react';
import { render } from '@testing-library/react';
import { TransactionValue } from '../TransactionValue';
import { getMockTransactionByIndex } from './getMockTransactionByIndex';

describe('TransactionsValue tests', () => {
  // const transactions: { [key: string]: string } = {
  //   0: '14.16 xEGLD',
  //   1: '0 xEGLD',
  //   9: '1.00 xEGLD'
  // };

  // for (let i = 0; i < Object.keys(transactions).length; i++) {
  //   const input = parseInt(Object.keys(transactions)[i]);
  //   const transaction = getMockTransactionByIndex(input);
  //   const output = transactions[input];
  //   it(`extracts ${output}`, () => {
  //     const methods = render(<TransactionValue transaction={transaction} />);

  //     const transactionValue = methods.getByTestId('transactionValue');

  //     expect(transactionValue.textContent).toBe(output);
  //   });
  // }
  // it('extracts NFT', () => {
  //   const transaction = getMockTransactionByIndex(4);

  //   const methods = render(<TransactionValue transaction={transaction} />);

  //   const nftBadge = methods.getByTestId('nftBadge');
  //   const nftFormattedAmount = methods.queryByTestId('nftFormattedAmount');
  //   const nftExplorerLink = methods.getByTestId('nftExplorerLink');

  //   expect(nftBadge.textContent).toBe('NFT');
  //   expect(nftExplorerLink.textContent).toBe('ARTCRAFT-322c6e-11');
  //   expect(nftExplorerLink.getAttribute('href')).toBe(
  //     'http://devnet-explorer.elrond.com/nfts/ARTCRAFT-322c6e-11'
  //   );
  //   expect(nftFormattedAmount).toBe(null);
  // });
  it('extracts MetaESDT', () => {
    const transaction = getMockTransactionByIndex(6);

    const methods = render(<TransactionValue transaction={transaction} />);

    const nftBadge = methods.queryByTestId('nftBadge');
    const nftFormattedAmount = methods.getByTestId('nftFormattedAmount');
    const transactionValueIcon = methods.getByTestId('transactionValueIcon');
    const nftExplorerLink = methods.getByTestId('nftExplorerLink');

    expect(nftBadge).toBe(null);
    expect(nftFormattedAmount.textContent).toBe('0.09');
    expect(nftExplorerLink.textContent).toBe('LKMEX');
    expect(nftExplorerLink.getAttribute('href')).toBe(
      'http://devnet-explorer.elrond.com/nfts/LKMEX-aab910-03'
    );
    expect(transactionValueIcon).toBeDefined();
    expect(transactionValueIcon.innerHTML).toContain(
      '0.09 LKMEX (LKMEX-aab910-03)\n316.867286073585 LKMEX (LKMEX-aab910-0d3d)'
    );
  });
  // it('extracts ESDT', () => {
  //   const transaction = getMockTransactionByIndex(8);

  //   const methods = render(<TransactionValue transaction={transaction} />);

  //   const tokenFormattedAmount = methods.getByTestId('tokenFormattedAmount');
  //   const transactionValueIcon = methods.getByTestId('transactionValueIcon');
  //   const tokenExplorerLink = methods.getByTestId('tokenExplorerLink');

  //   expect(tokenFormattedAmount.textContent).toBe('1.00');
  //   expect(tokenExplorerLink.textContent).toBe('WEGLD');
  //   expect(tokenExplorerLink.getAttribute('href')).toBe(
  //     'http://devnet-explorer.elrond.com/tokens/WEGLD-bd4d79'
  //   );
  //   expect(transactionValueIcon).toBeDefined();
  //   expect(transactionValueIcon.innerHTML).toContain(
  //     '1 WEGLD (WEGLD-bd4d79)\n281,066.754391919467235791 MEX (MEX-455c57)'
  //   );
  // });
});
