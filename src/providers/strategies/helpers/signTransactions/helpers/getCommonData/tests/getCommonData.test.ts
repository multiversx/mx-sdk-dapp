import { Transaction } from 'lib/sdkCore';
import {
  MultiSignTransactionType,
  TransactionDataTokenType
} from 'types/transactions.types';
import { getCommonData, GetCommonDataPropsType } from '../getCommonData';
import { mockGetCommonDataInput } from './mockGetCommonDataInput';

const allTransactions: MultiSignTransactionType[] =
  mockGetCommonDataInput.allTransactions.map((tx) => ({
    ...tx,
    transaction: Transaction.newFromPlainObject(tx.transaction)
  }));

const parsedTransactionsByDataField =
  mockGetCommonDataInput.parsedTransactionsByDataField as Record<
    string,
    TransactionDataTokenType
  >;

const mockData: GetCommonDataPropsType = {
  ...mockGetCommonDataInput,
  allTransactions,
  parsedTransactionsByDataField
};

jest.mock('methods/network/getExplorerAddress', () => ({
  getExplorerAddress: jest.fn(() => 'http://devnet-explorer.multiversx.com')
}));

describe('getCommonData', () => {
  it('should return the common data without ppu', async () => {
    const commonData = await getCommonData(mockData);

    expect(commonData).toStrictEqual({
      commonData: {
        currentIndex: 0,
        currentIndexToSign: 0,
        data: 'wrapEgld',
        egldLabel: 'xEGLD',
        feeInFiatLimit: '$0.0018',
        feeLimit: '0.0001',
        gasLimit: '4200000',
        gasPrice: '1000000000',
        decodedData: {
          decimal: {
            displayValue: 'NaN',
            highlight: null,
            validationWarnings: []
          },
          raw: {
            displayValue: 'wrapEgld',
            highlight: null,
            validationWarnings: []
          },
          smart: {
            displayValue: '',
            highlight: null,
            validationWarnings: []
          },
          text: {
            displayValue: '',
            highlight: null,
            validationWarnings: []
          }
        },
        highlight: null,
        isEditable: true,
        needsSigning: true,
        ppu: 0,
        ppuOptions: [],
        providerName: '',
        receiver:
          'erd1qqqqqqqqqqqqqpgqpv09kfzry5y4sj05udcngesat07umyj70n4sa2c0rp',
        scCall: null,
        tokenType: 'FungibleESDT',
        transactionsCount: 4,
        address:
          'erd1dm9uxpf5awkn7uhju7zjn9lde0dhahy0qaxqqlu26xcuuw27qqrsqfmej3',
        explorerLink:
          'http://devnet-explorer.multiversx.com/accounts/erd1dm9uxpf5awkn7uhju7zjn9lde0dhahy0qaxqqlu26xcuuw27qqrsqfmej3',
        origin: 'http://localhost',
        username: undefined
      },
      fungibleTransaction: null,
      tokenTransaction: {
        amount: '1.0000',
        identifier: 'xEGLD',
        usdValue: '≈ $17.82'
      }
    });
  });
});

describe('when the gas limit is updated', () => {
  const transactionsToModify: MultiSignTransactionType[] =
    mockGetCommonDataInput.allTransactions.map((tx) => ({
      ...tx,
      transaction: Transaction.fromPlainObject(tx.transaction)
    }));

  const updatedTransactions = [...transactionsToModify].map((tx, i) => {
    if (i === 0) {
      tx.transaction.gasLimit = BigInt(20_700_000);
      return tx;
    }
    tx.transaction.gasLimit = BigInt(520_000_000);
    return tx;
  });

  const networkWithGasStationMetadata = {
    ...mockData.network,
    gasStationMetadata: [
      {
        fast: 11_760_000,
        faster: 19_287_760
      },
      {
        fast: 11_760_000,
        faster: 19_287_760
      },
      {
        fast: 11_760_000,
        faster: 19_287_760
      }
    ]
  };

  it('should return the common data with ppu for first transaction', async () => {
    const commonData = await getCommonData({
      ...mockData,
      gasPriceData: {
        initialGasPrice: 1_000_000_000,
        ppu: 19_287_760
      },
      allTransactions: updatedTransactions,
      network: networkWithGasStationMetadata
    });

    expect(commonData).toStrictEqual({
      commonData: {
        currentIndex: 0,
        currentIndexToSign: 0,
        data: 'wrapEgld',
        decodedData: {
          decimal: {
            displayValue: 'NaN',
            highlight: null,
            validationWarnings: []
          },
          raw: {
            displayValue: 'wrapEgld',
            highlight: null,
            validationWarnings: []
          },
          smart: {
            displayValue: '',
            highlight: null,
            validationWarnings: []
          },
          text: {
            displayValue: '',
            highlight: null,
            validationWarnings: []
          }
        },
        egldLabel: 'xEGLD',
        feeInFiatLimit: '$0.0036',
        feeLimit: '0.0002',
        gasLimit: '20700000',
        gasPrice: '1455441207',
        highlight: null,
        isEditable: true,
        needsSigning: true,
        ppu: 19287760,
        ppuOptions: [
          {
            label: 'Standard',
            value: 0
          },
          {
            label: 'Faster',
            value: 19287760
          }
        ],
        providerName: '',
        receiver:
          'erd1qqqqqqqqqqqqqpgqpv09kfzry5y4sj05udcngesat07umyj70n4sa2c0rp',
        scCall: null,
        tokenType: 'FungibleESDT',
        transactionsCount: 4,
        address:
          'erd1dm9uxpf5awkn7uhju7zjn9lde0dhahy0qaxqqlu26xcuuw27qqrsqfmej3',
        explorerLink:
          'http://devnet-explorer.multiversx.com/accounts/erd1dm9uxpf5awkn7uhju7zjn9lde0dhahy0qaxqqlu26xcuuw27qqrsqfmej3',
        origin: 'http://localhost',
        username: undefined
      },

      fungibleTransaction: null,
      tokenTransaction: {
        amount: '1.0000',
        identifier: 'xEGLD',
        usdValue: '≈ $17.82'
      }
    });
  });

  it('should return the common data with ppu for second transaction', async () => {
    const commonData = await getCommonData({
      ...mockData,
      currentScreenIndex: 3,
      gasPriceData: {
        initialGasPrice: 1000000000,
        ppu: 11_760_000
      },
      allTransactions: updatedTransactions,
      network: networkWithGasStationMetadata
    });

    expect(commonData).toStrictEqual({
      commonData: {
        currentIndex: 3,
        currentIndexToSign: 0,
        data: 'MultiESDTNFTTransfer@00000000000000000500139ed7ae4aa03792e6bcb332394a40fe746eefa47ceb@02@5745474c442d613238633539@@0de0b6b3a7640000@4d45582d613635396430@@e177704bc43f9bee3106@6164644c6971756964697479@0dbd2fc137a30000@df363e8872ed0d9235a7',
        egldLabel: 'xEGLD',
        feeInFiatLimit: '$0.0998',
        feeLimit: '0.0056',
        gasLimit: '520000000',
        decodedData: {
          raw: {
            displayValue:
              'MultiESDTNFTTransfer@00000000000000000500139ed7ae4aa03792e6bcb332394a40fe746eefa47ceb@02@5745474c442d613238633539@@0de0b6b3a7640000@4d45582d613635396430@@e177704bc43f9bee3106@6164644c6971756964697479@0dbd2fc137a30000@df363e8872ed0d9235a7',
            validationWarnings: [],
            highlight:
              '6164644c6971756964697479@0dbd2fc137a30000@df363e8872ed0d9235a7'
          },
          text: {
            displayValue:
              'MultiESDTNFTTransfer@\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0005\u0000\u0013�׮J�7�漳29J@�tn�|�@\u0002@WEGLD-a28c59@@\rඳ�d\u0000\u0000@MEX-a659d0@@�wpK�?��1\u0006@addLiquidity@\r�/�7�\u0000\u0000@�6>�r�\r�5�',
            validationWarnings: [],
            highlight: 'addLiquidity@\r�/�7�\u0000\u0000@�6>�r�\r�5�'
          },
          decimal: {
            displayValue:
              'MultiESDTNFTTransfer@122606984161813630683000759836492172880332059259659648235@2@27008948430895953375700137273@@1000000000000000000@364901398363583379235888@@1064735712967374589014278@30141412180830754292089058425@990000000000000000@1054088355837700843124135',
            validationWarnings: [],
            highlight:
              '30141412180830754292089058425@990000000000000000@1054088355837700843124135'
          },
          smart: {
            displayValue:
              'MultiESDTNFTTransfer@erd1qqqqqqqqqqqqqpgqzw0d0tj25qme9e4ukverjjjqle6xamay0n4s5r0v9g@\u0002@WEGLD-a28c59@@1000000000000000000@MEX-a659d0@@1064735712967374589014278@addLiquidity@990000000000000000@1054088355837700843124135',
            validationWarnings: [],
            highlight:
              'addLiquidity@990000000000000000@1054088355837700843124135'
          }
        },
        gasPrice: '1069322720',
        highlight:
          '6164644c6971756964697479@0dbd2fc137a30000@df363e8872ed0d9235a7',
        isEditable: true,
        needsSigning: true,
        ppu: 11760000,
        ppuOptions: [
          {
            label: 'Standard',
            value: 0
          },
          {
            label: 'Fast',
            value: 11760000
          },
          {
            label: 'Faster',
            value: 19287760
          }
        ],
        providerName: '',
        receiver:
          'erd1dm9uxpf5awkn7uhju7zjn9lde0dhahy0qaxqqlu26xcuuw27qqrsqfmej3',
        scCall: 'addLiquidity',
        tokenType: 'FungibleESDT',
        transactionsCount: 4,
        address:
          'erd1dm9uxpf5awkn7uhju7zjn9lde0dhahy0qaxqqlu26xcuuw27qqrsqfmej3',
        explorerLink:
          'http://devnet-explorer.multiversx.com/accounts/erd1dm9uxpf5awkn7uhju7zjn9lde0dhahy0qaxqqlu26xcuuw27qqrsqfmej3',
        origin: 'http://localhost',
        username: undefined
      },
      fungibleTransaction: null,
      tokenTransaction: {
        amount: '0',
        identifier: 'xEGLD',
        usdValue: '= $0.00'
      }
    });
  });
});
