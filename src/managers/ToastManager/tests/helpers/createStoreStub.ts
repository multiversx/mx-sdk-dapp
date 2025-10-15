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
