import { getDataPayloadForTransaction } from '../getDataPayloadForTransaction';

describe('getDataPayloadForTransaction', () => {
  it('should return empty string when data is not provided', async () => {
    const data = '';
    const result = getDataPayloadForTransaction(data);
    expect(result.toString()).toStrictEqual(data);
  });

  it('should return the data unmodified when a string with letters is provided', async () => {
    const data = 'test data';
    const result = getDataPayloadForTransaction(data);
    expect(result.toString()).toStrictEqual(data);
  });

  it('should return the decoded base64 string with emoji', async () => {
    const data = 'dGVzdCB0cmFuc2FjdGlvbiDwn5mA';
    const decoded = 'test transaction 🙀';
    const result = getDataPayloadForTransaction(data);
    expect(result.toString()).toStrictEqual(decoded);
  });

  it('should return the decoded base64 string of another base64 string', async () => {
    const data = 'ZEdWemRDQjBjbUZ1YzJGamRHbHZiaUR3bjVtQQ==';
    const decoded = 'dGVzdCB0cmFuc2FjdGlvbiDwn5mA';
    const result = getDataPayloadForTransaction(data);
    expect(result.toString()).toStrictEqual(decoded);
  });

  it('should return the decoded base64 string of transaction sign data', async () => {
    const data = 'bGVuZGVnYXRlQDAx';
    const decoded = 'lendegate@01';
    const result = getDataPayloadForTransaction(data);
    expect(result.toString()).toStrictEqual(decoded);
  });

  it('should return the decoded base64 string with chinese characters', async () => {
    const data = '5aeT5ZCN';
    const decoded = '姓名';
    const result = getDataPayloadForTransaction(data);
    expect(result.toString()).toStrictEqual(decoded);
  });

  it('should return the data unmodified when ESDT data is provided', async () => {
    const data =
      'ESDTNFTTransfer@524f424f54532d316365303334@01@01@0000000000000000050006bdc61ebbec719b07b4a7ebfd1fb215c0706e3c7ceb';
    const result = getDataPayloadForTransaction(data);
    expect(result.toString()).toStrictEqual(data);
  });

  it('should return the data unmodified when non-ASCII string is provided', async () => {
    const data =
      '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~��������������������������������������������������������������������������������������������������������������������������������';
    const result = getDataPayloadForTransaction(data);
    expect(result.toString()).toStrictEqual(data);
  });

  it('should return the data unmodified when chinese string is provided', async () => {
    const data = '姓名';
    const result = getDataPayloadForTransaction(data);
    expect(result.toString()).toStrictEqual(data);
  });
});
