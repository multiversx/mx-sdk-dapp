import { StateCreator } from 'zustand/vanilla';
import { StoreType, MutatorsIn } from 'store/store.types';
import { emptyNetwork } from './emptyNetwork';
import { NetworkSliceType } from './networkSlice.types';

const initialState: NetworkSliceType = {
  network: emptyNetwork
};

function getNetworkSlice(): StateCreator<
  StoreType,
  MutatorsIn,
  [],
  NetworkSliceType
> {
  return () => initialState;
}

export const networkSlice = getNetworkSlice();
