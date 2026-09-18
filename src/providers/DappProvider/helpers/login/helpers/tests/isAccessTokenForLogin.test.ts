import { getUnixTimestamp } from 'utils/dateTime/getUnixTimestamp';
import { isAccessTokenForLogin } from '../isAccessTokenForLogin';

const address =
  'erd1dm9uxpf5awkn7uhju7zjn9lde0dhahy0qaxqqlu26xcuuw27qqrsqfmej3';
const otherAddress =
  'erd1qqqqqqqqqqqqqpgqp699jngundfqw07d8jzkepucvpzush6k3wvqyc44rx';
const origin = 'https://localhost:3000';
const blockHash =
  '955be88217985c51d121c51e11a7f7a7eb68eab0b9a398b077e724e2c2b64b95';
const signature = 'ab'.repeat(64);

const encode = (value: string) =>
  Buffer.from(value).toString('base64').replace(/=+$/, '');

const buildAccessToken = ({
  tokenAddress = address,
  tokenOrigin = origin,
  timestamp = getUnixTimestamp(),
  ttl = 86400
} = {}) => {
  const body = [
    encode(tokenOrigin),
    blockHash,
    ttl,
    encode(JSON.stringify({ timestamp }))
  ].join('.');

  return [encode(tokenAddress), encode(body), signature].join('.');
};

describe('isAccessTokenForLogin', () => {
  it('accepts a token issued to the login address, for this origin', () => {
    expect(
      isAccessTokenForLogin({
        accessToken: buildAccessToken(),
        address,
        origin
      })
    ).toBe(true);
  });

  it('rejects a missing token', () => {
    expect(
      isAccessTokenForLogin({ accessToken: undefined, address, origin })
    ).toBe(false);
  });

  it('rejects a token whose body is not a login token', () => {
    const accessToken = [
      encode(address),
      encode('not-a-login-token'),
      signature
    ].join('.');

    expect(isAccessTokenForLogin({ accessToken, address, origin })).toBe(false);
  });

  it('rejects a token issued to a different address', () => {
    expect(
      isAccessTokenForLogin({
        accessToken: buildAccessToken({ tokenAddress: otherAddress }),
        address,
        origin
      })
    ).toBe(false);
  });

  it('rejects a token issued for a different origin', () => {
    expect(
      isAccessTokenForLogin({
        accessToken: buildAccessToken({
          tokenOrigin: 'https://attacker.example'
        }),
        address,
        origin
      })
    ).toBe(false);
  });

  it('rejects an expired token', () => {
    expect(
      isAccessTokenForLogin({
        accessToken: buildAccessToken({
          timestamp: getUnixTimestamp() - 2 * 86400
        }),
        address,
        origin
      })
    ).toBe(false);
  });
});
