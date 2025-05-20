export const pluralize = (str: string, itemCount: number): string =>
  itemCount === 1 ? str : `${str}s`;
