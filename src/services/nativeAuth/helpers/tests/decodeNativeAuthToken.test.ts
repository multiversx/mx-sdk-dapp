import { decodeNativeAuthToken } from '../decodeNativeAuthToken';

const nativeAuthToken =
  'ZXJkMWRtOXV4cGY1YXdrbjd1aGp1N3pqbjlsZGUwZGhhaHkwcWF4cXFsdTI2eGN1dXcyN3FxcnNxZm1lajM.Ykc5allXeG9iM04wLjk1NWJlODgyMTc5ODVjNTFkMTIxYzUxZTExYTdmN2E3ZWI2OGVhYjBiOWEzOThiMDc3ZTcyNGUyYzJiNjRiOTUuODY0MDAuZXlKMGFXMWxjM1JoYlhBaU9qRTJOamszTXpBNU16Ujk.31c394d9b8532a412a707e22dbba20e87f3c9029df02b6b8d28857736059134419cf2ceb5340e83cab882d991771f629b2d4baca3d6f55a1ee31278a312f4707';

describe('decodeNativeAuthToken tests', () => {
  it('decodes nativeAuthToken token', () => {
    const parsed = decodeNativeAuthToken(nativeAuthToken);
    expect(parsed).toStrictEqual({
      address: 'erd1dm9uxpf5awkn7uhju7zjn9lde0dhahy0qaxqqlu26xcuuw27qqrsqfmej3',
      blockHash:
        '955be88217985c51d121c51e11a7f7a7eb68eab0b9a398b077e724e2c2b64b95',
      body: 'bG9jYWxob3N0.955be88217985c51d121c51e11a7f7a7eb68eab0b9a398b077e724e2c2b64b95.86400.eyJ0aW1lc3RhbXAiOjE2Njk3MzA5MzR9',
      extraInfo: {
        timestamp: 1669730934
      },
      origin: 'localhost',
      signature:
        '31c394d9b8532a412a707e22dbba20e87f3c9029df02b6b8d28857736059134419cf2ceb5340e83cab882d991771f629b2d4baca3d6f55a1ee31278a312f4707',
      ttl: 86400
    });
  });
  it('decodes null', () => {
    const parsed = decodeNativeAuthToken(null as any);
    expect(parsed).toStrictEqual(null);
  });
  it('decodes empty', () => {
    const parsed = decodeNativeAuthToken('');
    expect(parsed).toStrictEqual(null);
  });
  it('decodes invalid', () => {
    const parsed = decodeNativeAuthToken('invalid');
    expect(parsed).toStrictEqual(null);
  });
  it('decodes undefined', () => {
    const parsed = decodeNativeAuthToken(undefined);
    expect(parsed).toStrictEqual(null);
  });
});
