import { getExplorerLink } from '../getExplorerLink';

describe('getExplorerLink tests', () => {
  it('return "/${to}" parameter when the explorerAddress is empty and log an error in console', () => {
    // prevent showing errors in Jest console
    jest.mock('console', () => ({
      error: () => null
    }));

    const input = 'address';
    const consoleErrorSpy = jest.spyOn(console, 'error');

    const result = getExplorerLink({ explorerAddress: '', to: input });

    expect(consoleErrorSpy).toHaveBeenCalled();
    expect(result).toEqual(`/${input}`);
  });

  it('compose link using explorer address and "to" parameter', () => {
    const explorerAddress = 'http://devnet-explorer.multiversx.com';
    const to = '/address';

    const result = getExplorerLink({ explorerAddress, to });

    expect(result).toEqual(`${explorerAddress}${to}`);
  });
  it.each([
    'javascript:alert(1)',
    'data:text/html;base64,PHNjcmlwdD5hbGVydCgxKTwvc2NyaXB0Pg==',
    'vbscript:msgbox(1)'
  ])('returns an empty string for the unsafe absolute url %s', (to) => {
    jest.spyOn(console, 'error').mockImplementation(() => null);

    const result = getExplorerLink({
      explorerAddress: 'https://explorer.multiversx.com',
      to
    });

    expect(result).toEqual('');
  });

  it('returns https absolute urls unchanged', () => {
    const to = 'https://explorer.multiversx.com/accounts/erd1qqq';

    const result = getExplorerLink({
      explorerAddress: 'https://explorer.multiversx.com',
      to
    });

    expect(result).toEqual(to);
  });
});
