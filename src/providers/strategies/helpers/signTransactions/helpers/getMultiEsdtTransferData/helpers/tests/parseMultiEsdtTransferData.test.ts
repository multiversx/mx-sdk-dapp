import { parseMultiEsdtTransferData } from '../parseMultiEsdtTransferData';

const removeWhiteSpaces = (str: string) => str.replace(/\s/g, '');
const one = {
  data: removeWhiteSpaces(`MultiESDTNFTTransfer@0000000000000000050074b70610036a10129194f8474f2f63e49e3f20ce7ceb
  @03
  @5745474c442d376662623930@@1bc16d674ec80000
  @4c4b4d45582d636661313364@0243@ed1ba6a961f087c4cc
  @4c4b4c502d613538643661@0396@01d8482e926769e0@6164644c697175696469747950726f7879
  @00000000000000000500e5d437e80396609650d2d30e1f8c1b2c71a331de7ceb@1b7a5f826f460000@eabca78e16b85d7378`),
  esdt: {
    amount: '2000000000000000000',
    data: '5745474c442d376662623930@@1bc16d674ec80000',
    receiver:
      '0000000000000000050074b70610036a10129194f8474f2f63e49e3f20ce7ceb',
    token: 'WEGLD-7fbb90',
    type: 'esdtTransaction'
  },
  sft1: {
    amount: '4373870811592434107596',
    token: 'LKMEX-cfa13d',
    data: '4c4b4d45582d636661313364@0243@ed1ba6a961f087c4cc',
    nonce: '0243',
    receiver:
      '0000000000000000050074b70610036a10129194f8474f2f63e49e3f20ce7ceb',
    type: 'nftTransaction'
  },
  sft2: {
    amount: '132935553869375968',
    token: 'LKLP-a58d6a',
    data: '4c4b4c502d613538643661@0396@01d8482e926769e0',
    nonce: '0396',
    receiver:
      '0000000000000000050074b70610036a10129194f8474f2f63e49e3f20ce7ceb',
    type: 'nftTransaction'
  },
  scCall: {
    data: '6164644c697175696469747950726f7879@00000000000000000500e5d437e80396609650d2d30e1f8c1b2c71a331de7ceb@1b7a5f826f460000@eabca78e16b85d7378',
    receiver:
      '0000000000000000050074b70610036a10129194f8474f2f63e49e3f20ce7ceb',
    type: 'scCall'
  }
};
const two = {
  data: removeWhiteSpaces(`MultiESDTNFTTransfer@0000000000000000050023a2823d0afcea4373192e362c285287a6bb10c47ceb
  @02
  @5745474c442d376662623930@@016345785d8a0000
  @425553442d363631303635@@01511107c5a79fa8da
  @6164644c6971756964697479@015fb7f9b8c38000@014db223dab7de101f`),
  esdt1: {
    type: 'esdtTransaction',
    data: '5745474c442d376662623930@@016345785d8a0000',
    receiver:
      '0000000000000000050023a2823d0afcea4373192e362c285287a6bb10c47ceb',
    token: 'WEGLD-7fbb90',
    amount: '100000000000000000'
  },
  esdt2: {
    type: 'esdtTransaction',
    data: '425553442d363631303635@@01511107c5a79fa8da',
    receiver:
      '0000000000000000050023a2823d0afcea4373192e362c285287a6bb10c47ceb',
    token: 'BUSD-661065',
    amount: '24288202810888005850'
  },
  scCall: {
    data: '6164644c6971756964697479@015fb7f9b8c38000@014db223dab7de101f',
    receiver:
      '0000000000000000050023a2823d0afcea4373192e362c285287a6bb10c47ceb',
    type: 'scCall'
  }
};
const three = {
  data: removeWhiteSpaces(`MultiESDTNFTTransfer@000000000000000005003a6b2c77e799c53499791de274ebee24558681aa10fb
  @02
  @534649544c4547454e442d356461396464@0ead@01
  @534649542d616562633930@00@01e0524e2357d3c000
  @75706772616465@6d657461646174613a626166796265696168776b34323576763669647767736a356f74356c32716a737170656c67366c716a6779777733747563727135777a62766664712f333036302e6a736f6e@7618623408A6A242813A40E471F2CE707599F0C12DA0790DCBB6305A3993F5B65771FCCB4EE925772E348458AAD916504F806F97485490F59C27EF56236A4801`),
  sft: {
    amount: '1',
    data: '534649544c4547454e442d356461396464@0ead@01',
    nonce: '0ead',
    receiver:
      '000000000000000005003a6b2c77e799c53499791de274ebee24558681aa10fb',
    token: 'SFITLEGEND-5da9dd',
    type: 'nftTransaction'
  },
  esdt: {
    amount: '34610812000000000000',
    data: '534649542d616562633930@00@01e0524e2357d3c000',
    receiver:
      '000000000000000005003a6b2c77e799c53499791de274ebee24558681aa10fb',
    token: 'SFIT-aebc90',
    type: 'esdtTransaction'
  },
  scCall: {
    data: '75706772616465@6d657461646174613a626166796265696168776b34323576763669647767736a356f74356c32716a737170656c67366c716a6779777733747563727135777a62766664712f333036302e6a736f6e@7618623408A6A242813A40E471F2CE707599F0C12DA0790DCBB6305A3993F5B65771FCCB4EE925772E348458AAD916504F806F97485490F59C27EF56236A4801',
    receiver:
      '000000000000000005003a6b2c77e799c53499791de274ebee24558681aa10fb',
    type: 'scCall'
  }
};

const four = {
  data: removeWhiteSpaces(`MultiESDTNFTTransfer
  @000000000000000005006704c51b25a956ddbc643189ba7945b413890d4f0fd6
  @02
  @444d452d626465326238@01@01
  @444d452d626465326238@01@01
  @6e6674446973747269627574696f6e
  @ee62513ef30aede25b3366b6e3219ee18084026f36d6105299ee9963b1338f09
  @ee62513ef30aede25b3366b6e3219ee18084026f36d6105299ee9963b1338f09`),
  nft: {
    amount: '1',
    data: '444d452d626465326238@01@01',
    nonce: '01',
    receiver:
      '000000000000000005006704c51b25a956ddbc643189ba7945b413890d4f0fd6',
    token: 'DME-bde2b8',
    type: 'nftTransaction'
  },
  ssCall: {
    data: '6e6674446973747269627574696f6e@ee62513ef30aede25b3366b6e3219ee18084026f36d6105299ee9963b1338f09@ee62513ef30aede25b3366b6e3219ee18084026f36d6105299ee9963b1338f09',
    receiver:
      '000000000000000005006704c51b25a956ddbc643189ba7945b413890d4f0fd6',
    type: 'scCall'
  }
};

const five = {
  data: removeWhiteSpaces(`MultiESDTNFTTransfer
  @000000000000000005006945e6647033941911d0e8e3b85c876b6ec449db1679
  @55544b2d353463323862
  @
  @091d
  @55544b4641524d2d653539363331
  @02
  @04b4a8335ecc4a780000
  @55544b4641524d2d653539363331
  @03
  @a968163f0a57b4000000
  @7374616b654661726d`)
};

describe('parseMultiEsdtTransferData tests', () => {
  test('Interprets data with scCall', () => {
    const response = [one.esdt, one.sft1, one.sft2, one.scCall];
    const result = parseMultiEsdtTransferData(one.data);
    expect(result).toEqual(response);
  });
  test('Interprets data without scCall', () => {
    const response = [one.esdt, one.sft1, one.sft2];
    const result = parseMultiEsdtTransferData(
      one.data.replace(one.scCall.data, '')
    );
    expect(result).toEqual(response);
  });
  test('Fails if one tx is missing', () => {
    const result = parseMultiEsdtTransferData(
      one.data.replace(one.sft2.data, '')
    );
    expect(result).toEqual([]);
  });
  test('Fails if format is wrong', () => {
    const result = parseMultiEsdtTransferData(
      'MultiESDTNFTTransfer@0000000000000000050074b70610036a10129194f8474f2f63e49e3f20ce7ceb@03@'
    );
    expect(result).toEqual([]);
  });
  test('Interprets data with two ESDT transactions', () => {
    const response = [two.esdt1, two.esdt2, two.scCall];
    const result = parseMultiEsdtTransferData(two.data);
    expect(result).toEqual(response);
  });
  test('Interprets data with two ESDT and NFT transactions', () => {
    const result = parseMultiEsdtTransferData(three.data);
    const response = [three.sft, three.esdt, three.scCall];
    expect(result).toEqual(response);
  });
  test('Interprets data with two identical NFT transactions', () => {
    const result = parseMultiEsdtTransferData(four.data);
    const response = [four.nft, four.nft, four.ssCall];
    expect(result).toEqual(response);
  });
  test('Returns empty array for invalid data', () => {
    const result = parseMultiEsdtTransferData(five.data);
    expect(result).toEqual([]);
  });
});
