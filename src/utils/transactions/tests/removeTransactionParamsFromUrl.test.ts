import { removeTransactionParamsFromUrl } from '../removeTransactionParamsFromUrl';

describe('removeTransactionParamsFromUrl tests', () => {
  test('removes all data from URL', () => {
    const search =
      '?nonce=1&value=123&receiver=erd123&sender=erd456&gasLimit=60000&gasPrice=60000&chainID=D';
    const transaction = {
      value: '123',
      data: 'test',
      nonce: '1',
      receiver: 'erd123',
      sender: 'erd456',
      gasLimit: '60000',
      gasPrice: '60000',
      chainID: 'D'
    };

    const result = removeTransactionParamsFromUrl({ transaction, search });

    expect(result).toStrictEqual({});
  });
  test('removes only tx data from the URL ', () => {
    const search =
      '?testParam=123&searchParam=asd&nonce=1&value=123&receiver=erd123&sender=erd456&gasLimit=60000&gasPrice=60000&chainID=D';
    const transaction = {
      value: '123',
      data: 'test',
      nonce: '1',
      receiver: 'erd123',
      sender: 'erd456',
      gasLimit: '60000',
      gasPrice: '60000',
      chainID: 'D'
    };

    const result = removeTransactionParamsFromUrl({ transaction, search });

    expect(result).toStrictEqual({
      testParam: '123',
      searchParam: 'asd'
    });
  });
});
