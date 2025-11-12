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
});
