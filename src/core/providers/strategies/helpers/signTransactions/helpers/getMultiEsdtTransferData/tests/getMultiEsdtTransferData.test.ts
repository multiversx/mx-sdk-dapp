import { getMultiEsdtTransferData } from '../getMultiEsdtTransferData';

describe('getMultiEsdtTransferData', () => {
  it('should extract transaction information', async () => {
    const data = getMultiEsdtTransferData([]);
    // Assert the result is correct based on your mock data
    expect(data).toBeTruthy();
  });
});
