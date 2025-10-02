import { ITransactionListItem } from 'lib/sdkDappUi';
import { getCachedItemSelector } from 'store/selectors/cacheSelector';
import { getStore } from 'store/store';

export const getCachedTransactionListItem = (
  hash: string,
  store = getStore().getState()
): ITransactionListItem | null => {
  const cachedTransaction = getCachedItemSelector<ITransactionListItem>(
    `transaction-${hash}`
  )(store);

  return cachedTransaction ?? null;
};
