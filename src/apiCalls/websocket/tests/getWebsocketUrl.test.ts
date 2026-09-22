import axios from 'axios';
import { getWebsocketUrl } from '../getWebsocketUrl';

jest.mock('axios');

const mockedGet = axios.get as jest.Mock;

describe('getWebsocketUrl', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'error').mockImplementation(() => null);
  });

  afterEach(() => jest.restoreAllMocks());

  it('builds a wss url from the host the api returns', async () => {
    mockedGet.mockResolvedValue({ data: { url: 'devnet-api.multiversx.com' } });

    await expect(
      getWebsocketUrl('https://devnet-api.multiversx.com')
    ).resolves.toEqual('wss://devnet-api.multiversx.com');
  });

  it('keeps a path segment the api supplies', async () => {
    mockedGet.mockResolvedValue({ data: { url: 'api.multiversx.com/socket' } });

    await expect(
      getWebsocketUrl('https://api.multiversx.com')
    ).resolves.toEqual('wss://api.multiversx.com/socket');
  });

  it.each([
    'different.example?x=1',
    'user:pass@different.example',
    'https://different.example',
    'api.multiversx.com#@different.example',
    ''
  ])('rejects the unexpected url %p returned by the api', async (url) => {
    mockedGet.mockResolvedValue({ data: { url } });

    await expect(getWebsocketUrl('https://api.multiversx.com')).rejects.toThrow(
      'Can not get websocket url'
    );
  });

  it('rejects a missing url', async () => {
    mockedGet.mockResolvedValue({ data: {} });

    await expect(getWebsocketUrl('https://api.multiversx.com')).rejects.toThrow(
      'Can not get websocket url'
    );
  });

  it('accepts a url that already carries the wss scheme', async () => {
    mockedGet.mockResolvedValue({
      data: { url: 'wss://socket.example.com' }
    });

    await expect(
      getWebsocketUrl('https://api.multiversx.com')
    ).resolves.toEqual('wss://socket.example.com');
  });

  it('rejects a url that carries an insecure scheme', async () => {
    mockedGet.mockResolvedValue({ data: { url: 'ws://socket.example.com' } });

    await expect(
      getWebsocketUrl('https://api.multiversx.com')
    ).rejects.toThrow();
  });
});
