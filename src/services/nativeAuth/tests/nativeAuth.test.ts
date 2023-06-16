import axios from 'axios';
import MockAdapter, { RequestHandler } from 'axios-mock-adapter';
import { nativeAuth } from '../nativeAuth';

describe('Native Auth', () => {
  let mock: MockAdapter;
  const ADDRESS =
    'erd13rrn3fwjds8r5260n6q3pd2qa6wqkudrhczh26d957c0edyzermshds0k8';
  const ORIGIN = 'multiversx.com';
  const SIGNATURE =
    '4b445f287663b868e269aa0532c9fd73acb37cfd45f46e33995777e68e5ecc15d97318d9af09c4102f9b40ecf347a75e2d2e81acbcc3c72ae32fcf659c2acd0e';
  const BLOCK_HASH =
    'b3d07565293fd5684c97d2b96eb862d124fd698678f3f95b2515ed07178a27b4';
  const TTL = 86400;
  const ROUND = 6391457;
  const TOKEN = `bXVsdGl2ZXJzeC5jb20.${BLOCK_HASH}.${TTL}.eyJ0aW1lc3RhbXAiOjE2ODZ9`;
  const ACCESS_TOKEN =
    'ZXJkMTNycm4zZndqZHM4cjUyNjBuNnEzcGQycWE2d3FrdWRyaGN6aDI2ZDk1N2MwZWR5emVybXNoZHMwazg.YlhWc2RHbDJaWEp6ZUM1amIyMC5iM2QwNzU2NTI5M2ZkNTY4NGM5N2QyYjk2ZWI4NjJkMTI0ZmQ2OTg2NzhmM2Y5NWIyNTE1ZWQwNzE3OGEyN2I0Ljg2NDAwLmV5SjBhVzFsYzNSaGJYQWlPakUyT0RaOQ.4b445f287663b868e269aa0532c9fd73acb37cfd45f46e33995777e68e5ecc15d97318d9af09c4102f9b40ecf347a75e2d2e81acbcc3c72ae32fcf659c2acd0e';
  const onLatestBlockHashGetAPI = function (mock: MockAdapter): RequestHandler {
    return mock.onGet(
      `https://api.multiversx.com/blocks/latest?ttl=${TTL}&fields=hash`
    );
  };

  const onLatestBlockHashGetGateway = function (
    mock: MockAdapter
  ): RequestHandler {
    return mock.onGet(
      `https://gateway.multiversx.com//blocks/by-round/${ROUND}`
    );
  };
  let timestampSpy: jest.SpyInstance;
  const currentTimestamp = 1686847;

  beforeEach(() => {
    timestampSpy = jest.spyOn(Date, 'now').mockReturnValue(currentTimestamp);
  });

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    timestampSpy.mockRestore();
    mock.reset();
  });

  describe('Client', () => {
    it('Latest block should return signable token - API', async () => {
      const client = nativeAuth({
        origin: ORIGIN,
        apiAddress: 'https://api.multiversx.com'
      });

      onLatestBlockHashGetAPI(mock).reply(200, [{ hash: BLOCK_HASH }]);

      const token = await client.initialize();

      expect(token).toStrictEqual(TOKEN);
    });

    it('Latest block should return signable token - Gateway', async () => {
      const client = nativeAuth({
        origin: ORIGIN,
        apiAddress: 'https://api.multiversx.com',
        gatewayUrl: 'https://gateway.multiversx.com/',
        blockHashShard: 1
      });

      onLatestBlockHashGetGateway(mock).reply(200, [{ hash: BLOCK_HASH }]);

      const token = await client.initialize();

      expect(token).toStrictEqual(TOKEN);
    });

    it('Internal server error', async () => {
      onLatestBlockHashGetAPI(mock).reply(500);

      //this will make sure to expire the cache
      jest
        .useFakeTimers()
        .setSystemTime(new Date().setSeconds(new Date().getSeconds() + 60));
      const client = nativeAuth({
        origin: ORIGIN,
        apiAddress: 'https://api.multiversx.com'
      });

      await expect(client.initialize()).rejects.toThrow();
    });

    it('Generate Access token', () => {
      const client = nativeAuth({
        origin: ORIGIN,
        apiAddress: 'https://api.multiversx.com'
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
