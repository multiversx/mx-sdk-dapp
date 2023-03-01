import { decodeLoginToken } from '../decodeLoginToken';

const loginToken =
  'bG9jYWxob3N0.f2d0897d0ca185a884349b10842a9fe4c749472d75cee30e311a82de29acd52b.86400.eyJ0aW1lc3RhbXAiOjE2Nzc1ODg3ODZ9';

describe('decodeLoginToken tests', () => {
  it('decodes loginToken token', () => {
    const parsed = decodeLoginToken(loginToken);
    expect(parsed).toStrictEqual({
      blockHash:
        'f2d0897d0ca185a884349b10842a9fe4c749472d75cee30e311a82de29acd52b',
      extraInfo: {
        timestamp: 1677588786
      },
      origin: 'localhost',
      ttl: 86400
    });
  });
  it('decodes empty', () => {
    const parsed = decodeLoginToken('');
    expect(parsed).toStrictEqual(null);
  });
  it('decodes invalid', () => {
    const parsed = decodeLoginToken('invalid');
    expect(parsed).toStrictEqual(null);
  });
});
