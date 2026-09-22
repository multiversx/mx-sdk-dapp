import { fallbackNetworkConfigurations } from '../network.constants';

describe('fallbackNetworkConfigurations', () => {
  it('only points to https urls', () => {
    Object.values(fallbackNetworkConfigurations).forEach((network) => {
      Object.entries(network).forEach(([key, value]) => {
        if (typeof value !== 'string' || !value.includes('://')) {
          return;
        }

        expect(`${key}: ${value}`).toMatch(/: https:\/\//);
      });
    });
  });
});
