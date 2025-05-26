import { useStore } from 'zustand';
import { StoreApi } from 'zustand/vanilla';

type ExtractState<S> = S extends { getState: () => infer X } ? X : never;

/**
 *
 * @param store
 * @returns a hook that can be used to access the store in ReactJS context
 * */
export const createBoundedUseStore = ((store) => (selector) =>
  useStore(store, selector)) as <S extends StoreApi<unknown>>(
  store: S
) => {
  (): ExtractState<S>;
  <T>(selector: (state: ExtractState<S>) => T): T;
};
