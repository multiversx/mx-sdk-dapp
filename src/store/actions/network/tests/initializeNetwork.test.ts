import { getNetworkConfigFromApi } from 'apiCalls/configuration/getNetworkConfigFromApi';
import { getServerConfiguration } from 'apiCalls/configuration/getServerConfiguration';
import { networkSelector } from 'store/selectors/networkSelectors';
import { emptyNetwork } from 'store/slices/network/emptyNetwork';
import { getState } from 'store/store';
import { EnvironmentsEnum } from 'types/enums.types';
import { initializeNetwork } from '../initializeNetwork';
import { initializeNetworkConfig } from '../networkActions';

jest.mock('apiCalls/configuration/getNetworkConfigFromApi', () => ({
  getNetworkConfigFromApi: jest.fn()
}));

jest.mock('apiCalls/configuration/getServerConfiguration', () => ({
  getServerConfiguration: jest.fn()
}));

const apiAddress = 'https://api.custom.example';

describe('initializeNetwork', () => {
  let warnSpy: jest.SpyInstance;

  beforeEach(() => {
    jest.clearAllMocks();
    (getServerConfiguration as jest.Mock).mockResolvedValue(null);
    warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => null);
  });

  afterEach(() => {
    warnSpy.mockRestore();
  });

  it('reads the round duration of a custom network from its api', async () => {
    (getNetworkConfigFromApi as jest.Mock).mockResolvedValue({
      erd_round_duration: 6000
    });

    const config = await initializeNetwork({
      customNetworkConfig: { apiAddress }
    });

    expect(getNetworkConfigFromApi).toHaveBeenCalledWith(apiAddress);
    expect(config.roundDuration).toBe(6000);
  });

  it('keeps a configured round duration', async () => {
    const config = await initializeNetwork({
      customNetworkConfig: { apiAddress, roundDuration: 4000 }
    });

    expect(getNetworkConfigFromApi).not.toHaveBeenCalled();
    expect(config.roundDuration).toBe(4000);
  });

  it('keeps the default when the api does not return one', async () => {
    (getNetworkConfigFromApi as jest.Mock).mockResolvedValue(null);

    const config = await initializeNetwork({
      customNetworkConfig: { apiAddress }
    });

    expect(config.roundDuration).toBe(emptyNetwork.roundDuration);
  });
});
