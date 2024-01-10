import React, { useRef, PropsWithChildren, useEffect } from 'react';
import axios from 'axios';
import { axiosInstance } from 'apiCalls/axiosInstance';
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

  const requestIdRef = useRef({
    0: -1,
    1: -1
  });

  const setResponseInterceptors = () => {
    const axiosResponse = axios.interceptors.response;
    const axiosInstanceResponse = axios.interceptors.response;
    [axiosResponse, axiosInstanceResponse].forEach((interceptor) => {
      interceptor.use(
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
    });
  };

  const setInterceptors = () => {
    axios.interceptors.request.eject(requestIdRef.current[0]);
    axiosInstance.interceptors.request.eject(requestIdRef.current[1]);

    const request = axios.interceptors.request;
    const instanceRequest = axiosInstance.interceptors.request;

    [request, instanceRequest].forEach((interceptor, index) => {
      requestIdRef.current[index] = interceptor.use(
        async (config) => {
          if (authenticatedDomains.includes(String(config?.baseURL))) {
            config.headers.set('Authorization', `Bearer ${bearerToken}`);
          }

          return config;
        },
        (error) => {
          Promise.reject(error);
        }
      );
    });
  };

  useEffect(setResponseInterceptors, []);

  useEffect(() => {
    if (bearerToken) {
      setInterceptors();
    }
  }, [bearerToken]);

  return <>{children}</>;
};
