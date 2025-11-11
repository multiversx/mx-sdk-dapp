import { getLedgerConfiguration } from '../getLedgerConfiguration';

describe('getLedgerConfiguration tests', () => {
  it('returns version and dataEnabled when provider initialized and contract data enabled', async () => {
    const mockGetAppConfiguration = jest.fn().mockResolvedValue({
      contractData: 1,
      version: '1.2.3'
    });

    const mockProvider = {
      isInitialized: jest.fn().mockReturnValue(true),
      hwApp: { getAppConfiguration: mockGetAppConfiguration }
    } as any;

    const result = await getLedgerConfiguration(mockProvider);

    expect(mockProvider.isInitialized).toHaveBeenCalled();
    expect(mockGetAppConfiguration).toHaveBeenCalled();
    expect(result).toEqual({ version: '1.2.3', dataEnabled: true });
  });
});
