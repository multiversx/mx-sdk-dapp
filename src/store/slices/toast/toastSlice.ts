import { StateCreator } from 'zustand/vanilla';
import { StoreType, MutatorsIn } from 'store/store.types';
import { ToastsSliceType } from './toastSlice.types';

export const initialState: ToastsSliceType = {
  customToasts: [],
  transactionToasts: []
};

function getToastSlice(): StateCreator<
  StoreType,
  MutatorsIn,
  [],
  ToastsSliceType
> {
  return () => initialState;
}

export const toastSlice = getToastSlice();
