import { getUnHighlightedDataFieldParts } from '../getUnHighlightedDataFieldParts';

describe('getUnHighlightedDataFieldParts tests', () => {
  it('should show correctly for first occurrence when present in the middle', () => {
    const firstOccurrenceIndex = 5;
    const lastOccurrenceIndex = 11;

    const { start, end } = getUnHighlightedDataFieldParts({
      data: 'StartMiddleMiddleEnd',
      highlight: 'Middle',
      occurrences: [firstOccurrenceIndex, lastOccurrenceIndex],
      transactionIndex: 0
    });

    expect(start).toStrictEqual('Start');
    expect(end).toStrictEqual('MiddleEnd');
  });

  it('should show correctly for last occurrence when present in the middle', () => {
    const firstOccurrenceIndex = 5;
    const lastOccurrenceIndex = 11;

    const { start, end } = getUnHighlightedDataFieldParts({
      data: 'StartMiddleMiddleEnd',
      highlight: 'Middle',
      occurrences: [firstOccurrenceIndex, lastOccurrenceIndex],
      transactionIndex: 1
    });

    expect(start).toStrictEqual('StartMiddle');
    expect(end).toStrictEqual('End');
  });

  it('should show correctly for first occurrence when present in the beginning', () => {
    const firstOccurrenceIndex = 0;
    const lastOccurrenceIndex = 6;

    const { start, end } = getUnHighlightedDataFieldParts({
      data: 'MiddleMiddleEnd',
      highlight: 'Middle',
      occurrences: [firstOccurrenceIndex, lastOccurrenceIndex],
      transactionIndex: 0
    });

    expect(start).toStrictEqual('');
    expect(end).toStrictEqual('MiddleEnd');
  });

  it('should show correctly for second occurrence when present in the beginning', () => {
    const firstOccurrenceIndex = 0;
    const lastOccurrenceIndex = 6;

    const { start, end } = getUnHighlightedDataFieldParts({
      data: 'MiddleMiddleEnd',
      highlight: 'Middle',
      occurrences: [firstOccurrenceIndex, lastOccurrenceIndex],
      transactionIndex: 1
    });

    expect(start).toStrictEqual('Middle');
    expect(end).toStrictEqual('End');
  });

  it('should show correctly for first occurrence when present in the end', () => {
    const firstOccurrenceIndex = 5;
    const lastOccurrenceIndex = 11;

    const { start, end } = getUnHighlightedDataFieldParts({
      data: 'StartMiddleMiddle',
      highlight: 'Middle',
      occurrences: [firstOccurrenceIndex, lastOccurrenceIndex],
      transactionIndex: 0
    });

    expect(start).toStrictEqual('Start');
    expect(end).toStrictEqual('Middle');
  });

  it('should show correctly for second occurrence when present in the end', () => {
    const firstOccurrenceIndex = 5;
    const lastOccurrenceIndex = 11;

    const { start, end } = getUnHighlightedDataFieldParts({
      data: 'StartMiddleMiddle',
      highlight: 'Middle',
      occurrences: [firstOccurrenceIndex, lastOccurrenceIndex],
      transactionIndex: 1
    });

    expect(start).toStrictEqual('StartMiddle');
    expect(end).toStrictEqual('');
  });
});
