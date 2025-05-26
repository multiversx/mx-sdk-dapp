import { Address } from 'lib/sdkCore';
import { getShardOfAddress } from '../helpers/getShardOfAddress';

describe('getShardOfAddress', () => {
  it('should return 0 for address on shard 0', () => {
    const address =
      'erd1mdvj4jt6hv83pedd080zlvlug2raax3u97dv6y08qnexwm0qkcwqruh0m4';
    expect(getShardOfAddress(new Address(address).pubkey())).toBe(0);
  });

  it('should return 1 for address on shard 1', () => {
    const address =
      'erd1dp96nx38nkw46urz9m4scax45rh9qc7aqctfe972vdeuq385d2zskvgvwt';
    expect(getShardOfAddress(new Address(address).pubkey())).toBe(1);
  });

  it('should return 2 for address on shard 2', () => {
    const address =
      'erd1dzmvw7gfrfv6tjxvah9rmwd45xqzs6q098925ucmsu69s48776dqlytnn2';
    expect(getShardOfAddress(new Address(address).pubkey())).toBe(2);
  });
});
