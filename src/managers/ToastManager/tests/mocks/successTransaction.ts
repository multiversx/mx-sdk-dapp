// call was made to
//devnet-api.multiversx.com/transactions?hashes=ee821c8ec6141d78d0e7431ede38771f293cf7e52ed92defe0c97a2cb053a871&withScResults=true

import { testAddress } from '__mocks__/accountConfig';
import { mockTransaction } from 'managers/ToastManager/helpers/tests/mocks/transactions';

export const successTransaction = [
  {
    txHash: mockTransaction.hash,
    gasLimit: 6000000,
    gasPrice: 1000000000,
    gasUsed: 50000,
    miniBlockHash:
      'd9e14445f6072f855c46e46037ebc4eca24e9230bdb5d7871bbb003905033251',
    nonce: 1214,
    receiver: testAddress,
    receiverShard: 1,
    round: 11075177,
    epoch: 4588,
    sender: testAddress,
    senderShard: 1,
    signature:
      '6e9851b889b7cdd31f4f8bf2a1a75be5d5c486f4e52139510939ac87b5073ab8080882dd54bb848214a918a46d0faf0883eb8b3a1227779bcd7176da95f0840d',
    status: 'success',
    value: '0',
    fee: '50000000000000',
    timestamp: 1760451062,
    timestampMs: 1760451062000,
    function: 'transfer'
  }
];
