import { isAscii } from '../isAscii';

describe('isAscii', () => {
  it('should return true', async () => {
    const result = isAscii(
      '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~��������������������������������������������������������������������������������������������������������������������������������'
    );
    expect(result).toStrictEqual(false);
  });

  it('should return true', async () => {
    const result = isAscii('This ❌ h🅰s some 😱 emojis inside');
    expect(result).toStrictEqual(false);
  });

  it('should return true', async () => {
    const result = isAscii('My Family 👨‍👩‍👧‍👦');
    expect(result).toStrictEqual(false);
  });

  it('should return true', async () => {
    const result = isAscii('test transaction 🙀');
    expect(result).toStrictEqual(false);
  });

  it('should return false', async () => {
    const result = isAscii('ESDTTransfer@a129asnas98d@a9s8h98h9');
    expect(result).toStrictEqual(true);
  });

  it('should return false', async () => {
    const result = isAscii('Some example');
    expect(result).toStrictEqual(true);
  });
});
