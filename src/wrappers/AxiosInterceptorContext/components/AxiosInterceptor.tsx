import React, { useRef, PropsWithChildren, useMemo } from 'react';
import axios from 'axios';
import { useAxiosInterceptorContext } from './AxiosInterceptorContextProvider';

export interface AxiosInterceptorType extends PropsWithChildren {
  authenticatedDomains: string[];
}

export const AxiosInterceptor = ({
  children,
  authenticatedDomains
}: AxiosInterceptorType) => {
  const { loginInfo } = useAxiosInterceptorContext();
  const bearerToken = loginInfo?.tokenLogin?.nativeAuthToken;

  const requestIdRef = useRef(-1);

  requestIdRef.current = useMemo(() => {
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        let url = error.config?.url;
        if (error.config?.params) {
          const queryString = new URLSearchParams(error.config.params);
          url += `?${queryString.toString()}`;
        }
        console.error('Axios error for: ', url);
        return Promise.reject(error);
      }
    );

    axios.interceptors.request.eject(requestIdRef.current);

    return axios.interceptors.request.use(
      async (config) => {
        if (
          authenticatedDomains.includes(String(config?.baseURL)) &&
          bearerToken
        ) {
          config.headers.Authorization = `Bearer ${bearerToken}`;
        }

        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );
  }, [bearerToken, authenticatedDomains]);

  return <>{children}</>;
};
