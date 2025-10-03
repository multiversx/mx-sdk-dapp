import { ITransactionListItem } from 'lib/sdkDappUi';
import { getCachedItemSelector } from 'store/selectors/cacheSelector';
import { getState } from 'store/store';

export const getCachedTransactionListItem = (
  hash: string,
  store = getState()
): ITransactionListItem | null => {
  const cachedTransaction = getCachedItemSelector<ITransactionListItem>(
    `transaction-${hash}`
  )(store);

  return cachedTransaction ?? null;
};
