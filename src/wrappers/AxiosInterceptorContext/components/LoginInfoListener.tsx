import React, { PropsWithChildren, useEffect } from 'react';
import { useGetAccount, useGetLoginInfo } from 'hooks';
import { useAxiosInterceptorContext } from './AxiosInterceptorContextProvider';

export const LoginInfoListener = ({ children }: PropsWithChildren) => {
  const { address } = useGetAccount();
  const loginInfo = useGetLoginInfo();

  const { setLoginInfo, setAddress } = useAxiosInterceptorContext();

  useEffect(() => {
    setAddress(address);
    setLoginInfo(loginInfo);
  }, [loginInfo.tokenLogin?.loginToken, address]);

  return <>{children}</>;
};
