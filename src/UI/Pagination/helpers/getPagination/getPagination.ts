import inRange from 'lodash/inRange';
import range from 'lodash/range';

import { ELLIPSIS } from 'constants/index';

export interface GetPaginationType {
  currentPage: number;
  totalPages: number;
}

export const getPagination = ({
  currentPage,
  totalPages
}: GetPaginationType) => {
  const maxSlots = 7;
  const previousPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const minBatchLength = 3;
  const maxBatchLength = 5;

  if (totalPages <= maxSlots) {
    return range(1, totalPages + 1).map((paginationItem) =>
      String(paginationItem)
    );
  }

  const trimBatch = (batch: number[], comparableBatch: number[]) =>
    batch.includes(currentPage)
      ? batch
      : batch.slice(0, maxSlots - comparableBatch.length - 1);

  const isLeftBatchInRange = inRange(
    nextPage - 1,
    minBatchLength,
    maxBatchLength
  );

  const isRightBatchInRange = inRange(
    previousPage + 1,
    totalPages - minBatchLength,
    totalPages - 1
  );

  const leftBatch = isLeftBatchInRange
    ? range(1, nextPage + 1)
    : range(1, maxBatchLength - 1);

  const rightBatch = isRightBatchInRange
    ? range(previousPage, totalPages + 1)
    : range(totalPages - minBatchLength + 1, totalPages + 1);

  const trimmedLeftBatch = trimBatch(leftBatch, rightBatch);
  const trimmedRightBatch = trimBatch(rightBatch.reverse(), leftBatch);
  const mergedEdgeBatches = trimmedLeftBatch.concat(trimmedRightBatch);
  const middleBatch = [ELLIPSIS, previousPage, currentPage, nextPage, ELLIPSIS];

  const [firstLeftBatchItem] = trimmedLeftBatch;
  const [firstRightBatchItem] = trimmedRightBatch;

  const paginationItems = mergedEdgeBatches.includes(currentPage)
    ? [...trimmedLeftBatch, ELLIPSIS, ...trimmedRightBatch.reverse()]
    : [firstLeftBatchItem, ...middleBatch, firstRightBatchItem];

  const paginationItemsAsStrings = paginationItems.map((paginationItem) =>
    String(paginationItem)
  );

  return paginationItemsAsStrings;
};
