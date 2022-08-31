import { getNetworkLink } from '../getNetworkLink';

describe('getNetworkLink', () => {
  it('return "/${to}" parameter when the explorerAddress is empty and log an error in console', () => {
    const input = 'address';
    const consoleErrorSpy = jest.spyOn(console, 'error');

    const result = getNetworkLink('', input);

    expect(consoleErrorSpy).toHaveBeenCalled();
    expect(result).toEqual(`/${input}`);
  });

  it('compose link using explorer address and "to" parameter', () => {
    const explorerAddress = 'http://devnet-explorer.elrond.com';
    const to = '/address';

    const result = getNetworkLink(explorerAddress, to);

    expect(result).toEqual(`${explorerAddress}${to}`);
  });
});
