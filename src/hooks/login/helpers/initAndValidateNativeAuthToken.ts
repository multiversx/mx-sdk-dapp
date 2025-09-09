interface InitAndValidateNativeAuthTokenParamsType {
  hasNativeAuth: boolean;
  token: string | undefined;
  loginService: {
    getNativeAuthLoginToken: () => Promise<string>;
    setLoginToken: (token: string) => void;
  };
  onError?: (errorMessage: string) => void;
}

interface InitAndValidateNativeAuthTokenReturnType {
  token?: string;
  error?: string;
}

export const initAndValidateNativeAuthToken = async ({
  hasNativeAuth,
  token,
  loginService,
  onError
}: InitAndValidateNativeAuthTokenParamsType): Promise<InitAndValidateNativeAuthTokenReturnType> => {
  let resultToken = token;

  if (!hasNativeAuth && !token) {
    return { error: 'Native auth is not enabled' };
  }

  if (hasNativeAuth && !token) {
    const errorPrefix = 'Native auth token generation failed';

    try {
      resultToken = await loginService.getNativeAuthLoginToken();

      if (!resultToken) {
        console.error(errorPrefix);
        onError?.(errorPrefix);
        return { error: errorPrefix };
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error(`${errorPrefix}: ${errorMessage}`);
      const fullErrorMessage = `${errorPrefix}: ${errorMessage}`;
      onError?.(fullErrorMessage);
      return { error: fullErrorMessage };
    }
  }

  if (resultToken) {
    loginService.setLoginToken(resultToken);
  }

  return { token: resultToken };
};