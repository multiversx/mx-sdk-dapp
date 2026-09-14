import { testAddress } from '__mocks__/accountConfig';
import {
  isLoginTokenMessage,
  isLoginTokenMessageForOrigin
} from '../isLoginTokenMessageForOrigin';

const CHILD_ORIGIN = 'https://child.example.com';
const OTHER_ORIGIN = 'https://other.example.com';
const BLOCK_HASH =
  'f2d0897d0ca185a884349b10842a9fe4c749472d75cee30e311a82de29acd52b';

const encodeBase64Url = (value: string) =>
  Buffer.from(value, 'utf8')
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

const createLoginToken = (origin: string) =>
  `${encodeBase64Url(origin)}.${BLOCK_HASH}.86400.${encodeBase64Url(
    JSON.stringify({ timestamp: 1677588786 })
  )}`;

describe('isLoginTokenMessage', () => {
  it('detects login token pre-images', () => {
    expect(
      isLoginTokenMessage(`${testAddress}${createLoginToken(CHILD_ORIGIN)}`)
    ).toBe(true);
  });

  it('ignores regular messages', () => {
    expect(isLoginTokenMessage('Hello world')).toBe(false);
    expect(isLoginTokenMessage('Sign in to example.com at 12.5.2024')).toBe(
      false
    );
    expect(isLoginTokenMessage(undefined as unknown as string)).toBe(false);
  });
});

describe('isLoginTokenMessageForOrigin', () => {
  it('accepts a login token issued for the requesting origin', () => {
    expect(
      isLoginTokenMessageForOrigin({
        address: testAddress,
        message: `${testAddress}${createLoginToken(CHILD_ORIGIN)}`,
        origin: CHILD_ORIGIN
      })
    ).toBe(true);
  });

  it('rejects an origin that is not base64url encoded', () => {
    const paddedToken = createLoginToken(CHILD_ORIGIN).replace(
      encodeBase64Url(CHILD_ORIGIN),
      `${encodeBase64Url(CHILD_ORIGIN)}==`
    );

    expect(
      isLoginTokenMessageForOrigin({
        address: testAddress,
        message: `${testAddress}${paddedToken}`,
        origin: CHILD_ORIGIN
      })
    ).toBe(false);
  });

  it('rejects a login token issued for another origin', () => {
    expect(
      isLoginTokenMessageForOrigin({
        address: testAddress,
        message: `${testAddress}${createLoginToken(OTHER_ORIGIN)}`,
        origin: CHILD_ORIGIN
      })
    ).toBe(false);
  });

  it('rejects a different address representation', () => {
    expect(
      isLoginTokenMessageForOrigin({
        address: testAddress,
        message: `${testAddress.toUpperCase()}${createLoginToken(
          CHILD_ORIGIN
        )}`,
        origin: CHILD_ORIGIN
      })
    ).toBe(false);
  });

  it('rejects values that are not login tokens', () => {
    expect(
      isLoginTokenMessageForOrigin({
        address: testAddress,
        message: `${testAddress}not-a-token`,
        origin: CHILD_ORIGIN
      })
    ).toBe(false);
  });
});
