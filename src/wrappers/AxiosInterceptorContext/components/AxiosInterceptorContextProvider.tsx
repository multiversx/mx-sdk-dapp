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
import { RootState, store } from 'reduxStore/store';
import { LoginInfoStateType } from '../../../reduxStore/slices/loginInfoSlice';

export interface AxiosInterceptorContextPropsType {
  address?: string;
  isLoggedIn: boolean;
  setAddress: Dispatch<SetStateAction<string | undefined>>;
  loginInfo: LoginInfoStateType;
  setLoginInfo: (props: LoginInfoStateType) => void;
}

export interface AxiosInterceptorContextProviderPropsType {
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

  const [loginInfo, setLoginInfo] = useState<LoginInfoStateType>(
    loginInfoSelector(appState)
  );

  const value: AxiosInterceptorContextPropsType = {
    address,
    setAddress,
    isLoggedIn: deriveIsLoggedIn(loginInfo.loginMethod, address),
    loginInfo,
    setLoginInfo: (data: LoginInfoStateType) => setLoginInfo(data)
  };

  return (
    <AxiosInterceptorContext.Provider value={value}>
      {children}
    </AxiosInterceptorContext.Provider>
  );
}

export function useAxiosInterceptorContext(): AxiosInterceptorContextPropsType {
  const context = useContext(AxiosInterceptorContext);

  if (context === undefined || Object.values(context).length === 0) {
    throw new Error(
      'useAxiosInterceptorContext must be used within an AxiosInterceptorContextProvider'
    );
  }
  return context;
}
