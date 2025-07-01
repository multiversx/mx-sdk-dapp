import { Dispatch, ReactNode, SetStateAction } from 'react';
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
export declare function AxiosInterceptorContextProvider({ children }: AxiosInterceptorContextProviderPropsType): JSX.Element;
export declare function useAxiosInterceptorContext(): AxiosInterceptorContextPropsType;
//# sourceMappingURL=AxiosInterceptorContextProvider.d.ts.map