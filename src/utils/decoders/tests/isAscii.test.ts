import { isAscii } from '../isAscii';

describe('isAscii', () => {
  it('should return false for strings with unknown characters', async () => {
    const result = isAscii(
      '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~��������������������������������������������������������������������������������������������������������������������������������'
    );
    expect(result).toStrictEqual(false);
  });

  it('should return false for strings with emojis', async () => {
    const result = isAscii('This ❌ h🅰s some 😱🙀 emojis inside');
    expect(result).toStrictEqual(false);
  });

  it('should return true for strings with symbols, letters, and numbers', async () => {
    const result = isAscii('ESDTTransfer@a129asnas98d@a9s8h98h9');
    expect(result).toStrictEqual(true);
  });

  it('should return true for simple strings with letters', async () => {
    const result = isAscii('Some example');
    expect(result).toStrictEqual(true);
  });
});
