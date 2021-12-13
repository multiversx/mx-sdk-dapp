import { RootState } from '../store';

export const transactionsInfoSelector = (state: RootState) =>
  state.transactionsInfo.info;
