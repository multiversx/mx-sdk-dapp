import { testAddress } from '__mocks__/accountConfig';

export const mockPendingTransaction = {
  nonce: 17,
  value: '0',
  receiver: testAddress,
  sender: testAddress,
  gasPrice: 1000000000,
  gasLimit: 6000000,
  chainID: 'D',
  version: 1,
  signature:
    'e8e12f2c5432361b640068f8046819c02511e94cc139257dd1bf557368f4dafe7f446d0df2fe02e7f09358f84b0b2fce88b801a4eb3643ba85c989340bf7820a',
  txHash: 'txPending§§§7cb81c945decd70678cebc5b8b919f8e3c8411f2b19ebdd6a6x',
  receiverShard: 0,
  senderShard: 0,
  status: 'pending' as const,
  hash: 'txPending§§§7cb81c945decd70678cebc5b8b919f8e3c8411f2b19ebdd6a6x',
  invalidTransaction: false,
  results: [],
  previousStatus: 'pending',
  hasStatusChanged: true
};
