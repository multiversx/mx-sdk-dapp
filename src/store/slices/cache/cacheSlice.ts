import { StateCreator } from 'zustand/vanilla';
import { StoreType, MutatorsIn } from 'store/store.types';
import { CacheSliceType } from './cacheSlice.types';

export const initialState: CacheSliceType = {};

function getCacheSlice(): StateCreator<
  StoreType,
  MutatorsIn,
  [],
  CacheSliceType
> {
  return () => initialState;
}

export const cacheSlice = getCacheSlice();
