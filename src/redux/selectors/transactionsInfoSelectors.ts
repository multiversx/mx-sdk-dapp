import { RootState } from '../store';

export const transactionsInfoSelectors = (state: RootState) =>
  state.transactionsInfo.info;
