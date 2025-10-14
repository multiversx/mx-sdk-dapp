import { StoreApi } from 'store/store';

// Minimal zustand-like store stub sufficient for ToastManager
export function createStoreStub(initialState: any): StoreApi {
  let state = initialState;
  const subscribers = new Set<(s: any, prev: any) => void>();

  return {
    getState: () => state,
    setState: (partial: any) => {
      const prev = state;
      state =
        typeof partial === 'function'
          ? { ...state, ...partial(state) }
          : { ...state, ...partial };
      subscribers.forEach((fn) => fn(state, prev));
    },
    subscribe: (fn: any) => {
      subscribers.add(fn);
      return () => subscribers.delete(fn);
    }
  } as unknown as StoreApi;
}

// Fakes for collaborators
export class FakeLifetimeManager {
  init = jest.fn();
  start = jest.fn();
  startWithCustomDuration = jest.fn();
  stop = jest.fn();
  destroy = jest.fn();
}

export class FakeUICoordinator {
  init = jest.fn().mockResolvedValue(undefined);
  publishTransactionToasts = jest.fn().mockResolvedValue(undefined);
  publishCustomToasts = jest.fn().mockResolvedValue(undefined);
  showToasts = jest.fn();
  hideToasts = jest.fn();
  destroy = jest.fn();
}
