import { capitalize } from '../capitalize';

describe('capitalize tests', () => {
  const str = 'multiversX';

  it('capitalizes the word correctly', () => {
    expect(capitalize(str)).toStrictEqual('MultiversX');
  });
});
