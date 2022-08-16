import { Socket } from 'socket.io-client';

export const websocketConnection: {
  current: Socket | null;
  // Use the connection status to avoid multiple websocket connections
  status: 'not_initialized' | 'pending' | 'completed';
} = {
  current: null,
  status: 'not_initialized'
};
