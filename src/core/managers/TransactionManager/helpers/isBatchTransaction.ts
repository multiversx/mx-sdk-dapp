export const isBatchTransaction = <T>(
  transactions: T[] | T[][]
): transactions is T[][] => {
  return Array.isArray(transactions[0]);
};
