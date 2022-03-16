export const getAllStringOccurrences = (
  sourceStr: string,
  searchStr: string
) => {
  const startingIndices = [];

  let indexOccurence = sourceStr.indexOf(searchStr, 0);

  while (indexOccurence >= 0) {
    startingIndices.push(indexOccurence);
    indexOccurence = sourceStr.indexOf(searchStr, indexOccurence + 1);
  }

  return startingIndices;
};
