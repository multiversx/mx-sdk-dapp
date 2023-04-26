import { hasEmoji } from '../hasEmoji';

describe('hasEmoji', () => {
  it('should return true', async () => {
    const result = hasEmoji('Be kind 😊, smile, and be happy 🤗');
    expect(result).toStrictEqual(true);
  });

  it('should return true', async () => {
    const result = hasEmoji('This ❌ h🅰s some 😱 emojis inside');
    expect(result).toStrictEqual(true);
  });

  it('should return true', async () => {
    const result = hasEmoji('My Family 👨‍👩‍👧‍👦');
    expect(result).toStrictEqual(true);
  });

  it('should return true', async () => {
    const result = hasEmoji('test transaction 🙀');
    expect(result).toStrictEqual(true);
  });

  it('should return false', async () => {
    const result = hasEmoji('ESDTTransfer@a129asnas98d@a9s8h98h9');
    expect(result).toStrictEqual(false);
  });

  it('should return false', async () => {
    const result = hasEmoji('Some example');
    expect(result).toStrictEqual(false);
  });
});
