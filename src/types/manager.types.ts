export interface IEventBus<T> {
  subscribe(event: string, callback: Function): void;
  publish(event: string, data: T): void;
  unsubscribe(event: string, callback: Function): void;
}
