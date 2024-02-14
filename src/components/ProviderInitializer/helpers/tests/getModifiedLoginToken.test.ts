import { getModifiedLoginToken } from '../getModifiedLoginToken';

describe('getMultiSigLoginToken', () => {
  test('returns null if loginToken or multisig is null', async () => {
    const result = await getModifiedLoginToken({
      loginToken: undefined,
      extraInfoData: {
        multisig:
          'erd1qqqqqqqqqqqqqpgq944h7h6mckw6q0d3g223cjz4ytvken86u00sz7carw'
      }
    });

    expect(result).toBeNull();
  });

  test('returns null if data or timestamp is missing', async () => {
    const result = await getModifiedLoginToken({
      loginToken: 'invalidLoginToken',
      extraInfoData: {
        multisig:
          'erd1qqqqqqqqqqqqqpgq944h7h6mckw6q0d3g223cjz4ytvken86u00sz7carw'
      }
    });

    expect(result).toBeNull();
  });

  test('returns valid tokenLogin for valid input', async () => {
    const validInput = {
      loginToken:
        'aHR0cHM6Ly9kZXZuZXQueGV4Y2hhbmdlLmNvbQ.d9ee880c609d5fe482a675826eb7e74f707c882e796ec191913a6c18d762685d.86400.eyJ0aW1lc3RhbXAiOjE3MDYxODAwMjd9',
      extraInfoData: {
        multisig:
          'erd1qqqqqqqqqqqqqpgq944h7h6mckw6q0d3g223cjz4ytvken86u00sz7carw'
      }
    };

    const result = await getModifiedLoginToken(validInput);

    const expectedTokenLogin =
      'aHR0cHM6Ly9kZXZuZXQueGV4Y2hhbmdlLmNvbQ.d9ee880c609d5fe482a675826eb7e74f707c882e796ec191913a6c18d762685d.86400.eyJtdWx0aXNpZyI6ImVyZDFxcXFxcXFxcXFxcXFxcGdxOTQ0aDdoNm1ja3c2cTBkM2cyMjNjano0eXR2a2VuODZ1MDBzejdjYXJ3IiwidGltZXN0YW1wIjoxNzA2MTgwMDI3fQ';

    expect(result).toEqual(expectedTokenLogin);
  });
});
