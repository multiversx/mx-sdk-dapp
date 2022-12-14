import axios from 'axios';
import MockAdapter, { RequestHandler } from 'axios-mock-adapter';
import { nativeAuth } from '../nativeAuth';

describe('Native Auth', () => {
  let mock: MockAdapter;
  const ADDRESS =
    'erd13rrn3fwjds8r5260n6q3pd2qa6wqkudrhczh26d957c0edyzermshds0k8';
  const HOST = 'elrond.com';
  const SIGNATURE =
    '4b445f287663b868e269aa0532c9fd73acb37cfd45f46e33995777e68e5ecc15d97318d9af09c4102f9b40ecf347a75e2d2e81acbcc3c72ae32fcf659c2acd0e';
  const BLOCK_HASH =
    'b3d07565293fd5684c97d2b96eb862d124fd698678f3f95b2515ed07178a27b4';
  const TTL = 86400;
  const TOKEN = `ZWxyb25kLmNvbQ.${BLOCK_HASH}.${TTL}.e30`;
  const ACCESS_TOKEN =
    'ZXJkMTNycm4zZndqZHM4cjUyNjBuNnEzcGQycWE2d3FrdWRyaGN6aDI2ZDk1N2MwZWR5emVybXNoZHMwazg.Wld4eWIyNWtMbU52YlEuYjNkMDc1NjUyOTNmZDU2ODRjOTdkMmI5NmViODYyZDEyNGZkNjk4Njc4ZjNmOTViMjUxNWVkMDcxNzhhMjdiNC44NjQwMC5lMzA.4b445f287663b868e269aa0532c9fd73acb37cfd45f46e33995777e68e5ecc15d97318d9af09c4102f9b40ecf347a75e2d2e81acbcc3c72ae32fcf659c2acd0e';

  const onLatestBlockHashGet = function (mock: MockAdapter): RequestHandler {
    return mock.onGet(
      'https://api.elrond.com/blocks?size=1&fields=hash,timestamp'
    );
  };

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  describe('Client', () => {
    it('Latest block should return signable token', async () => {
      const client = nativeAuth({
        hostname: HOST,
        apiAddress: 'https://api.elrond.com'
      });

      onLatestBlockHashGet(mock).reply(200, [{ hash: BLOCK_HASH }]);

      const token = await client.initialize();

      expect(token).toStrictEqual(TOKEN);
    });

    it('Internal server error', async () => {
      onLatestBlockHashGet(mock).reply(500);

      const client = nativeAuth({
        hostname: HOST,
        apiAddress: 'https://api.elrond.com'
      });

      await expect(client.initialize()).rejects.toThrow();
    });

    it('Generate Access token', () => {
      const client = nativeAuth({
        hostname: HOST,
        apiAddress: 'https://api.elrond.com'
      });

      const accessToken = client.getToken({
        address: ADDRESS,
        token: TOKEN,
        signature: SIGNATURE
      });

      expect(accessToken).toStrictEqual(ACCESS_TOKEN);
    });
  });
});
