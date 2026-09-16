import { stripCallbackUrlParams } from '../stripCallbackUrlParams';

describe('stripCallbackUrlParams', () => {
  it('strips the default "address" param', () => {
    expect(
      stripCallbackUrlParams('https://localhost:3000/feed?address=erd1-address')
    ).toEqual('https://localhost:3000/feed');
  });

  it('accepts a url whose origin is allowed', () => {
    expect(
      stripCallbackUrlParams('https://wallet.multiversx.com/dashboard', {
        allowedOrigins: ['https://wallet.multiversx.com']
      })
    ).toEqual('https://wallet.multiversx.com/dashboard');
  });

  it('rejects a url outside the allowed origins', () => {
    expect(() =>
      stripCallbackUrlParams('https://attacker.example/dashboard', {
        allowedOrigins: ['https://wallet.multiversx.com']
      })
    ).toThrow('Callback url origin is not allowed');
  });

  it('throws on a url that cannot be parsed instead of leaking the TypeError', () => {
    expect(() => stripCallbackUrlParams('/relative/path')).toThrow(
      'Invalid callback url'
    );
  });

  it('still applies the origin check to non-http schemes', () => {
    expect(() =>
      stripCallbackUrlParams('vscode://elrond.vscode-elrond-ide', {
        allowedOrigins: ['https://wallet.multiversx.com']
      })
    ).toThrow('Callback url origin is not allowed');
  });
});
