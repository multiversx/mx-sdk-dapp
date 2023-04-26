import { getDataPayloadForTransaction } from '../getDataPayloadForTransaction';

describe('getDataPayloadForTransaction', () => {
  it('should return empty string when data is not provided', async () => {
    const data = '';
    const result = getDataPayloadForTransaction(data);
    expect(result.toString()).toStrictEqual(data);
  });

  it('should return the data unmodified when regular data string is provided', async () => {
    const data = 'test data';
    const result = getDataPayloadForTransaction(data);
    expect(result.toString()).toStrictEqual(data);
  });

  it('should return the decoded string when base64 data is provided', async () => {
    const data = 'dGVzdCB0cmFuc2FjdGlvbiDwn5mA';
    const decoded = 'test transaction 🙀';
    const result = getDataPayloadForTransaction(data);
    expect(result.toString()).toStrictEqual(decoded);
  });

  it('should return the decoded string when base64 data is provided', async () => {
    const data = 'ZEdWemRDQjBjbUZ1YzJGamRHbHZiaUR3bjVtQQ==';
    const decoded = 'dGVzdCB0cmFuc2FjdGlvbiDwn5mA';
    const result = getDataPayloadForTransaction(data);
    expect(result.toString()).toStrictEqual(decoded);
  });

  it('should return the data unmodified when ESDT data is provided', async () => {
    const data =
      'ESDTNFTTransfer@524f424f54532d316365303334@01@01@0000000000000000050006bdc61ebbec719b07b4a7ebfd1fb215c0706e3c7ceb';
    const result = getDataPayloadForTransaction(data);
    expect(result.toString()).toStrictEqual(data);
  });
});
