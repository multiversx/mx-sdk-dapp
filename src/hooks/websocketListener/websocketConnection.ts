import { Socket } from 'socket.io-client';

export enum WebsocketConnectionStatusEnum {
  NOT_INITIALIZED = 'not_initialized',
  PENDING = 'pending',
  COMPLETED = 'completed'
}

export const websocketConnection: {
  current: Socket | null;
  // Use the connection status to avoid multiple websocket connections
  status: WebsocketConnectionStatusEnum;
} = {
  current: null,
  status: WebsocketConnectionStatusEnum.NOT_INITIALIZED
};
