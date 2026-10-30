import { TransactionDataTokenType } from 'types/transactions.types';
import { getTxInfoByDataField } from '../getTxInfoByDataField';

const emptyInfo = {
  tokenId: '',
  amount: '',
  type: '',
  multiTxData: '',
  receiver: ''
};

const transferData = '544f4b454e2d313233343536@@01';
const tokenData = 'ESDTTransfer@544f4b454e2d313233343536@01';

const parsedTransactionsByDataField: Record<string, TransactionDataTokenType> =
  {
    [transferData]: {
      tokenId: 'TOKEN-123456',
      amount: '1',
      receiver: 'erd1receiver',
      multiTxData: transferData
    },
    [tokenData]: {
      tokenId: 'TOKEN-123456',
      amount: '1',
      receiver: 'erd1receiver'
    }
  };

describe('getTxInfoByDataField', () => {
  it('returns the entry of a token transfer', () => {
    expect(
      getTxInfoByDataField({
        data: tokenData,
        multiTransactionData: tokenData,
        parsedTransactionsByDataField
      })
    ).toBe(parsedTransactionsByDataField[tokenData]);
  });

  it('returns the entry of a multi-transfer screen', () => {
    expect(
      getTxInfoByDataField({
        data: `MultiESDTNFTTransfer@${'ab'.repeat(32)}@01@${transferData}`,
        multiTransactionData: transferData,
        parsedTransactionsByDataField
      })
    ).toBe(parsedTransactionsByDataField[transferData]);
  });

  it('does not give a transaction the entry of another transaction’s transfer', () => {
    expect(
      getTxInfoByDataField({
        data: transferData,
        multiTransactionData: transferData,
        parsedTransactionsByDataField
      })
    ).toEqual(emptyInfo);
  });

  it('does not give a multi-transfer screen the entry of a whole transaction', () => {
    expect(
      getTxInfoByDataField({
        data: `MultiESDTNFTTransfer@${'ab'.repeat(32)}@01@${tokenData}`,
        multiTransactionData: tokenData,
        parsedTransactionsByDataField
      })
    ).toEqual(emptyInfo);
  });

  it.each(['constructor', 'toString', '__proto__'])(
    'ignores inherited keys such as %s',
    (data) => {
      expect(
        getTxInfoByDataField({
          data,
          multiTransactionData: data,
          parsedTransactionsByDataField
        })
      ).toEqual(emptyInfo);
    }
  );
});
