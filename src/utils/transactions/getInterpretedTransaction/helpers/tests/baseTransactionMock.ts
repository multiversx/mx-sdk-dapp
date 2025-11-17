import { TransactionServerStatusesEnum } from 'types/enums.types';
import { TransactionActionsEnum } from 'types/serverTransactions.types';

export const baseTransactionMock = {
  blockHash: '',
  price: 60,
  txHash: 'c747f6ea467fb68e2f152a5baa57edbc7e04d297954878084363cbdb961eed7e',
  gasLimit: 60000000,
  gasPrice: 1000000000,
  gasUsed: 60000000,
  miniBlockHash:
    'd7ad7c1f8f57e3a370b12092604c42157cb5228ab598e9bbca641ee2e4ee7bd2',
  nonce: 965,
  receiver: 'erd1qqqqqqqqqqqqqpgq4gdcg0k83u7lpv4s4532w3au9y9h0vm70eqq6m8qk2',
  receiverShard: 0,
  round: 2044988,
  sender: 'erd1axhx4kenjlae6sknq7zjg2g4fvzavv979r2fg425p62wkl84avtqsf7vvv',
  senderShard: 0,
  signature: 'transaction-signature-hash',
  status: TransactionServerStatusesEnum.fail,
  value: '1234',
  fee: '655440000000000',
  timestamp: 1660821528,
  data: 'cGluZw==',
  action: {
    category: 'scCall',
    name: TransactionActionsEnum.ping
  }
};
