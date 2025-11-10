import { testNetwork } from '__mocks__/accountConfig';
import { network } from '__mocks__/data/storeData/network';
import { rest, server } from '__mocks__/server';
import { initializeNetworkConfig } from 'store/actions/network/networkActions';
import { networkSelector } from 'store/selectors/networkSelectors';
import { getState } from 'store/store';
import { setGasStationMetadata } from '../setGasStationMetadata';

jest.mock('store/actions/network/networkActions', () => ({
  initializeNetworkConfig: jest.fn()
}));

jest.mock('store/selectors/networkSelectors', () => ({
  networkSelector: jest.fn()
}));

jest.mock('store/store', () => ({
  getState: jest.fn()
}));

describe('setGasStationMetadata tests', () => {
  const mockApiAddress = testNetwork.apiAddress;
  const mockShard = 0;

  const mockGasStationResponse = {
    lastBlock: 10825617,
    fast: 1000000000,
    faster: 1500000000
  };

  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  beforeEach(() => {
    jest.clearAllMocks();
    (getState as jest.Mock).mockReturnValue({});
    (networkSelector as jest.Mock).mockReturnValue({
      ...network,
      gasStationMetadata: {}
    });
  });

  afterEach(() => {
    server.resetHandlers();
  });

  it('should fetch gas station metadata and update network config when shard is provided', async () => {
    // Setup MSW handler for gas station endpoint
    server.use(
      rest.get(
        `${mockApiAddress}/transactions/ppu/${mockShard}`,
        (_req, res, ctx) => {
          return res(ctx.status(200), ctx.json(mockGasStationResponse));
        }
      )
    );

    await setGasStationMetadata({
      shard: mockShard,
      apiAddress: mockApiAddress
    });

    // Verify initializeNetworkConfig was called with the correct data
    expect(initializeNetworkConfig).toHaveBeenCalledWith({
      ...network,
      gasStationMetadata: {
        [mockShard]: {
          lastBlock: mockGasStationResponse.lastBlock,
          fast: mockGasStationResponse.fast,
          faster: mockGasStationResponse.faster
        }
      }
    });
  });
});
