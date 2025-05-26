import { getReactStore } from 'react/store/getReactStore';
import { StoreType } from 'store/store.types';

type ExtractState<S> = S extends { getState: () => infer T } ? T : StoreType;

export function useSelector<T>(
  selector: (state: ExtractState<StoreType>) => T
) {
  const useStore = getReactStore();
  return useStore(selector);
}
