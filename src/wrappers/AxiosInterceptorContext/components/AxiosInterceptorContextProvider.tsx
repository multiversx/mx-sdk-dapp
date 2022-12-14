import React, {
  useContext,
  useState,
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext
} from 'react';
import { loginInfoSelector } from 'reduxStore/selectors';
import { deriveIsLoggedIn } from 'reduxStore/selectors/helpers';
import { LoginInfoStateType } from 'reduxStore/slices';
import { RootState, store } from 'reduxStore/store';

export type AuthStateType = {
  loginInfo: LoginInfoStateType & { isLoggedIn: boolean };
};

export interface AxiosInterceptorContextPropsType extends AuthStateType {
  address?: string;
  setAddress: Dispatch<SetStateAction<string | undefined>>;
  setLoginInfo: (props: AuthStateType['loginInfo']) => void;
}

interface AxiosInterceptorContextProviderPropsType {
  children: ReactNode;
}

const AxiosInterceptorContext = createContext(
  {} as AxiosInterceptorContextPropsType
);

const appState: RootState = store.getState();

/**
 * Used to lift the state of `<DappProvider>`, as a helper for setting interceptors
 * @example
 * <AxiosInterceptorContextProvider>
 *  <AxiosInterceptor> // set interceptors with `nativeAuth` Bearer token
 *   <Navbar /> // optionally get access to `isLoggedIn` and `address`
 *   <DappProvider> // all `axios` calls inside will use interceptors set above
 *    <Router />
 *    <LoginInfoListener/>
 *   <DappProvider/>
 *  <AxiosInterceptor/>
 * <AxiosInterceptorContextProvider/>
 */
export function AxiosInterceptorContextProvider({
  children
}: AxiosInterceptorContextProviderPropsType) {
  const [address, setAddress] = useState<string>();

  const loginData = loginInfoSelector(appState);

  const [loginInfo, setLoginInfo] = useState<AuthStateType['loginInfo']>({
    ...loginData,
    isLoggedIn: deriveIsLoggedIn(loginData.loginMethod, address)
  });

  const value: AxiosInterceptorContextPropsType = {
    address,
    setAddress,
    loginInfo,
    setLoginInfo: (data: AuthStateType['loginInfo']) => setLoginInfo(data)
  };

  return (
    <AxiosInterceptorContext.Provider value={value}>
      {children}
    </AxiosInterceptorContext.Provider>
  );
}

export function useAxiosInterceptorContext(): AxiosInterceptorContextPropsType {
  return useContext(AxiosInterceptorContext);
}
