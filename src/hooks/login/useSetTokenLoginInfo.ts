import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import { tokenLoginSelector } from 'reduxStore/selectors';
import { setTokenLogin } from 'reduxStore/slices';
import { useNativeAuthService } from './useNativeAuthService';

export const useSetTokenLoginInfo = () => {
  const tokenLogin = useSelector(tokenLoginSelector);
  const nativeAuthService = useNativeAuthService(tokenLogin?.nativeAuthConfig);
  const dispatch = useDispatch();
  const hasNativeAuth = tokenLogin?.nativeAuthConfig != null;

  return ({
    signature,
    address,
    token = ''
  }: {
    signature: string;
    address: string;
    token?: string;
  }) => {
    const loginToken = tokenLogin?.loginToken ?? token;
    if (!hasNativeAuth) {
      dispatch(
        setTokenLogin({
          loginToken,
          signature
        })
      );
    } else {
      nativeAuthService.setNativeAuthTokenLogin({
        address,
        signature,
        token: loginToken
      });
    }
  };
};
