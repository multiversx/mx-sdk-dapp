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
    data:
      '6164644c697175696469747950726f7879@00000000000000000500e5d437e80396609650d2d30e1f8c1b2c71a331de7ceb@1b7a5f826f460000@eabca78e16b85d7378',
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
});
