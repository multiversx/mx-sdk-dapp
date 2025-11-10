import { io } from 'socket.io-client';
import { account } from '__mocks__/data/account';
import { network } from '__mocks__/data/storeData/network';
import { rest, server } from '__mocks__/server';
import { getWebsocketUrl } from 'apiCalls/websocket/getWebsocketUrl';
import {
  WebsocketConnectionStatusEnum,
  websocketConnection
} from 'constants/websocket.constants';
import { setWebsocketStatus } from 'store/actions/config/configActions';
import { networkSelector } from 'store/selectors';
import { getStore } from 'store/store';
import { initializeWebsocketConnection } from '../initializeWebsocketConnection';

jest.mock('socket.io-client');
jest.mock('store/store');
jest.mock('store/selectors');
jest.mock('store/actions/account/accountActions', () => ({
  setWebsocketBatchEvent: jest.fn(),
  setWebsocketEvent: jest.fn()
}));
jest.mock('store/actions/config/configActions');

describe('initializeWebsocketConnection tests', () => {
  let mockSocketInstance: any;
  let mockGetState: jest.Mock;

  beforeEach(() => {
    jest.resetAllMocks();
    jest.useFakeTimers();

    mockGetState = jest.fn().mockReturnValue({});
    (getStore as jest.Mock).mockReturnValue({
      getState: mockGetState
    });

    (networkSelector as jest.Mock).mockReturnValue({
      apiAddress: network.apiAddress,
      websocketUrl: undefined
    });

    mockSocketInstance = {
      on: jest.fn(),
      onAny: jest.fn(),
      off: jest.fn(),
      close: jest.fn(),
      active: false
    };

    (io as jest.Mock).mockReturnValue(mockSocketInstance);

    // Reset websocketConnection
    websocketConnection.instance = null;
    websocketConnection.status = WebsocketConnectionStatusEnum.NOT_INITIALIZED;
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should successfully initialize connection when conditions are met', async () => {
    const testAddress = account.address;

    const result = await initializeWebsocketConnection(testAddress);

    // Verify getWebsocketUrl was called with correct API address
    const websocketUrl = await getWebsocketUrl(network.apiAddress);
    expect(websocketUrl).toBeDefined();

    expect(io).toHaveBeenCalledWith(websocketUrl, {
      forceNew: true,
      reconnection: true,
      reconnectionAttempts: 3,
      reconnectionDelay: 500,
      timeout: 3000,
      query: { address: account.address }
    });
    expect(mockSocketInstance.onAny).toHaveBeenCalled();
    expect(mockSocketInstance.on).toHaveBeenCalledTimes(4);
    expect(setWebsocketStatus).toHaveBeenCalledWith(
      WebsocketConnectionStatusEnum.PENDING
    );
    expect(result).toHaveProperty('closeConnection');
  });

  it('should handle error when getWebsocketUrl fails', async () => {
    const testAddress = account.address;
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    // Override the server handler to return an error
    server.use(
      rest.get(`${network.apiAddress}/websocket/config`, (_req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ error: 'Server error' }));
      })
    );

    // This should throw an error since getWebsocketUrl will fail
    await expect(initializeWebsocketConnection(testAddress)).rejects.toThrow(
      'Can not get websocket url'
    );

    expect(consoleErrorSpy).toHaveBeenCalled();
    expect(io).not.toHaveBeenCalled();

    consoleErrorSpy.mockRestore();
  });
});
