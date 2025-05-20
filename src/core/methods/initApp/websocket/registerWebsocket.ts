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
  closeConnectionRef: undefined as (() => void) | undefined
};

export async function registerWebsocketListener(address: string) {
  const { closeConnection } = await initializeWebsocketConnection(address);

  websocketManager.closeConnectionRef = closeConnection;
}
