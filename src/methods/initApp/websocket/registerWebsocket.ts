import { networkSelector } from 'store/selectors/networkSelectors';
import { getState } from 'store/store';
import { initializeWebsocketConnection } from './initializeWebsocketConnection';

/**
 * Manages the WebSocket connection lifecycle.
 *
 * Holds a reference to the current WebSocket connection's `closeConnection` method,
 * allowing other parts of the application to close the connection on demand (e.g., on logout).
 *
 * This pattern avoids exporting mutable bindings directly by encapsulating
 * the reference within a stable object.
 *
 * @example
 * ```ts
 * await registerWebsocketListener(address);
 * websocketManager.closeConnectionRef?.();
 * ```
 */
export const websocketManager = {
  closeConnectionRef: undefined as (() => void) | undefined,
  connectionKey: undefined as string | undefined
};

const getConnectionKey = (address: string) => {
  const { apiAddress, websocketUrl } = networkSelector(getState());
  return `${websocketUrl ?? apiAddress}|${address}`;
};

export async function registerWebsocketListener(address: string) {
  const connectionKey = getConnectionKey(address);

  if (
    websocketManager.connectionKey != null &&
    websocketManager.connectionKey !== connectionKey
  ) {
    websocketManager.closeConnectionRef?.();
  }

  websocketManager.connectionKey = connectionKey;

  try {
    const { closeConnection } = await initializeWebsocketConnection(address);

    websocketManager.closeConnectionRef = () => {
      closeConnection();
      websocketManager.connectionKey = undefined;
    };
  } catch (error) {
    console.error(
      'Websocket unavailable, transactions are tracked by polling.',
      error
    );
    websocketManager.connectionKey = undefined;
  }
}
