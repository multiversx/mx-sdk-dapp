export const getUnHighlightedDataFieldParts = ({
  data,
  highlight,
  occurrences,
  transactionIndex
}: {
  data: string;
  highlight: string;
  occurrences: number[];
  transactionIndex: number;
}) => {
  const highlightIndex =
    occurrences[transactionIndex] || data.indexOf(highlight);
  const highlightLength = highlight.length;
  const start = data.slice(0, highlightIndex);
  const end = data.slice(highlightIndex + highlightLength);

  return {
    start,
    end
  };
};
