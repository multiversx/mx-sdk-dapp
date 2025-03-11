import { Socket } from 'socket.io-client';

export enum WebsocketConnectionStatusEnum {
  NOT_INITIALIZED = 'NOT_INITIALIZED',
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED'
}

type StatusListenerType = (status: WebsocketConnectionStatusEnum) => void;

class WebsocketConnection {
  current: Socket | null = null;
  private _status: WebsocketConnectionStatusEnum =
    WebsocketConnectionStatusEnum.NOT_INITIALIZED;
  private listeners: StatusListenerType[] = [];

  get status(): WebsocketConnectionStatusEnum {
    return this._status;
  }

  set status(newStatus: WebsocketConnectionStatusEnum) {
    if (this._status !== newStatus) {
      this._status = newStatus;
      this.notifyListeners();
    }
  }

  subscribe(listener: StatusListenerType) {
    this.listeners.push(listener);
    return () => this.unsubscribe(listener);
  }

  unsubscribe(listener: StatusListenerType) {
    this.listeners = this.listeners.filter((l) => l !== listener);
  }

  private notifyListeners() {
    this.listeners.forEach((listener) => listener(this._status));
  }
}

export const websocketConnection = new WebsocketConnection();
