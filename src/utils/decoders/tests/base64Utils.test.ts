import { isStringBase64 } from '../base64Utils';

describe('isStringBase64', () => {
  it('should return true for base64 encoding of emoji string', async () => {
    const result = isStringBase64('dGVzdCB0cmFuc2FjdGlvbiDwn5mA');
    expect(result).toStrictEqual(true);
  });

  it('should return true for base64 encoding of another base64 encoding', async () => {
    const result = isStringBase64('ZEdWemRDQjBjbUZ1YzJGamRHbHZiaUR3bjVtQQ==');
    expect(result).toStrictEqual(true);
  });

  it('should return true for base64 string of non-ASCII characters', async () => {
    const result = isStringBase64(
      '8J+ZgCEiYWJjZDEyM3x9fu+/ve+/vfCfmYAxMzJkYXNk'
    );
    expect(result).toStrictEqual(true);
  });

  it('should return true for base64 encoding of @', async () => {
    const result = isStringBase64('bGVuZGVnYXRlQDAx');
    expect(result).toStrictEqual(true);
  });

  it('should return true for base64 encoding of chinese characters', async () => {
    const result = isStringBase64('5aeT5ZCN');
    expect(result).toStrictEqual(true);
  });

  it('should return false for simple uppercase letter word', async () => {
    const result = isStringBase64('TEST');
    expect(result).toStrictEqual(false);
  });

  it('should return false for simple lowercase letter word', async () => {
    const result = isStringBase64('test');
    expect(result).toStrictEqual(false);
  });

  it('should return false for number', async () => {
    const result = isStringBase64('1231434');
    expect(result).toStrictEqual(false);
  });

  it('should return false for simple letter word', async () => {
    const result = isStringBase64('TeSt');
    expect(result).toStrictEqual(false);
  });

  it('should return false for simple letter word with numbers', async () => {
    const result = isStringBase64('TeSt123');
    expect(result).toStrictEqual(false);
  });

  it('should return false for non-ASCII chinese string', async () => {
    const result = isStringBase64('姓名');
    expect(result).toStrictEqual(false);
  });

  it('should return false for non-ASCII string', async () => {
    const result = isStringBase64(
      '🙀!"#$%&\\() * +, -./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\\\]^_`abcdefghijklmnopqrstuvwxyz{|}~������'
    );
    expect(result).toStrictEqual(false);
  });

  it('should return false for atob equal to base64 conversion', async () => {
    const result = isStringBase64('fd');
    expect(result).toStrictEqual(false);
  });
});
