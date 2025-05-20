import { ITransactionListItem } from 'lib/sdkDappCoreUi';
import { getCachedItemSelector } from 'store/selectors/cacheSelector';
import { getStore } from 'store/store';

export const getCachedTransactionListItem = (
  hash: string
): ITransactionListItem | null => {
  const cachedTransaction = getCachedItemSelector<ITransactionListItem>(
    `transaction-${hash}`
  )(getStore().getState());

  return cachedTransaction ?? null;
};
