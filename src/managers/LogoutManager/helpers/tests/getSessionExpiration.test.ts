import { getSessionExpiration } from '../getSessionExpiration';

const mockGetFlagsConfig = jest.fn();

jest.mock('methods/initApp/helpers/getFlagsConfig', () => ({
  getFlagsConfig: () => mockGetFlagsConfig()
}));

const HOUR_MS = 60 * 60 * 1000;

const makeState = ({
  nativeAuthToken,
  loginExpiresAt
}: {
  nativeAuthToken?: string;
  loginExpiresAt?: number | null;
} = {}) =>
  ({
    loginInfo: {
      tokenLogin: nativeAuthToken ? { nativeAuthToken } : null,
      loginExpiresAt: loginExpiresAt ?? null
    }
  }) as any;

describe('getSessionExpiration', () => {
  afterEach(() => jest.clearAllMocks());

  describe('enforceSessionExpiry off', () => {
    beforeEach(() =>
      mockGetFlagsConfig.mockReturnValue({ enforceSessionExpiry: false })
    );

    it('reports no expiry for a session without a nativeAuth token', () => {
      expect(
        getSessionExpiration(
          makeState({ loginExpiresAt: Date.now() - HOUR_MS })
        )
      ).toEqual({ isExpired: false });
    });

    it('reports no expiry for an undecodable token', () => {
      expect(
        getSessionExpiration(makeState({ nativeAuthToken: 'garbage' }))
      ).toEqual({ isExpired: false });
    });
  });

  describe('enforceSessionExpiry on', () => {
    beforeEach(() =>
      mockGetFlagsConfig.mockReturnValue({ enforceSessionExpiry: true })
    );

    it('falls back to loginExpiresAt for a non-nativeAuth session', () => {
      const result = getSessionExpiration(
        makeState({ loginExpiresAt: Date.now() + HOUR_MS })
      );

      expect(result.isExpired).toBe(false);
      expect(result.secondsUntilExpires).toBeGreaterThan(3500);
    });

    it('reports an elapsed loginExpiresAt as expired', () => {
      expect(
        getSessionExpiration(
          makeState({ loginExpiresAt: Date.now() - HOUR_MS })
        ).isExpired
      ).toBe(true);
    });

    it('fails closed on a token that cannot be decoded', () => {
      jest.spyOn(console, 'error').mockImplementation(() => null);

      expect(
        getSessionExpiration(makeState({ nativeAuthToken: 'garbage' }))
          .isExpired
      ).toBe(true);
    });

    it('reports no expiry when nothing indicates one', () => {
      expect(getSessionExpiration(makeState())).toEqual({ isExpired: false });
    });
  });
});
