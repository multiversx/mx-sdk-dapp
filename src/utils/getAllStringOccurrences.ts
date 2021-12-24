export const getAllStringOccurrences = (sourceStr: string, searchStr: string) =>
  [...sourceStr.matchAll(new RegExp(searchStr, 'gi'))].map((a) => a.index);
