import { getTokenFromData } from '../getTokenFromData';

describe('getTokenFromData tests', () => {
  test('get nft test', () => {
    const result = getTokenFromData(
      'ESDTNFTTransfer@4d455441524944452d346264313933@4022@a688906bd8b00000@ebfd923cd251f857ed7639e87143ac83f12f423827abc4a0cdde0119c3e37915'
    );

    expect(result).toStrictEqual({
      collection: 'METARIDE-4bd193',
      tokenId: 'METARIDE-4bd193-4022',
      nonce: '4022',
      amount: '12000000000000000000',
      receiver: 'erd1a07ey0xj28u90mtk8858zsavs0cj7s3cy74ufgxdmcq3nslr0y2st2aaax'
    });
  });
  test('get token test', () => {
    const result = getTokenFromData(
      'ESDTTransfer@5745474c442d383836303061@8ac7230489e80000@73776170546f6b656e734669786564496e707574@555344432d613332393036@480e48f5'
    );

    expect(result).toStrictEqual({
      tokenId: 'WEGLD-88600a',
      amount: '10000000000000000000'
    });
  });
  test('get multiesdt test', () => {
    const result = getTokenFromData(
      'MultiESDTNFTTransfer@00000000000000000500bfa6f00d36d61f232c3c7532fae6b08e3909aac27ceb@02@5745474c442d383836303061@@4657679aa5be59@4d45582d623662623764@@e5eb0b83150fb8ec2b@6164644c6971756964697479@45a354a5e6a567@e39e745b5f173ec0d8'
    );

    expect(result).toStrictEqual({
      tokenId: '',
      amount: ''
    });
  });
  test('get nft from burn transaction', () => {
    const result = getTokenFromData(
      'ESDTNFTBurn@4554484f532d643735383863@015a@01'
    );

    expect(result).toStrictEqual({
      collection: 'ETHOS-d7588c',
      tokenId: 'ETHOS-d7588c-015a',
      nonce: '015a',
      amount: '1'
    });
  });
});
