import { testAddress } from '__mocks__';

export const mockGetCommonDataInput = {
  allTransactions: [
    {
      transaction: {
        nonce: 598,
        value: '1000000000000000000',
        receiver:
          'erd1qqqqqqqqqqqqqpgqpv09kfzry5y4sj05udcngesat07umyj70n4sa2c0rp',
        sender: testAddress,
        gasPrice: 1000000000,
        gasLimit: 4200000,
        data: 'd3JhcEVnbGQ=',
        chainID: 'D',
        version: 1
      },
      transactionIndex: 0,
      multiTxData: 'wrapEgld',
      needsSigning: true
    },
    {
      transaction: {
        nonce: 599,
        value: '0',
        receiver: testAddress,
        sender: testAddress,
        gasPrice: 1000000000,
        gasLimit: 10000000,
        data: 'TXVsdGlFU0RUTkZUVHJhbnNmZXJAMDAwMDAwMDAwMDAwMDAwMDA1MDAxMzllZDdhZTRhYTAzNzkyZTZiY2IzMzIzOTRhNDBmZTc0NmVlZmE0N2NlYkAwMkA1NzQ1NDc0YzQ0MmQ2MTMyMzg2MzM1MzlAQDBkZTBiNmIzYTc2NDAwMDBANGQ0NTU4MmQ2MTM2MzUzOTY0MzBAQGUxNzc3MDRiYzQzZjliZWUzMTA2QDYxNjQ2NDRjNjk3MTc1Njk2NDY5NzQ3OUAwZGJkMmZjMTM3YTMwMDAwQGRmMzYzZTg4NzJlZDBkOTIzNWE3',
        chainID: 'D',
        version: 1
      },
      multiTxData: '5745474c442d613238633539@@0de0b6b3a7640000',
      transactionIndex: 0,
      needsSigning: false
    },
    {
      transaction: {
        nonce: 599,
        value: '0',
        receiver: testAddress,
        sender: testAddress,
        gasPrice: 1000000000,
        gasLimit: 10000000,
        data: 'TXVsdGlFU0RUTkZUVHJhbnNmZXJAMDAwMDAwMDAwMDAwMDAwMDA1MDAxMzllZDdhZTRhYTAzNzkyZTZiY2IzMzIzOTRhNDBmZTc0NmVlZmE0N2NlYkAwMkA1NzQ1NDc0YzQ0MmQ2MTMyMzg2MzM1MzlAQDBkZTBiNmIzYTc2NDAwMDBANGQ0NTU4MmQ2MTM2MzUzOTY0MzBAQGUxNzc3MDRiYzQzZjliZWUzMTA2QDYxNjQ2NDRjNjk3MTc1Njk2NDY5NzQ3OUAwZGJkMmZjMTM3YTMwMDAwQGRmMzYzZTg4NzJlZDBkOTIzNWE3',
        chainID: 'D',
        version: 1
      },
      multiTxData: '4d45582d613635396430@@e177704bc43f9bee3106',
      transactionIndex: 1,
      needsSigning: false
    },
    {
      transaction: {
        nonce: 599,
        value: '0',
        receiver: testAddress,
        sender: testAddress,
        gasPrice: 1000000000,
        gasLimit: 10000000,
        data: 'TXVsdGlFU0RUTkZUVHJhbnNmZXJAMDAwMDAwMDAwMDAwMDAwMDA1MDAxMzllZDdhZTRhYTAzNzkyZTZiY2IzMzIzOTRhNDBmZTc0NmVlZmE0N2NlYkAwMkA1NzQ1NDc0YzQ0MmQ2MTMyMzg2MzM1MzlAQDBkZTBiNmIzYTc2NDAwMDBANGQ0NTU4MmQ2MTM2MzUzOTY0MzBAQGUxNzc3MDRiYzQzZjliZWUzMTA2QDYxNjQ2NDRjNjk3MTc1Njk2NDY5NzQ3OUAwZGJkMmZjMTM3YTMwMDAwQGRmMzYzZTg4NzJlZDBkOTIzNWE3',
        chainID: 'D',
        version: 1
      },
      multiTxData:
        '6164644c6971756964697479@0dbd2fc137a30000@df363e8872ed0d9235a7',
      transactionIndex: 2,
      needsSigning: true
    }
  ],
  currentScreenIndex: 0,
  egldLabel: 'xEGLD',
  network: {
    id: 'devnet',
    chainId: 'D',
    name: 'Devnet',
    egldLabel: 'xEGLD',
    decimals: '18',
    digits: '4',
    gasPerDataByte: '1500',
    walletAddress: 'https://devnet-wallet.multiversx.com',
    apiAddress: 'https://devnet-api.multiversx.com',
    explorerAddress: 'http://devnet-explorer.multiversx.com',
    apiTimeout: '4000',
    roundDuration: 6000,
    iframeWalletAddress: 'https://devnet-iframe-wallet.multiversx.com',
    xAliasAddress: 'https://devnet.xalias.com'
  },
  gasPriceData: {
    ppu: 0,
    initialGasPrice: 1000000000
  },
  price: 17.82,
  address: testAddress,
  shard: 0,
  signedIndexes: [],
  parsedTransactionsByDataField: {
    '5745474c442d613238633539@@0de0b6b3a7640000': {
      tokenId: 'WEGLD-a28c59',
      amount: '1000000000000000000',
      type: 'esdtTransaction',
      nonce: '',
      multiTxData: '5745474c442d613238633539@@0de0b6b3a7640000',
      receiver:
        '00000000000000000500139ed7ae4aa03792e6bcb332394a40fe746eefa47ceb'
    },
    '4d45582d613635396430@@e177704bc43f9bee3106': {
      tokenId: 'MEX-a659d0',
      amount: '1064735712967374589014278',
      type: 'esdtTransaction',
      nonce: '',
      multiTxData: '4d45582d613635396430@@e177704bc43f9bee3106',
      receiver:
        '00000000000000000500139ed7ae4aa03792e6bcb332394a40fe746eefa47ceb'
    },
    '6164644c6971756964697479@0dbd2fc137a30000@df363e8872ed0d9235a7': {
      tokenId: '',
      amount: '',
      type: 'esdtTransaction',
      nonce: '',
      multiTxData:
        '6164644c6971756964697479@0dbd2fc137a30000@df363e8872ed0d9235a7',
      receiver:
        '00000000000000000500139ed7ae4aa03792e6bcb332394a40fe746eefa47ceb'
    }
  }
};
