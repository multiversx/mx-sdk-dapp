import { PayloadAction } from '@reduxjs/toolkit';
import { LedgerLoginType, LoginInfoStateType } from '../types';

export const setLedgerLogin = (
  state: LoginInfoStateType,
  action: PayloadAction<LedgerLoginType>
) => {
  state.ledgerLogin = action.payload;
};
