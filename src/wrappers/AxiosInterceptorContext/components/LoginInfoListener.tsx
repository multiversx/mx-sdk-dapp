import React, { PropsWithChildren, useEffect } from 'react';
import { useGetAccount } from 'hooks';
import { useSelector } from 'reduxStore/DappProviderContext';
import { loginInfoSelector } from 'reduxStore/selectors';
import { useAxiosInterceptorContext } from './AxiosInterceptorContextProvider';

export const LoginInfoListener = ({ children }: PropsWithChildren) => {
  const { address } = useGetAccount();
  const loginInfo = useSelector(loginInfoSelector);

  const { setLoginInfo, setAddress } = useAxiosInterceptorContext();

  useEffect(() => {
    setAddress(address);
    setLoginInfo(loginInfo);
  }, [loginInfo.tokenLogin?.loginToken, address]);

  return <>{children}</>;
};
