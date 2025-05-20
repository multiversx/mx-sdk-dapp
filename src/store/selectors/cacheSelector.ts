import { StoreType } from 'store/store.types';

export const cacheSliceSelector = ({ cache }: StoreType) => cache;

export const getCachedItemSelector =
  <T>(key: string) =>
  ({ cache }: StoreType): T | undefined =>
    cache[key] as T;
