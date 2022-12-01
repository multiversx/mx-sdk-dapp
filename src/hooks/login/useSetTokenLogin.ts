import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import { tokenLoginSelector } from 'reduxStore/selectors';
import { setTokenLogin } from 'reduxStore/slices';
import { useNativeAuthService } from './useNativeAuthService';

export const useSetTokenLogin = () => {
  const tokenLogin = useSelector(tokenLoginSelector);
  const nativeAuthService = useNativeAuthService(tokenLogin?.nativeAuthConfig);
  const dispatch = useDispatch();
  const hasNativeAuth = tokenLogin?.nativeAuthConfig != null;

  return ({
    signature,
    address,
    tokenToSign
  }: {
    signature: string;
    address: string;
    tokenToSign: string;
  }) => {
    if (signature && tokenToSign && !hasNativeAuth) {
      dispatch(
        setTokenLogin({
          loginToken: tokenToSign,
          signature
        })
      );
    }

    if (signature && tokenToSign && hasNativeAuth) {
      nativeAuthService.setNativeAuthTokenLogin({
        address,
        signature,
        token: tokenToSign
      });
    }
  };
};
