import { ITransactionListItem } from 'lib/sdkDappUi';
import { getCachedItemSelector } from 'store/selectors/cacheSelector';
import { getState } from 'store/store';
import { StoreType } from 'store/store.types';

export const getCachedTransactionListItem = (
  hash: string,
  store?: StoreType
): ITransactionListItem | null => {
  const cachedTransaction = getCachedItemSelector<ITransactionListItem>(
    `transaction-${hash}`
  )(store ?? getState());

  return cachedTransaction ?? null;
};
