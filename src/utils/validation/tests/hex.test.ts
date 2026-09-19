import { getHexValidationWarnings } from 'utils/transactions/getDecodedDataField/helpers/getHexValidationWarnings';
import { isHexValidCharacters } from '../hex';

describe('isHexValidCharacters', () => {
  it.each(['00', 'abcdef', 'ABCDEF', '0123456789'])('accepts %s', (value) => {
    expect(isHexValidCharacters(value)).toBe(true);
  });

  it.each(['0g', 'xyz', '12 34', ''])('rejects "%s"', (value) => {
    expect(isHexValidCharacters(value)).toBe(false);
  });

  it('warns about a part that is only partly hex', () => {
    expect(getHexValidationWarnings('0g')).not.toHaveLength(0);
  });
});
