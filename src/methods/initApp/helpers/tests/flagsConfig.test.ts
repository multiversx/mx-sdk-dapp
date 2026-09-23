import {
  resetInsecureDefaultWarnings,
  warnInsecureDefault
} from '../flagsConfig';

describe('warnInsecureDefault', () => {
  let warnSpy: jest.SpyInstance;

  beforeEach(() => {
    resetInsecureDefaultWarnings();
    warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => null);
  });

  afterEach(() => jest.restoreAllMocks());

  it.each([
    ['strictLogout', 'true'],
    ['persistTokenLogin', 'false']
  ] as const)('tells to set %s to %s to opt in', (flag, value) => {
    warnInsecureDefault(flag, 'message');

    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining(`dAppConfig.flags.${flag}: ${value}\``)
    );
  });

  it('warns once per flag', () => {
    warnInsecureDefault('strictLogout', 'first');
    warnInsecureDefault('strictLogout', 'second');

    expect(warnSpy).toHaveBeenCalledTimes(1);
  });
});
