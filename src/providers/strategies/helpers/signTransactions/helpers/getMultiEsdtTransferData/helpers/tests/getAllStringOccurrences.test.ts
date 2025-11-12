import { getAllStringOccurrences } from '../getAllStringOccurrences';

describe('getAllStringOccurrences tests', () => {
  it('returns array of indices for all occurrences of a substring', () => {
    const sourceStr = 'hello@world@test@';
    const searchStr = '@';
    const result = getAllStringOccurrences(sourceStr, searchStr);

    expect(result).toEqual([5, 11, 16]);
  });
});
