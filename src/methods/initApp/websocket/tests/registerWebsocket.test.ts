import { networkSelector } from 'store/selectors/networkSelectors';
import { initializeWebsocketConnection } from '../initializeWebsocketConnection';
import {
  registerWebsocketListener,
  websocketManager
} from '../registerWebsocket';

jest.mock('store/store', () => ({
  getState: jest.fn()
}));
jest.mock('store/selectors/networkSelectors');
jest.mock('../initializeWebsocketConnection');

const mockInitializeWebsocketConnection =
  initializeWebsocketConnection as jest.Mock;
const mockNetworkSelector = networkSelector as jest.Mock;

describe('registerWebsocketListener', () => {
  let closeConnection: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
    websocketManager.closeConnectionRef = undefined;
    websocketManager.connectionKey = undefined;
    closeConnection = jest.fn();
    mockInitializeWebsocketConnection.mockResolvedValue({ closeConnection });
    mockNetworkSelector.mockReturnValue({
      apiAddress: 'https://devnet-api.multiversx.com'
    });
  });

  it('keeps the connection when the address is unchanged', async () => {
    await registerWebsocketListener('erd1first');
    await registerWebsocketListener('erd1first');

    expect(closeConnection).not.toHaveBeenCalled();
  });

  it('closes the previous connection when the address changes', async () => {
    await registerWebsocketListener('erd1first');
    await registerWebsocketListener('erd1second');

    expect(closeConnection).toHaveBeenCalledTimes(1);
    expect(mockInitializeWebsocketConnection).toHaveBeenLastCalledWith(
      'erd1second'
    );
  });

  it('closes the previous connection when the network changes', async () => {
    await registerWebsocketListener('erd1first');

    mockNetworkSelector.mockReturnValue({
      apiAddress: 'https://testnet-api.multiversx.com'
    });
    await registerWebsocketListener('erd1first');

    expect(closeConnection).toHaveBeenCalledTimes(1);
  });

  it('does not close again after an explicit close', async () => {
    await registerWebsocketListener('erd1first');
    websocketManager.closeConnectionRef?.();
    closeConnection.mockClear();

    await registerWebsocketListener('erd1second');

    expect(closeConnection).not.toHaveBeenCalled();
  });

  it('does not propagate a websocket that cannot be started', async () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    mockInitializeWebsocketConnection.mockRejectedValue(
      new Error('Can not get websocket url')
    );

    await expect(
      registerWebsocketListener('erd1first')
    ).resolves.toBeUndefined();

    expect(websocketManager.closeConnectionRef).toBeUndefined();
    expect(consoleSpy).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });

  it('connects again after a failed attempt', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    mockInitializeWebsocketConnection.mockRejectedValueOnce(new Error('down'));

    await registerWebsocketListener('erd1first');
    await registerWebsocketListener('erd1first');

    expect(mockInitializeWebsocketConnection).toHaveBeenCalledTimes(2);
  });
});
