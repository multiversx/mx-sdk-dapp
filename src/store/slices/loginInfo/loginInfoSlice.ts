import { StateCreator } from 'zustand/vanilla';
import { StoreType, MutatorsIn } from 'store/store.types';
import { LoginInfoSliceType } from './loginInfo.types';

export const initialState: LoginInfoSliceType = {
  providerType: null,
  walletConnectLogin: null,
  ledgerLogin: null,
  tokenLogin: null,
  loginExpiresAt: null
};

function getTokenInfoSlice(): StateCreator<
  StoreType,
  MutatorsIn,
  [],
  LoginInfoSliceType
> {
  return () => initialState;
}

export const loginInfoSlice = getTokenInfoSlice();
