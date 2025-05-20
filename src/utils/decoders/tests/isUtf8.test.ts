import { isUtf8 } from '../isUtf8';

describe('isUtf8', () => {
  it('should return valid UTF-8', async () => {
    const result = isUtf8('dGVzdCB0cmFuc2FjdGlvbiDwn5mA');
    expect(result).toStrictEqual(true);
  });

  it('should also return valid UTF-8', async () => {
    const result = isUtf8('ZEdWemRDQjBjbUZ1YzJGamRHbHZiaUR3bjVtQQ==');
    expect(result).toStrictEqual(true);
  });

  it('should return invalid UTF-8', async () => {
    const result = isUtf8('test transaction 🙀');
    expect(result).toStrictEqual(false);
  });

  it('should return also invalid UTF-8', async () => {
    const result = isUtf8('��-');
    expect(result).toStrictEqual(false);
  });
});
