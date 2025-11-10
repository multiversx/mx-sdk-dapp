import { io } from 'socket.io-client';
import { account } from '__mocks__/data/account';
import { network } from '__mocks__/data/storeData/network';
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
jest.mock('apiCalls/websocket/getWebsocketUrl');
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
    (getWebsocketUrl as jest.Mock).mockResolvedValue(
      'wss://test-websocket.com'
    );

    const result = await initializeWebsocketConnection(testAddress);

    expect(getWebsocketUrl).toHaveBeenCalledWith(network.apiAddress);
    expect(io).toHaveBeenCalledWith('wss://test-websocket.com', {
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
});
