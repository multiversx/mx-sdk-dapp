import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

interface InterceptAxiosCallsConfig {
  authenticatedDomains: string[];
  bearerToken?: string;
}

export const setAxiosInterceptors = ({
  authenticatedDomains,
  bearerToken
}: InterceptAxiosCallsConfig): void => {
  axios.interceptors.request.clear();
  axios.interceptors.response.clear();

  axios.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      let url = error.config?.url;
      if (error.config?.params) {
        const queryString = new URLSearchParams(error.config.params);
        url += `?${queryString.toString()}`;
      }
      console.error('Axios error for: ', url);
      return Promise.reject(error);
    }
  );

  axios.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      if (
        authenticatedDomains.includes(String(config?.baseURL)) &&
        bearerToken
      ) {
        config.headers.Authorization = `Bearer ${bearerToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
};
